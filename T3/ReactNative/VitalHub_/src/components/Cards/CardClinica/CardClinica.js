import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BoxCard, BoxDay, DayBox, IconContent, TextBlue, TextBox, TextCity, TextGold } from "./Style";
import { AntDesign } from '@expo/vector-icons';
import { ContainerLevantadoConsulta } from "../../Container/Style";
import { TitleBlack } from '../../Title/Style';


export const CardClinic = ({
    name,
    rated,
    time,
    city,
    onPress,
    clickButton

}) => {
    return (
        <ContainerLevantadoConsulta onPress={onPress} clickButton={clickButton}>
            <BoxCard>
                    <TextBox>
                        <TitleBlack>{name}</TitleBlack>
                        <IconContent>
                        <AntDesign name="star" size={20} color="#F9A620" />
                        <TextGold>{rated}</TextGold>
                        </IconContent>
                    </TextBox>
                    <BoxDay>
                        <TextCity>{city}</TextCity>
                        <DayBox>
                            <MaterialCommunityIcons name="calendar-today" size={14} color="#49B3BA" />
                            <TextBlue>{time}</TextBlue>
                        </DayBox>
                    </BoxDay>
                
            </BoxCard>
        </ContainerLevantadoConsulta>
    )
}