import styled from "styled-components";

export const Input = styled.TextInput.attrs({ placeholderTextColor: "#34898F" })`
    border: 2px #49B3BA;
    border-radius: 5px;
    height: 53px;
    width: 90%;
    font-family: 'MontserratAlternates_600SemiBold';
    padding-left: 15px;
    margin-top: 15px;
`

export const InputModal = styled(Input)`
    margin-top: 0px;
`

export const InputModalProp = styled.TextInput.attrs({ placeholderTextColor: "#34898F", fontSize: 12,
})`
     border: 2px #49B3BA;
     font-family: 'MontserratAlternates_600SemiBold';
     width: 88px;
     height: 40px;
     border-radius: 5px;
     text-align: center;
`

export const InputSquare = styled(Input).attrs({ fontSize: 40, fontFamily: 'Quicksand_600SemiBold', padding: 5 })`
    width: 62px;
    height: 62px;
    font-family: 'Quicksand_600SemiBold';
    color: #34898F;
    padding: 0 0 5px 0;
    text-align: center;
`

export const InputUserCepCity = styled.TextInput`
    background-color: #F5F3F3;
    margin-bottom: 25px;
    height: 53px;
`

export const InputUser = styled(InputUserCepCity)`
   width: 90%;
   height: 53px;
`

export const BoxUserInput =  styled.View`
    flex-direction: column;
`


//css do input que vai ser retornado na prop
export const InputBlue = styled.TextInput.attrs({
    placeholderTextColor: "#34898F",
    fontSize: 14,
    fontFamily: "MontserratAlternates_600SemiBold",
    paddingLeft: 25,
    // textAlignVertical: "top",
    // paddingTop: 21,
  
  })`
    border: 2px solid #49b3ba;
    border-radius: 5px;
  `;


