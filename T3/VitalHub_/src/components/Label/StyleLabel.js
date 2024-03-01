import styled from "styled-components";

export const InputLabel = styled.Text`
  /* margin-left: 41px; */
  text-align: left;
  width: 100%;
  font-size: 18px;
  font-family: Quicksand_600SemiBold;
  color: #33303e;
`;
export const InputLabelModal = styled.Text`
  font-family: Quicksand_600SemiBold;
  font-size: 14px;
  align-self: flex-start;
`;

export const InputLabelPrescription = styled(InputLabel)`
  font-size: 16px;
  /* align-self: flex-start; */
`;

export const InputLabelSelect = styled(InputLabel)`
  font-size: 16px;
  color: #000000;
  margin-top: 4%;
  margin-bottom: 4%;
  margin-left: 12%;
`;

export const LabelDescription = styled.Text`
  font-size: 16px;
  font-family: Quicksand_600SemiBold;

  width: 100%;
  color: #33303e;
`;
