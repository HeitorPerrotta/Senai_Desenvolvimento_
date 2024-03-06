import styled from "styled-components";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fafafa;
  width: 100%;
`;

export const ContainerClinic = styled(Container)`
  background-color: alicebluer;
`;

export const ViewBoxMedium = styled.SafeAreaView`
  width: 80%;
  align-items: flex-start;
`;
export const BoxNumeric = styled.SafeAreaView`
  width: 80%;
  flex-direction: row;
  margin-top: 15px;
  justify-content: space-between;
`;

export const ScrollContainer = styled.ScrollView`
  height: 100%;
  width: 100%;
  background-color: #fafafa;
`;

export const ContainerCepCidade = styled.SafeAreaView`
  margin-bottom: 3px;
  width: 100%;
  background-color: #fafafa;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 50px;
  margin-bottom: 35px;
`;

export const BoxAgeEmail = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2px;
  margin-right: 35px;
  margin-left: 95px;
`;

export const BoxDataHome = styled.SafeAreaView`
  flex-direction: column;

  width: 120px;
  height: 55px;

  align-items: center;

  margin-top: 26%;
`;

export const BoxHome = styled.SafeAreaView`
  width: 200px;
  height: 100%;
  flex-direction: row;

  margin-bottom: 8%;
  margin-right: 33%;
`;

export const MoveIconBell = styled.SafeAreaView`
  width: 35px;
  height: 35px;
  margin-top: 9%;
  align-items: center;
`;

export const MoveIconstethoscope = styled.TouchableOpacity`
  margin-left: 70%;
  margin-bottom: 20px;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  background-color: #49b3ba;
`;

export const ButtonHomeContainer = styled.SafeAreaView`
  width: 100%;
  margin-left: 9%;
  flex-direction: row;
  gap: 15px;
`;

export const BoxButtonLevel = styled(ButtonHomeContainer)`
  margin-left: 0;
`;

export const BoxCard = styled.SafeAreaView`
  flex-direction: row;
  width: 100%;

  /* border: 1px solid black; */
  align-items: flex-start;
`;
export const BoxCalendar = styled(BoxCard)`
  /* border: 1px solid black; */
  justify-content: center;
  align-items: center;
  background-color: #e8fcfd;
  margin-left: 15px;
  width: 100px;
  height: 26px;
  border-radius: 5px;
  gap: 7px;
`;

export const BoxTextCard = styled.SafeAreaView`
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  margin-left: 5px;
  gap: 6px;
`;
export const BoxTextDoctorCard = styled(BoxTextCard)`
  margin-left: 10px;
`;

export const BoxDateCancel = styled.SafeAreaView`
  width: 71%;
  height: 30px;
  justify-content: space-between;
  flex-direction: row;
`;

export const FlatContainer = styled.FlatList`
  width: 100%;
`;

export const FlatContainerSelect = styled(FlatContainer)`
  width: 100%;
  height: 350px;
`;

export const FlatContainerSelectClinic = styled(FlatContainer)`
  height: 550px;
`;

export const BoxRateTime = styled.SafeAreaView`
  flex-direction: column;
  gap: 15px;

  margin-top: 4px;

  /* border: 1px solid black; */
  margin-left: -39%;
`;
export const BoxRateStar = styled.SafeAreaView`
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: 65px;
  height: 22px;
  width: 45px;
  gap: 4px;
`;

export const BoxSendCancell = styled.SafeAreaView`
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  margin-bottom: 20px;
  gap: 110px;

  /* border-bottom-width: 1px solid #8C8A97; */
`;

export const BoxLocalizationHome = styled.SafeAreaView`
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
