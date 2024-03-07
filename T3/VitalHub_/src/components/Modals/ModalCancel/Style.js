import styled from "styled-components";
import { Button } from "../../Button/Style";

export const PatientModal = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.60);
`

export const ModalContent = styled.View`
    padding: 30px 30px 10px;
    width: 90%;
    border-radius: 10px;
    background-color: white;
    align-items: center;
`

export const ModalText = styled.Text`
    width: 270px;
    font-size: 16px;
    color: #5f5c6b;
    line-height: 22px;
    text-align: center;
    margin-top: 10px;
    font-family: Quicksand_500Medium;
`

export const ButtonSub = styled(Button)`
    background-color: transparent;
    border: none;
    margin-top: 30px;
`

export const ButtonSubText = styled.Text`
    color: #496BBA;
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
    text-decoration: underline;
    text-decoration-color: #496BBA;
    align-self: center;
`
export const ButtonModal = styled(Button)`
    width: 80%;
    margin-top: 30px;
`
