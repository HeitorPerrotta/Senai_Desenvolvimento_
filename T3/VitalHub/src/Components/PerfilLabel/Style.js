import styled from "styled-components";

export const InputPerfil = styled.TextInput.attrs({
    placeholderTextColor: "black"
})
    `
margin-top: 30px;
border: 1px;
border-radius: 5px;
background-color: #F5F3F3;
border-color: #F5F3F3;
padding-left: 16px;
width: 90%;
height: 53px;
font-family: MontserratAlternates_600SemiBold;


`

export const LabelInput = styled.SafeAreaView`

bottom: -20px;
right: 110px;

`
export const LabelInput2 = styled(LabelInput)`

bottom: -20px;
right: 170px;

`
export const LabelInput3 = styled(LabelInput)`

bottom: -20px;
right: 150px;

`

export const LabelPerfil = styled.Text`
font-size: 15px;

`

export const LabelCepCidade = styled(LabelPerfil)`
width: 45%;
`