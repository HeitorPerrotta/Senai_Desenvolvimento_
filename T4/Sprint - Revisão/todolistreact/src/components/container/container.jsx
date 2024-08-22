import React, { useState } from "react";
import "./container.css";
import Input from "../input/input";
import Toggle from "../toggle/toggle";
import CheckBox from "../checkbox/checkbox";
import Title from "../title/title";
import { DeleteButton, EditButton, NovaTarefa } from "../button/button";

const Container = ({ children }) => {
  const [toDoList, setToDoList] = useState([]);

  return (
    <div className="container">
      {children}
      <Title />
      <Input />
      {toDoList.map((toDo) => (
        <Toggle>
          <CheckBox />
          <p className="textoToggle">{toDo.description}</p>
          <EditButton />
          <DeleteButton />
        </Toggle>
      ))}
    </div>
  );
};

export default Container;
