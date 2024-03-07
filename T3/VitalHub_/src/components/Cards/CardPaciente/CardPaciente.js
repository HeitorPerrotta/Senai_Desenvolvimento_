import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BoxCircle, Circle, ContainerCancel, ContainerCardSub, ContainerLevantadoConsulta, ContainerText, DataUser, TimeBox } from "../../Container/Style";
import { ButtonCancel, ButtonCancelSub, ButtonText, TextBold } from "./Style";
import { CardPic } from "../../Image/Style";
import { TextGrayBold, TextGraySub, TitleBlack } from "../../Title/Style";
import { useState } from "react";



export const CardPaciente = ({
    name,
    navigation,
    onPressImage,
    age,
    type,
    time,
    situacao,
    onPressCancel,
    onPressAppointment,
    source

}) => {

    const [profile, setProfile] = useState("Paciente")

    return (
        <ContainerLevantadoConsulta>
            <ContainerCardSub>
                <ButtonCancelSub onPress={onPressImage}>
                    <CardPic
                        source={source}
                    />
                </ButtonCancelSub>
                <DataUser>
                    <ContainerText>
                        <TitleBlack>{name}</TitleBlack>

                        <BoxCircle>
                            <TextGraySub>{age}</TextGraySub>
                            <Circle></Circle>
                            <TextGrayBold>{type}</TextGrayBold>
                        </BoxCircle>

                    </ContainerText>
                    <ContainerCancel>
                        <TimeBox situacao={situacao}>
                            <MaterialCommunityIcons name="clock" size={14} color={situacao == 'pendente' ? "#49B3BA" : "#4E4B59"} />
                            <TextBold situacao={situacao} >{time}</TextBold>
                        </TimeBox>

                        {
                            situacao == 'cancelado' ? (
                                <></>
                            ) : situacao == 'pendente' ?
                                (
                                    <ButtonCancel onPress={onPressCancel} situacao={situacao}>
                                        <ButtonText situacao={situacao}>Cancelar</ButtonText>
                                    </ButtonCancel>
                                ) : (
                                    <TouchableOpacity onPress={profile !== "Paciente" ? onPressAppointment : () => navigation.replace("Prescricao")}>
                                        <ButtonText situacao={situacao}>Ver prontuário</ButtonText>
                                    </TouchableOpacity>
                                )
                        }
                    </ContainerCancel>
                </DataUser>
            </ContainerCardSub>
        </ContainerLevantadoConsulta>
    )
}