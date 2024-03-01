import { Modal } from "react-native";
import { ModalContent } from "../AppointmentModal/style";
import {
  Button,
  ButtonSecundaryText,
  ButtonSelected,
  ButtonTitle,
} from "../../Button/Style";
import {
  CRM,
  InfoMedic,
  ModalImageConsult,
  ScheduleAppointmentContent,
  SubtitleMedic,
  TextMedicContainer,
  TitleMedic,
} from "./style";

export const ScheduleAppointment = ({
  navigation,
  setScheduleAppointment,
  visible,
  ...rest
}) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <ScheduleAppointmentContent>
        <ModalContent>
          <ModalImageConsult
            source={require("../../../assets/images/KANYE.jpg")}
          />

          <TextMedicContainer>
            <TitleMedic>Dr. Claúdio</TitleMedic>
            <InfoMedic>
              <SubtitleMedic>Cliníco Geral</SubtitleMedic>
              <CRM>CRM-15286</CRM>
            </InfoMedic>
          </TextMedicContainer>

          <Button>
            <ButtonTitle>Ver local da consulta</ButtonTitle>
          </Button>

          <ButtonSelected
            onPress={() => setScheduleAppointment(false)}
          >
            <ButtonSecundaryText>Cancelar</ButtonSecundaryText>
          </ButtonSelected>
        </ModalContent>
      </ScheduleAppointmentContent>
    </Modal>
  );
};
