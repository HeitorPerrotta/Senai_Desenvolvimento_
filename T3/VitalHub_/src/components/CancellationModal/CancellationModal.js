import { Modal } from "react-native";
import { TitleModal } from "../Title/StyleTitle";
import { DescriptionCancel } from "../Descriptions/StyledDescriptions";
import { CardCancel, CardCancelLess } from "../Descriptions/Descriptions";
import { ModalContent, PatientModal } from "./StyleCancellationModal";
import { ButtonLargeSelect } from "../Button/Button";

export const CancellationModal = ({ 
    visible, 
    setShowModalCancel = null,
    ...rest 
   }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ModalContent>
          <TitleModal>Cancelar Consulta</TitleModal>
          <DescriptionCancel>
            Ao cancelar essa consulta, abrirá uma possível disponibilidade no
            seu horário, deseja mesmo cancelar essa consulta?
          </DescriptionCancel>

          <ButtonLargeSelect text={"Continuar"} />

          <CardCancelLess
            onPressCancel={() => setShowModalCancel(false)}
            text={"Cancelar"}
          />
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};
