import React, { useEffect, useState } from "react";
import Title from "../../Components/Title/Title";
import "./TipoEventosPage.css";
import MainContent from "../../Components/MainContent/MainContent";
import ImageIllustrator from "../../Components/ImageIllustrator/ImageIllustrator";
import eventTypeImage from "../../assets/images/tipo-evento.svg";
import Container from "../../Components/Container/Container";
import TableTp from "./TableTp/TableTp";

import { Button, Input } from "../../Components/FormComponents/FormComponents";

import api from "../../Services/Service";

import Notification from "../../Components/Notification/Notification";

import Spinner from "../../Components/Spinner/Spinner"

const TipoEventos = () => {
  //satate do componente Notification
  const [notifyUser, setNotifyUser] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);

  const [frmEdit, setFrmEdit] = useState(false);

  const [titulo, setTitulo] = useState("");
  const [idEvento, setIdEvento] = useState(null);//usar apenas para a edição

  const [tipoEventos, setTipoEventos] = useState([
    // {"idTipoEvento": "123", "titulo": "Evento ABC"},
    // {"idTipoEvento": "555", "titulo": "Evento xpto"},
    // {"idTipoEvento": "444", "titulo": "Evento de JavaScript"}
  ]); //array mocado

  useEffect(() => {
    async function getTipoEventos() {
      try {
        const promise = await api.get("/TiposEvento");

        console.log(promise.data);
        setTipoEventos(promise.data);
      } catch (error) {
        alert("Deu ruim na API!");
      }
    }
    getTipoEventos();
    console.log("A TIPO EVENTOS FOI MONTADA!");
    
  }, []);

  async function handleSubmit(e) {
    setShowSpinner(true);
    // parar o submit do formulário
    e.preventDefault();
    // validar pelo menos 3 caracteres
    if (titulo.trim().length < 3) {
      alert("O Título deve ter no mínimo 3 caracteres");
      return;
    }
    // chamar a api
    try {
      const retorno = await api.post("/TiposEvento", { titulo: titulo });

      setNotifyUser({
        titleNote: "Sucesso",
        textNote: `Cadastrado com sucesso!`,
        imgIcon: "success",
        imgAlt:
          "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
        showMessage: true,
      });

      const retornoGet = await api.get(`/TiposEvento`);
      setTipoEventos(retornoGet.data);
      console.log("CADASTRO COM SUCESSO!");
      console.log(retorno.data);
      setTitulo(""); //limpa a variável
    } catch (error) {
      console.log("Deu ruim na api: ");
      console.log(error);
    }
    setShowSpinner(false);
  }
  /****************** EDITAR CADASTRO ******************/

  async function showUpdateForm(idElemento) {
    setFrmEdit(true);

    try {
      // fazer um getById para pegar os dados
      const retorno = await api.get(`/TiposEvento/${idElemento}`);

      // preencher o título e o id no state
      setTitulo(retorno.data.titulo);
      setIdEvento(retorno.data.idTipoEvento);

    } catch (error) {
      alert("Não foi possível mostrar a tela de edição, tente novamente!");
    }
  }

  async function handleUpdate(e) {
    try {
      e.preventDefault();

      // salvar os dados
      const retorno = await api.put(`/TiposEvento/${idEvento}`, {
        titulo: titulo
      });

      setNotifyUser({
        titleNote: "Sucesso",
        textNote: `Atualizado com sucesso!`,
        imgIcon: "success",
        imgAlt:
          "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
        showMessage: true,
      });

      // atualizar o state (apiGet)
      const retornoGet = await api.get(`/TiposEvento`);
      setTipoEventos(retornoGet.data);// atualiza o state da tabela
      // limpar o state do título e do idEvento
      editActionAbort();

    } catch (error) {
      alert("Problemas na atualização. Verifique a conexão com a internet!");
    }
  }

  // reseta o state e cancela a tela de edição
  function editActionAbort() {
    setFrmEdit(false);
    setTitulo("");
    setIdEvento(null);
  }

  async function handleDelete(id) {
    try {
      const promise = await api.delete(`/TiposEvento/${id}`);
      
      const retornoGet = await api.get(`/TiposEvento`);
      console.log(promise.data);
      setTipoEventos(retornoGet.data);
    } catch (error) {
      alert("Deu ruim na API!");
    }
  }

  return (
    <MainContent>
      <Notification {...notifyUser} setNotifyUser={setNotifyUser} />
      {/* <Spinner /> */}
      
      {/* spinner loading condicional */}
      { showSpinner ? <Spinner /> : null }

      {/* Cadastro de tipo eventos */}
      <section className="cadastro-evento-section">
        <Container>
          <div className="cadastro-evento__box">
            <Title titleText={"Página Tipo Eventos"} />
            <ImageIllustrator
              alterText={"?????"}
              imageRender={eventTypeImage}
            />

            <form
              className="ftipo-evento"
              onSubmit={frmEdit ? handleUpdate : handleSubmit}
            >
              {!frmEdit ? (
                <>
                  {/* Cadastrar */}
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
                  {/* <span>{titulo}</span> */}
                  <Button
                    type={"submit"}
                    id={"cadastrar"}
                    name={"cadastrar"}
                    textButton={"Cadastrar"}
                  />
                </>
              ) : (
                
                <>
                    { /* Editar */ }
                    
                    <Input
                      id={"titulo"}
                      placeholder={"Título"}
                      name={"titulo"}
                      type={"text"}
                      required={"required"}
                      value={titulo}
                      manipulationFunction={(e) => {
                        setTitulo(e.target.value);
                      }}
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
                      type="button"
                      manipulationFunction={editActionAbort}
                      additionalClass="button-component--middle"
                    />

                    </div>

                  </>
                
              )}
            </form>
          </div>
        </Container>
      </section>

      {/* Listagem de tipo eventos */}
      <section className="lista-eventos-section">
        <Container>
          <Title titleText={"Lista Tipo Eventos"} color="white" />

          <TableTp
            dados={tipoEventos}
            fnUpdate={showUpdateForm}
            fnDelete={handleDelete}
          />
        </Container>
      </section>
    </MainContent>
  );
};

export default TipoEventos;