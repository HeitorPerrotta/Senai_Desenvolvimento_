import styled from "styled-components";
import { Button } from "../../Button/Style";

export const PatientModal = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.60);
`


export const TitleBold = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 20px;
    color: #4E4B59;
    margin-bottom: 51px;
    margin-top: 30px;
`

export const ModalContent = styled.View`
    padding: 30px 30px 10px;
    height: 70%;
    width: 100%;
    border-radius: 10px;
    background-color: white;
    align-items: center;
`

export const ModalSubtitle = styled.Text`
    font-size: 14px;
    color: #000000;
    /* line-height: 22px; */
    align-self: flex-start;
    margin-top: 20px;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: Quicksand_600SemiBold;
`
export const ModalSubtitle2 = styled.Text`
    font-size: 14px;
    color: #000000;
    /* line-height: 22px; */
    align-self: flex-start;
    margin-top: 20px;
    margin-bottom: 10px;
    /* padding-left: 20px; */
    font-family: Quicksand_600SemiBold;
`

export const ButtonModal = styled(Button)`
    width: 90%;
    margin-top: 77px;
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
    /* margin-top: 16px; */
`


