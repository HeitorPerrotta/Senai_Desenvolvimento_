import styled, { css } from "styled-components";

export const ContainerFooter = styled.SafeAreaView`
    width: 100%;
    background-color: #FFFFFF;
    /* align-items: center; */
    justify-content: space-between;
    flex-direction: row;
    height: 90px;
`

export const BoxButton =  styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0px 20px;
    
`
export const TextButtonFooter = styled.Text`
    font-size: 12px;
    font-family: Quicksand_500Medium;
    
    ${props => props.clickButton ?
        css`
    color: #607EC5;`
        : css`
   color: transparent;`}`

export const ButtonFooter =  styled.TouchableOpacity`
flex-direction: row;
align-items: center;
gap: 5px;
    padding: 12px 20px;
    border-radius: 20px;
    
    ${props => props.clickButton ?
        css`
    background-color: #ECF2FF`
    : css`
    background-color: transparent;
    border: 0px;`}
    `


