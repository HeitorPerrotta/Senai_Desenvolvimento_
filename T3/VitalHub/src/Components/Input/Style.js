import styled from "styled-components";
import { InputPerfil } from "../PerfilLabel/Style";

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#4983BA",
})`
  width: 90%;
  height: 53px;
  padding: 16px;
  border: 2px solid #49b3ba;
  border-radius: 5px;
  margin-bottom: 25;
`;

export const InputCodigo = styled(Input)`
  height: 65px;
  width: 65px;
  padding: 0px;
  padding-bottom: 5px;
  margin-top: 0px;
  font-size: 40px;
`;

export const InputBoxShadow = styled.SafeAreaView`
  margin-top: -52px;
  background-color: white;
  width: 70%;
  height: 110px;
  elevation: 15;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const TextInputShadow = styled.Text`
  font-family: MontserratAlternates_600SemiBold;
  font-size: 16px;
`;

export const BoxInput = styled.SafeAreaView`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
`;

export const CepCidadeInput = styled(InputPerfil)`
  width: 45%;
`;
