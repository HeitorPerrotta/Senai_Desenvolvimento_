import { Modal } from "react-native";
import { ButtonLargeAgendament, ButtonLargeSelect, LevelButton } from "../Button/Button";
import { CardCancelLess, CardCancelLessModal } from "../Descriptions/Descriptions";
import { LargeInputBoxModal } from "../InputBox/InputBox";
import { ModalContent } from "../CancellationModal/StyleCancellationModal";
import { Title1ModalSchedule, TitleModalSchedule } from "../Title/StyleTitle";
import { ScheduleModalContainer } from "./StylesSchuleModal";
import { BoxButtonLevel } from "../Container/StyleContainer";

export const  ScheduleModal = ({navigation, visible, setShowModal, ...rest }) => {

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <ScheduleModalContainer>
        <ModalContent>
          <Title1ModalSchedule>Agendar Consulta</Title1ModalSchedule>

          <TitleModalSchedule>Qual o Nivel da Consulta?</TitleModalSchedule>

          <BoxButtonLevel>
            <LevelButton text={"Rotina"} />
            <LevelButton text={"Exame"} />
            <LevelButton text={"Urgencia"} />
          </BoxButtonLevel>

          <LargeInputBoxModal
            fieldWidth={100}
            placeholderTextColor={"#34898F"}
            textLabel={"Informe a localização desejada"}
            placeholder={"Informe a localização"}
            editable={true}
          />

          <ButtonLargeAgendament onPress={() => navigation.navigate("SelectClinic")} text={"continuar"}  />

          <CardCancelLessModal
            onPressCancel={() => setShowModal(false)}
            text={"Cancelar"}
          />
        </ModalContent>
      </ScheduleModalContainer>
    </Modal>
  );
};
