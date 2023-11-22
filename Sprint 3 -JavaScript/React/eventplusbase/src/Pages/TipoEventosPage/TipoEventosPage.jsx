import React, { useState, useEffect } from "react";
import Title from "../../Components/Title/Title";
import "./TipoEventosPage.css";
import MainContent from "../../Components/MainContent/MainContent";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import Notification from "../../Components/Notification/Notification.js";
import eventTypeImage from "../../assets/images/tipo-evento.svg";
import Container from "../../Components/Container/Container";
import { Button, Input } from "../../Components/FormComponents/FormComponents";
import Spinner from "../../Components/Spinner/Spinner"

import api from "../../Services/Service";
import TableTp from "./TableTp/TableTp";

const TipoEventosPage = () => {
  const [notifyUser, setNotifyUser] = useState({})
  const [showSpinner, setShowSpinner] = useState(true)
  const [frmEdit, setFrmEdit] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [idEvento, setIdEvento] = useState(null);
  const [typeEvents, setTypeEvents] = useState([])

  useEffect(() => {
    // chamar a api
    async function getTipoEventos() {
      try {
        const promise = await api.get("/TiposEvento");

        setTypeEvents(promise.data);

      } catch (error) {
        console.log(error);
        alert("NÃO FOI! ! !");
      }
    } getTipoEventos();
    setShowSpinner(false)
  }, [typeEvents]);

  async function handleSubmit(e) {
    //parar o submit do formulario
    e.preventDefault();
    //validar plmns 3 caracteres
    if (titulo.trim().length < 3) {
      alert("O titulo deve ter no minimo 3 carecteres ");
      return;
    }
    //chamar a api

    try {
      const retorno = await api.post("/TiposEvento/", { titulo: titulo });

      <Notification {...notifyUser} setNotifyUser={setNotifyUser} />

      setNotifyUser({
        titleNote: "Sucesso",
        textNote: `Cadastrado com sucesso!`,
        imgIcon: "success",
        imgAlt:
          "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
        showMessage: true,
      });
      console.log(retorno.data);
      setTitulo(""); //limpa a variavel
    } catch (error) {
      console.log("Deu ruim na api");
      console.log(error);
    }
  }

  //ATUALIZACAO DOS DADOS
  async function handleUpdate(e) {
    e.preventDefault();
    try {
      const retorno = await api.put('/TiposEvento/' + idEvento, {
        titulo: titulo
      })
      const retornoGet = await api.get('/TiposEvento')
      setTypeEvents(retornoGet.data);
      alert('atualizado com sucesso ! ! !')
      editActionAbort();
    } catch (error) {
      alert("Problemas na atualização. ")
    }
  }

  function editActionAbort() {
    setFrmEdit(false);
    setTitulo("");
    setIdEvento(null);
  }

  async function showUpdateForm(id) {
    try {
      setFrmEdit(true);
      //fazer o get by id
      const retorno = await api.get(`/TiposEvento/${id}`);
      // preencher o titulo no state
      setTitulo(retorno.data.titulo);
      setIdEvento(retorno.data.idTipoEvento);
    } catch (error) {
      alert("showUpdateForm nao foi!!!")
    }
  }


  function handleDelete(idTipoEvento) {
    alert("Bora la apagar na api");
    try {
      const promise = api.delete(`/TiposEvento/${idTipoEvento}`)
    }
    catch (error) {
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
            <Title titleText={"Página Tipos de Eventos"} />
            <ImageIllustrator alterText={"???"} imageRender={eventTypeImage} />

            <form
              className="ftipo-evento"
              onSubmit={frmEdit ? handleUpdate : handleSubmit}
            >
              {!frmEdit ? (
                /* Cadastrar*/
                <>
                  <Input
                    type={"text"}
                    id={"titulo"}
                    name={"titulo"}
                    placeholder={"Título"}
                    required={"required"}
                    value={titulo}
                    manipulationFunction={(e) => {
                      setTitulo(e.target.value);
                    }}
                  />
                  <span>{titulo}</span>

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
                    id="titulo"
                    placeholder="Título"
                    name="titulo"
                    type="text"
                    required="required"
                    value={titulo}
                    manipulationFunction={(e) =>
                      setTitulo(e.target.value)
                    }
                  />
                  <div className="buttons-editbox">
                    <Button textButton="Atualizar"
                      id="atualizar"
                      name="atualizar"
                      type="submit"
                      additionalClass="button-component--middle"
                    />
                    <Button textButton="Cancelar"
                      id="cancelar"
                      name="cancelar"
                      type="buttom"
                      manipulationFunction={editActionAbort}
                      additionalClass="button-component--middle"
                    />
                  </div>
                </>
              )}

              {/* Atualizar  */}
            </form>
          </div>
        </Container>
      </section>

      {/* Listagem de tipos de eventos */}
      <section className="lista-eventos-section">
        <Container>
          <Title titleText={"Lista Tipo de Eventos"} color="white" />

          <TableTp
            dados={typeEvents}
            fnUpdate={showUpdateForm}
            fnDelete={handleDelete}
          />
        </Container>
      </section>
    </MainContent>
  );
};

export default TipoEventosPage;