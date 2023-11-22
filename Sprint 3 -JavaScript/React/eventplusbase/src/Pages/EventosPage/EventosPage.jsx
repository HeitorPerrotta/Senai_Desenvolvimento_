import React, { useState, useEffect } from "react";
import Title from "../../Components/Title/Title";
import TableEv from "./TableEv/TableEv";
import "./EventosPage.css";
import MainContent from "../../Components/MainContent/MainContent";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import Notification from "../../Components/Notification/Notification.js";
import eventImage from "../../assets/images/evento.svg";
import Container from "../../Components/Container/Container";
import { Button, Input } from "../../Components/FormComponents/FormComponents";
import Spinner from "../../Components/Spinner/Spinner";
import api from "../../Services/Service";

const EventosPage = () => {
  const [notifyUser, setNotifyUser] = useState({});
  const [showSpinner, setShowSpinner] = useState(true);
  const [frmEdit, setFrmEdit] = useState(false);
  const [nomeEvento, setnomeEvento] = useState("");
  const [idEvento, setIdEvento] = useState(null);
  const [typeEvents, setTypeEvents] = useState([]);

  useEffect(() => {
    // chamar a api
    async function getEventos() {
      try {
        const promise = await api.get("/Evento");

        setTypeEvents(promise.data);
      } catch (error) {
        console.log(error);
        alert("NÃO FOI! ! !");
      }
    }
    getEventos();
    setShowSpinner(false);
  }, [typeEvents]);

  async function handleSubmit(e) {
    //parar o submit do formulario
    e.preventDefault();
    //validar no minimo 3 caracteresx
    if (nomeEvento.trim().length < 3) {
      alert("O nomeEvento deve ter no minimo 3 carecteres ");
      return;
    }
    //chamar a api

    try {
      const retorno = await api.post("/Evento", { nomeEvento: nomeEvento });

      <Notification {...notifyUser} setNotifyUser={setNotifyUser} />;

      setNotifyUser({
        titleNote: "Sucesso",
        textNote: `Cadastrado com sucesso!`,
        imgIcon: "success",
        imgAlt:
          "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
        showMessage: true,
      });
      console.log(retorno.data);
      setnomeEvento(""); //limpa a variavel
    } catch (error) {
      console.log("Deu ruim na api");
      console.log(error);
    }
  }

  //ATUALIZACAO DOS DADOS
  async function handleUpdate(e) {
    e.preventDefault();
    try {
      const retorno = await api.put("/Evento/" + idEvento, {
        nomeEvento: nomeEvento,
      });
      const retornoGet = await api.get("/Evento/");
      setTypeEvents(retornoGet.data);
      alert("atualizado com sucesso ! ! !");
      editActionAbort();
    } catch (error) {
      alert("Problemas na atualização. ");
    }
  }

  function editActionAbort() {
    setFrmEdit(false);
    setnomeEvento("");
    setIdEvento(null);
  }

  async function showUpdateForm(id) {
    try {
      setFrmEdit(true);

      //fazer o get by id
      const retorno = await api.get(`/Evento/${id}`);
      // preencher o nomeEvento no state
      setnomeEvento(retorno.data.nomeEvento);
      setIdEvento(retorno.data.idEvento);
    } catch (error) {
      alert("showUpdateForm nao foi!!!");
    }
  }

  function handleDelete(idEvento) {
    alert("Bora la apagar na api");
    try {
      const promise = api.delete(`/Evento/${idEvento}`);
    } catch (error) {
      console.log(error);
      alert("Deu ruim");
    }
  }
  return (
    <MainContent>
      <Notification {...notifyUser} setNotifyUser={setNotifyUser} />

      {showSpinner ? <Spinner /> : null}
      {/* Cadastro de tipo de eventos*/}
      <section className="cadastro-evento-section">
        <Container>
          <div className="cadastro-evento__box">
            <Title titleText={"Página de Eventos"} />
            <ImageIllustrator alterText={"???"} imageRender={eventImage} />

            <form
              className="ftipo-evento"
              onSubmit={frmEdit ? handleUpdate : handleSubmit}
            >
               {!frmEdit ? (
              <>
                <Input
                  type={"text"}
                  id={"nome"}
                  name={"nome"}
                  placeholder={"Nome"}
                  //   manipulationFunction={"???"} // PENDENTE
                />

                <Input
                  type={"text"}
                  id={"descricao"}
                  name={"descricao"}
                  placeholder={"Descrição"}
                  //   manipulationFunction={"???"} // PENDENTE
                />

                <select name="tipo-evento-select">
                  {typeEvents.map((evento) => {
                    return <option>{`${evento.titulo}`}</option>;
                  })}
                </select>

                <Input
                  type={"date"}
                  id={"data"}
                  name={"data"}
                  //   placeholder={"dd/mm/aaaa"}
                  //   manipulationFunction={"???"} // PENDENTE
                />
                <span>{nomeEvento}</span>

                <Button
                  type={"submit"}
                  id={"cadastrar"}
                  name={"cadastrar"}
                  textButton={"Cadastrar"}
                />
              </>
            ) : (
              <>
                <Input
                  id="nomeEvento"
                  placeholder="Título"
                  name="nomeEvento"
                  type="text"
                  required="required"
                  value={nomeEvento}
                  manipulationFunction={(e) => setnomeEvento(e.target.value)}
                />
                <div className="buttons-editbox">
                  <Button
                    textButton="Atualizar"
                    id="atualizar"
                    name="atualizar"
                    type="submit"
                    additionalClass="button-component--middle"
                  />
                  <Button
                    textButton="Cancelar"
                    id="cancelar"
                    name="cancelar"
                    type="buttom"
                    manipulationFunction={editActionAbort}
                    additionalClass="button-component--middle"
                  />
                </div>
              </>
              )}
            
            {/*Atualizar*/}
            </form>
          </div>
        </Container>
      </section>

      {/* Listagem de tipos de eventos */}
      <section className="lista-eventos-section">
        <Container>
          <Title titleText={"Lista de Eventos"} color="white" />

          <TableEv
            dados={typeEvents}
            fnUpdate={showUpdateForm}
            fnDelete={handleDelete}
          />
        </Container>
      </section>
    </MainContent>
  );
};

export default EventosPage;
