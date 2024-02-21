import { Modal } from "react-native";
import { ButtonTitle, Title } from "../Title/Style";
import { LinkCodigo } from "../Link/Style";
import { ModalContent, ModalText, PatientModal } from "./Style";
import { LinkBold } from "../ContentAccount/Style"
import { ModalBtn } from "../Button/Style"

export const CancelModal = ({
  visible,
  setShowModalCancel,
  // rest sao todas as outras propriedades como o visible e o transparente
  ...rest
}) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      {/* container */}
      <PatientModal>
        <ModalContent>
          {/* titulo */}
          <Title>Cancelar Consulta</Title>

          {/* descricao */}
          <ModalText>
            Ao cancelar essa consulta, abrirá uma possível disponibilidade no
            seu horário, deseja mesmo cancelar essa consulta?
          </ModalText>

          {/* botao da modal */}
          <ModalBtn>
            <ButtonTitle>Confirmar</ButtonTitle>
          </ModalBtn>

          <LinkCodigo onPress={() => setShowModalCancel(false)}>
            <LinkBold>Cancelar</LinkBold>
          </LinkCodigo>
        </ModalContent>
      </PatientModal>
    </Modal>
  );
};
