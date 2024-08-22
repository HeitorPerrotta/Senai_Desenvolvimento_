import React, { useState } from "react";
import "./modal.css";
import Title from "../title/title";
import { NovaTarefa } from "../button/button";

const ModalUpdate = ({ cancelarModal, atualizarTarefa, index }) => {
  const [descricaoTarefa, setDescricaoTarefa] = useState("");

  const handleAtualizarTarefa = () => {
    if (index !== null) {
      atualizarTarefa(index, descricaoTarefa);
      setDescricaoTarefa("");
      cancelarModal();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <Title />

        <input
          className="modal-input"
          type="text"
          value={taskDescription}
          onChange={(e) => setDescricaoTarefa(e.target.value)}
          placeholder="Tarefa..."
        />

        <NovaTarefa text={"Atualizar tarefa"} onClick={handleAtualizarTarefa} />
      </div>
    </div>
  );
};

export default ModalUpdate;
