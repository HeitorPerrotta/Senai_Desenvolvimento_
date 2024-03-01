import styled from "styled-components";

export const TextMedicContainer = styled.View`
  align-items: center;
`;


export const ScheduleAppointmentContent = styled.View`
  flex: 1;
  /* width: 415px; */
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.60);
`

export const TitleMedic = styled.Text`
  font-family: "MontserratAlternates_600SemiBold";
  font-size: 20px;
  color: #33303e;
  margin: 15px 0;
  text-transform: capitalize;
`;

export const InfoMedic = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 20px;

`;

export const SubtitleMedic = styled.Text`
    font-family: 'Quicksand_400Medium';
    font-size: 14px;
    color: #5F5C6B;
`

export const CRM = styled(SubtitleMedic)`
    
`

export const ModalImageConsult = styled.Image`
  width: 285px;
  height: 181px;
`