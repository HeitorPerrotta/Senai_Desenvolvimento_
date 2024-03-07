import styled, { css } from "styled-components"

export const ButtonCadastroS = styled.TouchableOpacity`
    padding: 12px 14px;
    border-radius: 5px;

    ${props => props.clickButton ?
        css`
    background-color: #496bba`
        : css`
    background-color: transparent;
    border: 2px solid #607ec5;`}
`

export const ButtonCadText = styled.Text`
    font-size: 12px;
    font-family: MontserratAlternates_600SemiBold;
    
    ${props => props.clickButton ?
        css`
    color: #fbfbfb;`
        : css`
   color: #607ec5;`}
    
`

export const ButtonConsultType = styled.TouchableOpacity`
    border: 2px solid #60BFC5;
    border-radius: 5px;
    width: 30%;
    padding: 12px;
    align-items: center;
    justify-content: center;
    ${props => props.clickButton ?
        css`
    background-color: #60BFC5`
        : css`
    background-color: transparent;
    border: 2px solid #60BFC5;`}
`

export const ButtonTextConsultType = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 12px;
    align-self: center;
    ${props => props.clickButton ?
        css`
    color: #fbfbfb;`
        : css`
    color: #34898F;`}
`