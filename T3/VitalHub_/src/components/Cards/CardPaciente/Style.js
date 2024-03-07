import styled from "styled-components";

export const TextBold = styled.Text`
 font-size: 14px;
 font-family: 'Quicksand_500Medium';
 color: ${(props) => props.situacao == 'pendente' ? '#49B3BA' : "#4E4B59"};
 
 `
 export const ButtonText = styled.Text`
  font-size: 12px;
  font-family: 'Montserrat_500Medium';
  color: ${(props) => props.situacao == 'pendente' ? '#C81D25' : "#344F8F"};
 `

export const ButtonCancel = styled.TouchableOpacity`
    width: 60px;
`
export const ButtonCancelSub = styled(ButtonCancel)`
    width: auto;
`