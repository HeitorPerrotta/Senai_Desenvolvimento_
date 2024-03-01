import styled from "styled-components";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fafafa;
`;

export const ContentInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* background-color: brown; */
  width: 90%;
`;

export const UserBoxInput = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const CardContainer = styled.View.attrs({
  shadowColor: "black",
  shadowOffset: { width: -2, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  elevation: 10,
})`
  margin-bottom: 12px;
  background-color: #ffffff;
  border-radius: 8px;
  width: 320px;
  /* height: 102px; */
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px;
`;

export const InfoContainer = styled.View`
  position: absolute;
  top: 220px;
  /* left: 15%; */
  border-radius: 5px;
  background-color: #ffffff;
  height: 100px;
  width: 280px;
  justify-content: center;
  align-items: center;
  elevation: 10px;
`;

export const ContentInfosDoc = styled.View`
  margin-left: 10px;
`;

export const DoctorBox = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 38px;
  margin-bottom: 8px;
  width: 90%;
  justify-content: space-around;
`;

export const ContainerShadow = styled.SafeAreaView`
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
  elevation: 5px;
`;

export const ClinicContent = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ClinicaContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin-top: 30px;
  justify-content: center;
  width: 100%;
`;

export const DataUser = styled.View`
  gap: 10px;
`;

export const ContainerMedico = styled.View`
  /* width: 100%; */
  align-items: center;
  gap: 20px;
  margin-top: 50px;
`;

export const SelecionarMedicoContainer = styled.View`
  width: 320px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border: 2px solid white;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
`;

export const NomeEspecialidade = styled.View`
  gap: 10px;
  width: 80%;
  flex-direction: column;
`;

export const ContainerData = styled.View`
  width: 100%;
  align-items: center;
`;

export const DownArrow = styled.View`
  left: 160px;
  bottom: 44px;
`;

export const ContainerTitleSubtitle = styled.View`
  /* border: 1px solid black; */
  align-self: flex-start;
`;

// export const Container100 = styled.FlatList`
// width: 100%;
// `

// export const Container100Medico = styled(Container100)`
// width: 100%;
// height: 550px;
// `
