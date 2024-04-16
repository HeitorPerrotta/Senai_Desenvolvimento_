import styled from "styled-components";
import { FlatList } from "react-native";
//BoxDay, DayBox, IconContent, TextBlue, TextCity, TextGold
export const IconContent = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 3px;
`
export const TextGold = styled.Text`
     font-size: 14px;
     font-family: 'Quicksand_600SemiBold';
     color: #F9A620;
`
export const TextBlue = styled(TextGold)`
     color: #49B3BA;
`

export const TextCity = styled.Text`
    font-size: 14px;
    color: #4E4B59;
    /* line-height: 22px; */
    /* align-self: flex-start; */
    /* margin-top: 10px; */
    margin-bottom: 18px;
    /* padding-left: 20px; */
    font-family: Quicksand_600SemiBold;
`
export const DayBox = styled.View`
    width: 100px;
    height: 26px;
    gap: 5px;
    border-radius: 5px;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    /* gap: 10px; */
    background-color: #E8FCFD;
    justify-content: center;
`

export const BoxDay = styled.View`
    	flex-direction: row;
        align-items: center;
        width: 80%;
        justify-content: space-between;
`
export const TextBox = styled.View`
    width: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    /* align-items: center; */
`

export const BoxCard = styled.SafeAreaView`
    align-items: center;
    gap: 15px;
    width: 100%;
    elevation: 7px;
`

export const ListClinic = styled(FlatList)`
    width: 100%;
    background-color: #FBFBFB;
    margin: 15px;
    padding-top: 10px;
    elevation: 7px;
`