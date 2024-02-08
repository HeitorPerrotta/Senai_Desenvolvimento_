import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 44px;
    border-radius: 5px;
    background-color: #496BBA;
    justify-content: center;
    align-items: center;
    margin-top: 23px;
`

export const ButtonTitle = styled.Text`
    font-size: 14px;
    font-family: "MontserratAlternates_600SemiBold";
    color: #FFFFFF;
`

export const ButtonGoogle = styled(Button)`
    background-color: #FAFAFA;
    border: 1px solid #496BBA;
`