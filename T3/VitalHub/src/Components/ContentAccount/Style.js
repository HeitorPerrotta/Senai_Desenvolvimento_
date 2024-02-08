import styled from "styled-components";

export const ContentAccount = styled.SafeAreaView`
    flex-direction: row;
    margin-top: 30px;
`

export const TextAccount = styled.Text`
    font-size: 14px;
    font-family: "MontserratAlternates_600SemiBold";
    color: #4E4B59;
`

// export const LinkBold = styled(TextAccount)`
//     color: #4D659D;
//     text-decoration: underline;
// `

export const ContentCodigo = styled(ContentAccount)`
    width: 90%;
    justify-content: space-around;
    align-items: center;
    margin-top: 0px;
`