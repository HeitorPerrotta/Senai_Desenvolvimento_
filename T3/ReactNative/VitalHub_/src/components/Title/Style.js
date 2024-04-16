import styled from "styled-components";

export const Title = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 20px;
    color: #33303E;
    margin-bottom: 24px;
`

export const Subtitle = styled.Text`
    font-family: 'MontserratAlternates_500Medium';
    font-size: 14px;
    color: #33303E;
    text-align: center;
    width: 80%;
    
`
export const SubtitleLink = styled(Subtitle)`
    color: #496BBA;
    margin-bottom: 12px;
`

export const TitleBlack = styled(Title)`
    font-size: 16px;
    color: #4E4B59;
    margin-bottom: 10px;
`

export const TitleSub = styled(Title)`
    color: black;
    margin-bottom: 8px;
`

export const TextSub = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: 14px;
    color: #4E4B59;
`
export const TextSemiBold = styled(TextSub)`
    font-family: 'Quicksand_600SemiBold';
    color: #8C8A97;
`

export const TextGray = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: 14px;
    color: #4E4B59;
`
export const TextGraySub = styled(TextGray)`
    font-family: 'Quicksand_400Regular';
    font-size: 14px;
    color: #4E4B59;
`
export const TextGrayBold = styled(TextGray)`
    font-family: 'Quicksand_600SemiBold';
    color: #8C8A97;
`

export const UserTitle = styled.Text`
    font-family: 'MontserratAlternates_600SemiBold';
    font-size: 16px;
    color: #FBFBFB;
`

export const TextBlack = styled.Text`
    font-family: 'Quicksand_500Medium';
    font-size: 16px;
    color: black;
    text-align: center;
    width: 80%;
    margin-bottom: 10px;
`

export const TextPic = styled.Text`
    font-family: 'MontserratAlternates_500Medium';
    font-size: 14px;
    color: #33303E;
    text-align: center;
    /* width: 80%; */
    color: #4E4B59;
`

export const TextCancel = styled(TextGrayBold)`
    color: #C81D25;
`
export const TextCancelSub = styled(TextCancel)`
    color: #C81D25;
    padding-right: 20px;
    padding-top: 10px;
`