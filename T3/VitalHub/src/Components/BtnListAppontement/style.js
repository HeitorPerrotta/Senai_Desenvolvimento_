import styled, { css } from "styled-components";

export const ButtonTabsStyle = styled.TouchableHighlight`
    border-radius: 5px;
    width: 100px;
    height: 40px;
    justify-content: center;

    ${props => props.clickButton ? css`
    background-color: #496bba; `
    : css`
        background-color: transparent;
        border: 2px solid #607ec5;
    `}
`

// export const TextButton = styled.Text`
    
// `

export const ButtonTextStyle = styled.Text`
    font-size: 12px;
    font-family: 'MontserratAlternates_600SemiBold';
    align-self: center;
    
    ${props => props.clickButton ? css`
    color: #fbfbfb; ` 
    : css`
        color: #607ec5;
    `}
`
