import { Modal } from "react-native"
import { Title } from "../../Titulo/style"
import { AppointmentContent, ModalContent, ModalImage, RowTextModal, TextModal } from "./style"
import { ButtonSecundary, ButtonSecundaryText, ButtonTitle, ModalButton } from "../../Botao/style"

export const AppointmentModal = ({ navigation, visible, setShowModalAppointment, typeProfile = 'paciente', ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType='fade'>
      <AppointmentContent>
        <ModalContent>
          <ModalImage source={{ uri: "http://github.com/Vinicius-Vieira-Andrade.png" }} />

          <Title>Vinicius Andrade</Title>

          <RowTextModal>
            <TextModal>20 anos</TextModal>

            <TextModal>Vini@gmail.com</TextModal>
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