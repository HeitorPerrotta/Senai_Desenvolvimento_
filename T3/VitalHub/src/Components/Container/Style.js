import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ContainerVerificacao = styled.SafeAreaView`
  flex-direction: row;
  /* gap: 20px; */
  width: 80%;
  justify-content: space-between;
`;

export const ContainerPerfil = styled(Container)`
  background-color: white;
`;

export const ContainerHeader = styled(LinearGradient).attrs({
  colors: ["#60BFC5", "#496BBA"],
  start: { x: -0.05, y: 1.08 },
  end: { x: 1, y: 0 },
})`
  width: 100%;

  flex-direction: row;

  padding: 20px 20px 20px 20px;

  border-radius: 0px 0px 15px 15px;

  box-shadow: 0px 4px 15px #00000014;

  align-items: center;

  justify-content: space-between;
`;

export const FilterAppointment = styled.View`
  width: 90%;
  margin: 30px;
  flex-direction: row;
  justify-content: space-between;
`;
