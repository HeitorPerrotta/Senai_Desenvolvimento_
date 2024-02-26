import styled from "styled-components";

export const Text = styled.Text`
    font-family: 'Quicksand_500Medium';
    color: #5F5C6B;
    text-align: center;
    margin-bottom: 15px;
    font-size: 16px;
`

export const TextEmail = styled(Text)`
    font-size: 14px;
    margin-bottom: 10px;
`

export const Label = styled.Text`
    font-size: 18px;
    font-family: 'Quicksand_600SemiBold';
    color: #33303E;
    margin-bottom: 15px;
    align-self: flex-start;
    margin-left: 20px;
    margin-top: 15px;
`

export const LabelModal = styled(Label)`
    margin-top: 22px;
`

export const LabelDate = styled(Label)`
    margin-top: 80px;
`


export const LabelCepCity = styled(Label)`
    font-size: 18px;
    font-family: 'Quicksand_600SemiBold';
    color: #33303E;
    margin-bottom: 15px;
    align-self: flex-start;
    margin-left: 0;
    margin-bottom: 0;
`