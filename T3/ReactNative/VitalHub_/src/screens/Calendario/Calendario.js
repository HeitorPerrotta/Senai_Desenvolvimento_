import { useState } from "react"
import { ClinicContent, ContainerCalendar, InputContent } from "../../components/Container/Style"
import { TitleBlackDoctor } from "../../components/Cards/CardMedico/Style"
import CalendarComponent from "../../components/Calendar/Calendar"
import { ButtonModal, ButtonSub, ButtonSubText, ModalSubtitle2 } from "../../components/Modals/ModalConsulta/Style"
import InputSelect from "../../components/Input/InputSelect/InputSelect"
import { ButtonTitle } from "../../components/Button/Style"
import { CardModalConsulta } from "../../components/Modals/ModalCard/ModalCard"


export const CalendarioPaciente = ({navigation}) => {
    const [showModalAppointment, setShowModalAppointment] = useState(false)
    return (
        <ContainerCalendar>
            <ClinicContent>
                <TitleBlackDoctor>Selecionar data</TitleBlackDoctor>

                <CalendarComponent

                />
                <InputContent>
                    <ModalSubtitle2>Selecione um horário disponível</ModalSubtitle2>
                    <InputSelect />
                </InputContent>


                {/* Botão */}
                <ButtonModal onPress={() => setShowModalAppointment(true)}>
                    <ButtonTitle>Continuar</ButtonTitle>
                </ButtonModal>

                <ButtonSub onPress={() => navigation.replace("SelecionarMedico")}>
                    <ButtonSubText>Cancelar</ButtonSubText>
                </ButtonSub>
            </ClinicContent>

            <CardModalConsulta
                navigation={navigation}
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
            />
        </ContainerCalendar>
    )
}