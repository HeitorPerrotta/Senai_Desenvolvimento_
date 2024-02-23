import { Modal } from "react-native"
import { FotoKanye } from "../../assets/KANYE.jpg"
import { ModalContent } from "../CancellationModal/Style"
import { LinkBold } from "../ContentAccount/Style"
import { LinkCodigo } from "../Link/Style"
import { ButtonTitle, Title } from "../Title/Style"
import { AppointmentContent, ModalButton, RowTextModal, TextModal } from "./Style"

export const AppointmentModal = ({ navigation, visible, setShowModalAppointment, typeProfile = 'paciente', ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType='fade'>
      <AppointmentContent>
        <ModalContent>
          <FotoKanye 
            source={require("../../assets/KANYE.jpg")}
          />

          <Title>Kanye</Title>

          <RowTextModal>
            <TextModal>103</TextModal>

            <TextModal>kanye.bianchezzi@gmail.com</TextModal>
          </RowTextModal>

          <ModalButton onPress={() => {
            setShowModalAppointment(false)
          }}>
            <ButtonTitle>Prontuário</ButtonTitle>
          </ModalButton>

          <LinkCodigo onPress={() => setShowModalAppointment(false)}>
            <LinkBold>Cancelar</LinkBold>
          </LinkCodigo>
        </ModalContent>
      </AppointmentContent>
    </Modal>
  )
}