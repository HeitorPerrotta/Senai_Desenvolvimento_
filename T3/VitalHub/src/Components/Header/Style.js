import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export const HeaderContainer = styled.View`
  /* flex: 1; */
  /* border-radius: 0 0 15px 15px; */
  width: 100%;
`;


// herdando do componente LineaderGradient da biblioteca "Expo-Linear-Gradient" e usando o attrs para personalizar suas caracteristicas
export const HeaderContent = styled(LinearGradient).attrs({
  colors: ["#60BFC5", "#496BBA"],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 1 },
  locations: [0, 1],
})`
  justify-content: space-around;
  align-items: center;
  border-radius: 0 0 15px 15px;
  flex-direction: row;
  height: 144px;
`;

export const DoctorUser = styled.ImageBackground`
  width: 60px;
  height: 60px;
`;


export const Welcome = styled.Text`
  color: #4e4b59;
  font-size: 14px;
  font-family: "Quicksand_500Medium";
`;

export const DoctorName = styled.Text`
  color: #fbfbfb;
  font-size: 16px;
  font-family: "MontserratAlternates_600SemiBold";
`;

export const Notification = styled.Image`
  width: 25px;
  height: 25px;
`;



//style do body

export const MonthDays = styled.View`
    width: 85%;
    margin-top: 25px;
`

export const TitleMonth = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 20px;
    margin-bottom: 24px;
`

export const DaysWeek = styled.View`

`

export const Day = styled.Text`
font-size: 12px;
font-family: 'Quicksand_600SemiBold';
color: #ACABB7;
`

export const DayNumber = styled.Text`
font-size: 16px;
font-family: 'Quicksand_600SemiBold';
`

export const Consults = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 85%;
    margin-bottom: 20px;
`

export const DaysFlex = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 42px;
`



