import { Modal } from "react-native"
import { ButtonSecundary, ButtonSecundaryText, ButtonTitle, ModalButton } from "../Button/Style"
import { AgendarConsultaContainerPaciente, AgendarConsultaContent, SubtitleContent, TitleContent } from "./style"
import { Title } from "../Title/style"
import { ContainerTitleSubtitle } from "../Container/style"
import { Subtitle } from "../Text/style"
import { ScheduleAppointment } from "../Modals/Schedule/Schedule"

export const AgendarConsulta = ({
    visible,
    setShowModalAgendarConsulta,
    ...rest
}) => {
    return (

        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            <ScheduleAppointment>


                {/* container */}
                <AgendarConsultaContainerPaciente>

                    {/* agendar consulta conteudo */}
                    <AgendarConsultaContent>

                        {/* titulo */}
                        <Title>Agendar consulta</Title>

                        {/* subtitulo */}
                        <Subtitle>Consulte os dados selecionados para a sua consulta</Subtitle>


                        {/* container do conteudo */}
                        <ContainerTitleSubtitle>

                            {/* titulo do conteudo */}
                            <TitleContent>Data da consulta</TitleContent>

                            {/* subtitulo do conteudo */}
                            <SubtitleContent>1 de Novembro de 2023</SubtitleContent>

                        </ContainerTitleSubtitle>



                        {/* container do conteudo */}
                        <ContainerTitleSubtitle>

                            {/* titulo do conteudo */}
                            <TitleContent>Médico(a) da consulta</TitleContent>

                            {/* subtitulo do conteudo */}
                            <SubtitleContent>Dra Alessandra</SubtitleContent>
                            <SubtitleContent>Demartologa, Esteticista</SubtitleContent>

                        </ContainerTitleSubtitle>



                        {/* container do conteudo */}
                        <ContainerTitleSubtitle>

                            {/* titulo do conteudo */}
                            <TitleContent>Local da consulta</TitleContent>

                            {/* subtitulo do conteudo */}
                            <SubtitleContent>São Paulo, SP</SubtitleContent>

                        </ContainerTitleSubtitle>



                        {/* container do conteudo */}
                        <ContainerTitleSubtitle>

                            {/* titulo do conteudo */}
                            <TitleContent>Tipo da consulta</TitleContent>

                            {/* subtitulo do conteudo */}
                            <SubtitleContent>Rotina</SubtitleContent>

                        </ContainerTitleSubtitle>



                        {/* titulo do conteudo */}

                        <ModalButton>
                            <ButtonTitle>Continuar</ButtonTitle>
                        </ModalButton>

                        <ButtonSecundary onPress={() => setShowModalAgendarConsulta(false)}>
                            <ButtonSecundaryText>Cancelar</ButtonSecundaryText>
                        </ButtonSecundary>

                    </AgendarConsultaContent>

                </AgendarConsultaContainerPaciente>

            </ScheduleAppointment>


        </Modal>
    )
}