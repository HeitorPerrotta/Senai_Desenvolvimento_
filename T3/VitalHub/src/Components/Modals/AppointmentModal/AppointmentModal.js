import { Modal } from "react-native"
import { Title } from "../../Title/style"
import { AppointmentContent, ModalContent, ModalImage, RowTextModal, TextModal } from "./style"
import { ButtonSecundary, ButtonSecundaryText, ButtonTitle, ModalButton } from "../../Button/Style"

export const AppointmentModal = ({ navigation, visible, setShowModalAppointment, typeProfile = 'paciente', ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType='fade'>
      <AppointmentContent>
        <ModalContent>
          <ModalImage source={{ uri: "http://github.com/AlbatrozPyt.png" }} />

          <Title>Matheus Enrike</Title>

          <RowTextModal>
            <TextModal>100 anos</TextModal>

            <TextModal>Lenda@gmail.com</TextModal>
          </RowTextModal>

          <ModalButton>
            <ButtonTitle>Inserir Prontuário </ButtonTitle>
          </ModalButton>

          <ButtonSecundary onPress={() => setShowModalAppointment(false)}>
            <ButtonSecundaryText>Cancelar</ButtonSecundaryText>
          </ButtonSecundary>
        </ModalContent>
      </AppointmentContent>
    </Modal>
  )
}