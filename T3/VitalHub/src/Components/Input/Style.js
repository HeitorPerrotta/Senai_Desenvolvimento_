import styled from "styled-components";

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#4983BA"
})`
  width: 90%;
  height: 53px;
  padding:16px ;
  border: 2px solid #49b3ba;
  border-radius: 5px;
  margin-bottom: 25;
`;

export const InputCodigo = styled(Input)`
height: 65px;
width:65px;
padding: 0px;
padding-bottom: 5px;
margin-top: 0px;
font-size: 40px;
`
