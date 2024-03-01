import { Modal } from "react-native";
import {
  ModalContent,
  PatientModal,
} from "../CancellationModal/StyleCancellationModal";
import { TitleModal } from "../Title/StyleTitle";
import { AgeTextCard, EmailText } from "../Descriptions/StyledDescriptions";
import { AgeText, EmailTextApp, ModalBox } from "./style";
import { ButtonLargeSelect } from "../Button/Button";
import { CardCancelLess } from "../Descriptions/Descriptions";
import { PatientImage } from "../Images/StyleImages";

export const AppointmentModal = ({
  visible,
  setShowModelAppointment,
  ...rest
}) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ModalContent>
          <PatientImage source={require("../../assets/ney.webp")} />
          <TitleModal>Niccole Sarga</TitleModal>
          <ModalBox>
            <AgeText>22 anos</AgeText>
            <EmailTextApp>niccole.sarga@gmail.com</EmailTextApp>
          </ModalBox>

          <ButtonLargeSelect text={"Inserir Prontuario"} />

          <CardCancelLess
            onPressCancel={() => setShowModelAppointment(false)}
            text={"Cancelar"}
          />
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};
