import { Modal } from "react-native";
import {
  ButtonCard,
  ButtonCardSub,
  ButtonModalCard,
  ButtonModalCardClinic,
  ButtonSubText,
  CardPacienteModal,
  ContainerModalText,
  ModalAge,
  ModalCardContainer,
  ModalCardContainerConsulta,
  ModalConsultContentText,
  ModalEmail,
  ModalPic,
  TextModalCalendar,
} from "./Style";
import { TextBlack, TitleBlack } from "../../Title/Style";
import { ButtonTitle } from "../../Button/Style";
import { InputLabelSub } from "../../Label/Style";

export const ModalCard = ({
  visible,
  navigation,
  setShowModalAppointment,
  ...rest
  // rest todas as outras propriedades do modal de um determinado componente nativo assim como o modal estamos usando todas as suas propriedades
}) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      {/* Container */}
      <CardPacienteModal>
        {/* Content */}
        <ModalCardContainer>
          <ModalPic source={require("../../../assets/img/ImageModal.png")} />

          {/* Titulo */}
          <TitleBlack>Niccole Sarga</TitleBlack>

          {/* Descrição */}
          <ContainerModalText>
            <ModalAge>22 anos</ModalAge>
            <ModalEmail>niccole.sarga@gmail.com</ModalEmail>
          </ContainerModalText>

          {/* Botão */}
          <ButtonModalCard>
            <ButtonTitle>Inserir Prontuário</ButtonTitle>
          </ButtonModalCard>

          <ButtonCardSub onPress={() => setShowModalAppointment(false)}>
            <ButtonSubText>Cancelar</ButtonSubText>
          </ButtonCardSub>
        </ModalCardContainer>
      </CardPacienteModal>
    </Modal>
  );
};
export const CardModalPaciente = ({
  visible,
  navigation,
  setShowModalAppointment,
  ...rest
  // rest todas as outras propriedades do modal de um determinado componente nativo assim como o modal estamos usando todas as suas propriedades
}) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      {/* Container */}
      <CardPacienteModal>
        {/* Content */}
        <ModalCardContainer>
          <ModalPic source={require("../../../assets/img/Chezzy.jpeg")} />

          {/* Titulo */}
          <TitleBlack>Dr. Chezzy</TitleBlack>

          {/* Descrição */}
          <ContainerModalText>
            <ModalAge>Cliníco geral</ModalAge>
            <ModalEmail>CRM-69777</ModalEmail>
          </ContainerModalText>

          {/* Botão */}
          <ButtonModalCard>
            <ButtonTitle>Ver local da consulta</ButtonTitle>
          </ButtonModalCard>

          <ButtonCardSub onPress={() => setShowModalAppointment(false)}>
            <ButtonSubText>Cancelar</ButtonSubText>
          </ButtonCardSub>
        </ModalCardContainer>
      </CardPacienteModal>
    </Modal>
  );
};
export const CardModalConsulta = ({
  visible,
  navigation,
  setShowModalAppointment,
  ...rest
  // rest todas as outras propriedades do modal de um determinado componente nativo assim como o modal estamos usando todas as suas propriedades
}) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      {/* Container */}
      <CardPacienteModal>
        {/* Content */}
        <ModalCardContainerConsulta>
          {/* Titulo */}
          <TitleBlack>Agendar consulta</TitleBlack>

          <TextBlack>
            Consulte os dados selecionados para a sua consulta
          </TextBlack>

          {/* Descrição */}
          <ModalConsultContentText>
            <InputLabelSub>Data da consulta</InputLabelSub>
            <TextModalCalendar>1 de Novembro de 2023</TextModalCalendar>
          </ModalConsultContentText>

          <ModalConsultContentText>
            <InputLabelSub>Médico(a) da consulta</InputLabelSub>
            <TextModalCalendar>Dra Alessandra</TextModalCalendar>
            <TextModalCalendar>Demartologa, Esteticista</TextModalCalendar>
          </ModalConsultContentText>

          <ModalConsultContentText>
            <InputLabelSub>Local da consulta</InputLabelSub>
            <TextModalCalendar>São Paulo, SP</TextModalCalendar>
          </ModalConsultContentText>

          <ModalConsultContentText>
            <InputLabelSub>Tipo da consulta</InputLabelSub>
            <TextModalCalendar>Rotina</TextModalCalendar>
          </ModalConsultContentText>

          {/* Botão */}
          <ButtonModalCardClinic
            onPress={() => navigation.navigate('LocalConsulta')}
          >
            <ButtonTitle>Ver local da consulta</ButtonTitle>
          </ButtonModalCardClinic>

          <ButtonCard onPress={() => setShowModalAppointment(false)}>
            <ButtonSubText>Cancelar</ButtonSubText>
          </ButtonCard>
        </ModalCardContainerConsulta>
      </CardPacienteModal>
    </Modal>
  );
};
