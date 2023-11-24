import React, { useState, useEffect } from "react";
import Title from "../../Components/Title/Title";
import TableEv from "./TableEv/TableEv";
import "./EventosPage.css";
import MainContent from "../../Components/MainContent/MainContent";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import Notification from "../../Components/Notification/Notification.js";
import eventImage from "../../assets/images/evento.svg";
import Container from "../../Components/Container/Container";
import {
  Button,
  Input,
  Select,
} from "../../Components/FormComponents/FormComponents";
import api from "../../Services/Service";

const EventosPage = () => {
  const [notifyUser, setNotifyUser] = useState({});
  const [frmEdit, setFrmEdit] = useState(false);
  const [nomeEvento, setNomeEvento] = useState("");
  const [dataEvento, setDataEvento] = useState("");
  const [description, setDescription] = useState("");
  const [instituicao, setInstituicao] = useState([]);
  const [idTipoEvento, setIdTipoEvento] = useState([]);
  const [Events, setEvents] = useState([]);
  const [typeEvents, setTypeEvents] = useState([]);


    // chamar a api
    async function getEventos() {
      try {
        const retornoGet = await api.get("/Evento");
        const retornoIt = await api.get("/Instituicao");

        setEvents(retornoGet.data);
        setInstituicao(retornoIt.data[0].idInstituicao);
      } catch (error) {
        console.log(error);
        alert("A Lista Eventos deu ruim ! ! !");
      }
    }
  useEffect(() => {


    async function getTipoEventos() {
      try {
        const retornoGetTp = await api.get("/TiposEvento");

        setTypeEvents(retornoGetTp.data);
      } catch (error) {
        console.log(error);
        alert("A Lista Tipo Eventos deu ruim ! ! !");
      }
    }
    getEventos();
    getTipoEventos();
  }, []);

  async function handleSubmit(e) {
    //parar o submit do formulario
    e.preventDefault();
    //validar no minimo 3 caracteresx
    if (nomeEvento.trim().length < 3) {
      alert("O Nome do Evento deve ter no minimo 3 carecteres ");
    }
    //chamar a api

    try {
      const retorno = await api.post("/Evento", {
        nomeEvento: nomeEvento,
        descricao: description,
        dataEvento: dataEvento,
        idTipoEvento: idTipoEvento,
        idInstituicao: instituicao
      });
      getEventos();
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
      setNomeEvento(""); //limpa a variavel
    } catch (error) {
      console.log("Deu ruim na api");
      console.log(error);
    }
  }

  //ATUALIZACAO DOS DADOS
  async function handleUpdate(e) {}

  function editActionAbort() {}

  async function showUpdateForm(id) {}
  
  //deletamentação
  async function handleDelete(id) {
    try {
      const promise = await api.delete(`/Evento/${id}`);
      getEventos();
      console.log(promise.data);
    } catch (error) {
      alert("Deu ruim na API!");
    }
  }

  return (
    <MainContent>
      <Notification {...notifyUser} setNotifyUser={setNotifyUser} />

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
                    value={nomeEvento}
                    manipulationFunction={(e) => {
                      setNomeEvento(e.target.value);
                    }}
                    //   manipulationFunction={"???"} // PENDENTE
                  />

                  <Input
                    type={"text"}
                    id={"descricao"}
                    name={"descricao"}
                    placeholder={"Descrição"}
                    value={description}
                    manipulationFunction={(e) => {
                      setDescription(e.target.value);
                    }}
                    //   manipulationFunction={"???"} // PENDENTE
                  />

                  <Select
                    dados={typeEvents}
                    value={idTipoEvento}
                    manipulationFunction={(e) => {
                      setIdTipoEvento(e.target.value);
                    }}
                    required={"required"}
                  />

                  <Input
                    type={"date"}
                    id={"data"}
                    name={"data"}
                    required={"required"}
                    value={dataEvento}
                    manipulationFunction={(e) => {
                      setDataEvento(e.target.value);
                    }}
                    //   placeholder={"dd/mm/aaaa"}
                    //   manipulationFunction={"???"} // PENDENTE
                  />

                  <Button
                    type={"submit"}
                    id={"cadastrar"}
                    name={"cadastrar"}
                    textButton={"Cadastrar"}
                    additionalClass={"btn-cadastrar"}
                  />
                </>
              ) : (
                <>
                  <Input
                    type={"text"}
                    id={"nome"}
                    name={"nome"}
                    placeholder={"Nome"}
                    value={nomeEvento}
                    manipulationFunction={(e) => {
                      setNomeEvento(e.target.value);
                    }}
                    //   manipulationFunction={"???"} // PENDENTE
                  />

                  <Input
                    type={"text"}
                    id={"descricao"}
                    name={"descricao"}
                    placeholder={"Descrição"}
                    value={description}
                    manipulationFunction={(e) => {
                      setDescription(e.target.value);
                    }}
                    //   manipulationFunction={"???"} // PENDENTE
                  />

                  <Select
                    typeEvents={typeEvents}
                    value={idTipoEvento}
                    manipulationFunction={(e) => {
                      setIdTipoEvento(e.target.value);
                    }}
                    required={"required"}
                  />

                  <Input
                    type={"date"}
                    id={"data"}
                    name={"data"}
                    required={"required"}
                    value={dataEvento}
                    manipulationFunction={(e) => {
                      setDataEvento(e.target.value);
                    }}
                    //   placeholder={"dd/mm/aaaa"}
                    //   manipulationFunction={"???"} // PENDENTE
                  />

                  <Button
                    type={"submit"}
                    id={"cadastrar"}
                    name={"cadastrar"}
                    textButton={"Cadastrar"}
                    additionalClass={"btn-cadastrar"}
                  />
                </>
              )}
            </form>
          </div>
        </Container>
      </section>

      {/* Listagem de tipos de eventos */}
      <section className="lista-eventos-section">
        <Container>
          <Title titleText={"Lista de Eventos"} color="white" />

          <TableEv
            dados={Events}
            fnUpdate={showUpdateForm}
            fnDelete={handleDelete}
          />
        </Container>
      </section>
    </MainContent>
  );
};

export default EventosPage;