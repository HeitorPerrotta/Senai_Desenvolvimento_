import styled, { css } from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fbfbfb;
`;

export const ContainerInput = styled.SafeAreaView`
  width: 80%;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 25px;
`;

export const ContainerP = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fbfbfb;
`;

export const BoxUser = styled.SafeAreaView`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const DataUser = styled.View`
  gap: 10px;
`;

export const PerfilCityInputsContainer = styled.View`
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
`;

export const ContainerConsulta = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fbfbfb;
`;

export const ContainerLevantado = styled.SafeAreaView`
  background-color: #fbfbfb;
  width: 70%;
  height: 100px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  margin-top: 300px;
  align-items: center;
  justify-content: center;
`;
export const ContainerClinic = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin-top: 30px;
  justify-content: center;
  width: 100%;
`;
//selecionarClinica
export const ContainerC = styled(ContainerClinic)`
  background-color: #fbfbfb;
  margin-top: 0px;
`;
export const ContainerCalendar = styled(ContainerClinic)`
  background-color: #fbfbfb;
  margin-top: 0px;
`;

export const ClinicContent = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
`;
export const ContainerSub = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerLevantadoConsulta = styled.TouchableOpacity`
  background-color: #fbfbfb;
  width: 90%;
  height: 110px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  margin: 0px auto;
  margin-bottom: 12px;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.clickButton
      ? css`
          border: 2px solid #496bba;
        `
      : css`
          border-color: transparent;
          elevation: 7px;
        `}
`;
export const ContainerCard = styled.SafeAreaView`
  flex-direction: row;
  /* justify-content: start; */
  /* margin-left: 40px; */
  align-items: center;
  gap: 15px;
  width: 100%;
`;

export const ContainerText = styled.View`
  width: 100%;
`;

export const ContainerHeader = styled(LinearGradient).attrs({
  colors: ["#60BFC5", "#496BBA"], // Cores do gradiente
  start: { x: -0.05, y: 1.08 }, // Ponto inicial do gradiente
  end: { x: 1, y: 0 }, // Ponto final do gradiente
})`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;
  width: 100%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const ContainerButtonSub = styled.View`
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
`;

export const ContainerCardSub = styled.SafeAreaView`
  flex-direction: row;
  /* justify-content: start; */
  /* margin-left: 40px; */
  align-items: center;
  gap: 15px;
  width: 100%;
`;

export const BoxCircle = styled.View`
  width: 100%;
  align-items: center;
  gap: 5px;
  flex-direction: row;
`;

export const Circle = styled.View`
  border-radius: 100px;
  background-color: #d9d9d9;
  width: 3px;
  height: 3px;
`;

export const ContainerCancel = styled.View`
  flex-direction: row;
  align-items: center;
  width: 80%;
  padding-right: 10px;
  justify-content: space-between;
`;

export const TimeBox = styled.View`
  width: 90px;
  height: 26px;
  gap: 5px;
  border-radius: 5px;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  /* gap: 10px; */
  background-color: ${(props) =>
    props.situacao == "pendente" ? "#E8FCFD" : "#F1F0F5"};
  justify-content: center;
`;

export const ContainerMedico = styled.View`
  position: fixed;
  left: 145px;
  top: -80px;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: #49b3ba;
  border-radius: 7px;
`;

export const ContainerShadow = styled.View`
  flex-direction: row;
  padding-left: 80px;
  padding-right: 80px;
`;

export const ContainerPic = styled.View`
  width: 80%;
  height: 111px;
  background-color: #f5f3f3;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
`;

export const ContainerLabel = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Separator = styled.View`
  width: 80%;
  height: 2px;
  margin-top: 20px;
  background-color: #8c8a97;
`;

export const InputContent = styled.View`
  width: 80%;
`;

export const ContainerMap = styled.View`
  width: 100%;
  height: 47%;
  
`;
