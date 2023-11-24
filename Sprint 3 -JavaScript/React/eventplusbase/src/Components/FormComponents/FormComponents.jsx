import React from "react";
import "./FormComponents.css";

export const Input = ({
  type,
  id,
  required,
  additionalClass = "",
  name,
  placeholder,
  manipulationFunction,
  value,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      required={required}
      className={`input-component ${additionalClass}`}
      placeholder={placeholder}
      onChange={manipulationFunction}
      autoComplete="off"
    />
  );
};

export const Button = ({
  textButton,
  id,
  name,
  type,
  additionalClass = "",
  manipulationFunction,
}) => {
  return (
    <button
      type={type}
      name={name}
      id={id}
      className={`button-component ${additionalClass}`}
      onClick={manipulationFunction}
    >
      {textButton}
    </button>
  );
};

// const options = [
//   {
//     value: "53f955fd-5d4a-421f-a384-22d4ab4f69f3",
//     text: "Evento Comemorativo",
//   },
//   {
//     value: "3ea9d879-683c-41b5-8ed8-7a02d5487be9",
//     text: "Festa do Sábias Palavras",
//   },
// ];

//SELECT
export const Select = ({
  dados,
  id,
  name,
  required,
  additionalClass = "",
  manipulationFunction,
  defaultValue,
}) => {
  return (
    <select
      name={name}
      required={required}
      id={id}
      className={`input-component ${additionalClass}`}
      onChange={manipulationFunction}
      value={defaultValue}
    >
      <option value="">Selecione uma opção</option>
      {dados.map((opt) => {
        return (
          <option key={opt.idTipoEvento} value={opt.idTipoEvento}>
            {opt.titulo}
          </option>
        );
      })}
    </select>
  );
};
