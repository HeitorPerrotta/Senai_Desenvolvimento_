import "./App.css";
import Container from "./components/container/container";
import MainContent from "./components/mainContent/mainContent";
import { useState } from "react";

function App() {
  return (
    <MainContent>
      <Container />
    </MainContent>
  );
}

export default App;
