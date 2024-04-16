
import { ContainerCard, ContainerLevantadoConsulta, ContainerText, DataUser } from "../../Container/Style";
import { CardPic } from "../../Image/Style";
import { TextSemiBold, TitleBlack } from "../../Title/Style";



export const CardMedico = ({
    name,
    type,
    source,
    onPress,
    clickButton

}) => {
    return (
        <ContainerLevantadoConsulta clickButton={clickButton} onPress={onPress}>
            <ContainerCard>
                <CardPic
                    source={source}
                />
                <DataUser>
                    <ContainerText>
                            <TitleBlack>{name}</TitleBlack>
                            <TextSemiBold>{type}</TextSemiBold>
                    </ContainerText>
                </DataUser>
            </ContainerCard>
        </ContainerLevantadoConsulta>
    )
}