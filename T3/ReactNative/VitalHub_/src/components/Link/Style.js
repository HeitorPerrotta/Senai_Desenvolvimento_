import styled from "styled-components";

export const Link = styled.Text`
    color: #8C8A97;
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 14px;
    text-decoration: underline;
    text-decoration-color: white;
    margin-bottom: 15px;
    align-self: flex-start;
    margin-top: 16px;
    margin-left: 20px;
`

export const LinkCancel = styled(Link)`
align-self: center;
margin-top: 24px;

`

export const LinkCode = styled(LinkCancel)`
align-self: center;
margin-left: 0px;
`

export const LinkBlue = styled(Link)`
    color: #496BBA;
    text-decoration-color: #496BBA;
    align-self: center;
    margin-left: 0px;
`