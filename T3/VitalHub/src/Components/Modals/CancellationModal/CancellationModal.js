import { Modal } from "react-native"
import { Title } from "../../Title/style"
import { ContentModal, ModalText, PatientModal } from "./style"
import { Button, ButtonSecundary, ButtonSecundaryText, ButtonTitle } from "../../Button/Style"

export const CancellationModal = ({ visible, setShowModalCancel, ...rest }) => {
    return (
        <Modal
            {...rest} visible={visible} transparent={true} animationType="fade"
        >

            {/* container */}
            <PatientModal>

                {/* content */}
                <ContentModal>
                    {/* modal cancel */}
                    {/* <CancellationModal> */}
                    <Title>Cancelar consulta</Title>

                    <ModalText>
                        Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?
                    </ModalText>

                    <Button>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </Button>
                    <ButtonSecundary onPress={() => setShowModalCancel(false)}>
                        <ButtonSecundaryText>Cancelar</ButtonSecundaryText>
                    </ButtonSecundary>
                    {/* </CancellationModal> */}

                </ContentModal>
            </PatientModal>
        </Modal>
    )
}