import React, { useState } from "react";
import "./mainContent.css";
import Container from "../container/container";
import { NovaTarefa } from "../button/button";
import ModalCheck from "../modal/modal";

const MainContent = () => {
    const [tarefas, setTarefas] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleAdicionarTarefa = (description) => {
        setTarefas([...tarefas, { description: description, toDo: false }]);
    };
  return (
    <main className="main-content">
      <Container />
      <NovaTarefa onClick={() => setShowModal(true)} />
      {showModal ? (
        <ModalCheck
          adicionarTarefa={handleAdicionarTarefa}
          cancelarModal={() => setShowModal(false)}
        />
      ) : (
        <></>
      )}{" "}
    </main>
  );
};

export default MainContent;