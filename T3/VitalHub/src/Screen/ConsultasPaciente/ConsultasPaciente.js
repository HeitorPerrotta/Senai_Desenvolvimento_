import { useState } from "react";
import { Container, FilterAppointment } from "../../Components/Container/Style";
import { StyledCalendarStrip } from "../../Components/Calendar/Style";
import { BtnListAppointment } from "../../Components/BtnListAppointment/Index";
import { HeaderContainer } from "../../Components/Header/Index";

export const ConsultasPaciente = () => {
  const [statusLista, setStatusLista] = useState("pendente");
  return (
    <Container>
      <HeaderContainer/>

      {/* Calendario */}
      <StyledCalendarStrip />

      {/* Botoes */}
      <FilterAppointment>
        {/* Botao Agendadas */}
        <BtnListAppointment 
            textButton={"Agendadas"}
            clickButton={statusLista === "agendadas"}
            onPress={() => setStatusLista ("agendadas")} 

        />

        {/* Botao Realizadas */}
        <BtnListAppointment 
            textButton={"Realizadas"}
            clickButton={statusLista === "realizadas"}
            onPress={() => setStatusLista ("realizadas")} 
        />

        {/* Botao Canceladas */}
        <BtnListAppointment 
            textButton={"Canceladas"}
            clickButton={statusLista === "canceladas"}
            onPress={() => setStatusLista ("canceladas")} 

        />
      </FilterAppointment>

      {/* Cards */}
    </Container>
  );
};
