import React, { useState } from 'react';
import './modal.css';
import Title from '../title/title';
import { NovaTarefa } from '../button/button';

const ModalCheck = ({ adicionarTarefa, cancelarModal, atualizarTarefa }) => {
  const [descricaoTarefa, setDescricaoTarefa] = useState('');

  const handleAdicionarTarefa = () => {
    adicionarTarefa(descricaoTarefa);
    setDescricaoTarefa(""); 
    cancelarModal();
  };

//   const handleAtualizarTarefa = () => {
//     if (index !== null) {
//       atualizarTarefa(index, descricaoTarefa);
//       setDescricaoTarefa("");
//       cancelarModal();
//     }
//   };

  return (
    <div className="modal">

      <div className="modal-content">

        <Title />

        <input 
          className="modal-input"
          type="text"
          value={descricaoTarefa} 
          onChange={(e) => setDescricaoTarefa(e.target.value)} 
          placeholder="Tarefa..." 
        />

        <NovaTarefa text={"Confirmar tarefa"} onClick={handleAdicionarTarefa}/>

      </div>

    </div>
  );
};

export default ModalCheck;