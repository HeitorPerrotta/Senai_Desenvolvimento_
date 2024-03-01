import { useState } from "react";
import { AgendarConsulta } from "../../components/AgendarConsulta";
import {
  ButtonSecundary,
  ButtonSecundaryText,
  ButtonTitle,
  ModalButton,
} from "../../components/Button/Style";
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent";
import { ContainerData } from "../../components/Container/style";
import InputSelect from "../../components/Input/InputSelect/InputSelect";
import { LabelHorario } from "../../components/Text/style";
import { Title } from "../../components/Title/style";

export const SelecionarData = () => {
  const [showModalAgendarConsulta, setShowModalAgendarConsulta] =
    useState(false);

  return (
    <ContainerData>
      <Title>Selecionar data</Title>

      <CalendarComponent />

      <LabelHorario>Selecione um horário disponível</LabelHorario>

      <InputSelect />

      {/* modal de ver consulta agendada */}
      <AgendarConsulta
        visible={showModalAgendarConsulta}
        setShowModalAgendarConsulta={setShowModalAgendarConsulta}
      />

      <ModalButton onPress={() => setShowModalAgendarConsulta(true)}>
        <ButtonTitle>Continuar</ButtonTitle>
      </ModalButton>

      <ButtonSecundary>
        <ButtonSecundaryText>Cancelar</ButtonSecundaryText>
      </ButtonSecundary>
    </ContainerData>
  );
};
