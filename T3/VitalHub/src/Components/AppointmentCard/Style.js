import styled from "styled-components";
import { TitleMonth } from "../Header/style";

export const ContainerCardList = styled.View`
    width: 90%;
    margin: 0 auto;
    margin-bottom: 12px;
    padding: 10px;
    border-radius: 5px;
    flex-direction: row;
    gap: 10px;
    background-color: #ffffff;
    box-shadow: 4px 4px 15px rgba(0,0,0, 0.08);
`

export const ProfileImage = styled.Image`
    height: 80px;
    width: 77px;
    border-radius: 5px;
`

export const ContentCard = styled.View`
    width: 70%;
    gap: 11px;
`

export const DataProfileCard = styled.View`

`

export const ProfileName = styled(TitleMonth)`
font-size: 16px;
`

export const ProfileData = styled.View`
    flex-direction: row;
    gap: 15px;
`

export const TextAge = styled.Text`
    font-size: 14px;
    font-family: 'Quicksand_500Regular';
    color: #8C8A97;
`

export const TextPoint = styled.Text`

`

export const TextBold = styled.Text`
    font-size: 14px;
    font-family: 'Quicksand_400Regular';
    color: ${(props) => props.situacao == "pendente" ? "#49B3BA" : "#8C8A97"};
`

export const ViewRow = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ClockCard = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 6px;
    padding: 4px 23px;
    border-radius: 5px;
    background-color: ${(props) => props.situacao == 'pendente' ? "#E8FCFD" : "#F1F0F5"};
`

export const ButtonCard = styled.TouchableOpacity`
    
`

export const ButtonText = styled.Text`
    font-size: 12px;
    font-family: 'MontserratAlternates_500Medium';
    color: ${(props) => props.situacao == "pendente" ? "#C81D25" : "#344F8F"};
`