import { Modal } from "react-native"
import { ButtonModal, ButtonSub, ButtonSubText, ModalContent, ModalSubtitle, PatientModal, TitleBold } from "./Style"
import { ContainerButton } from "../../Container/Style"
import { InputP } from "../../Input/Index"
import { ButtonTitle } from "../../Button/Style"
import { ButtonAgendar } from "../../Button/ButtonCadastro/ButtonCadastro"


export const ModalConsulta = ({
    navigation,
    visible,
    setShowModalConsult,
    clickButton,
    statusModal,
    setStatusModal,
    ...rest
}) => {
    return(
        <Modal 
            {...rest} 
            visible={visible} 
            transparent={true}
            animationType="fade"
        >
            {/* Container */}
            <PatientModal>
                {/* Content */}
                <ModalContent>
                    {/* Titulo */}
                    <TitleBold>Agendar consulta</TitleBold>

                    {/* Descrição */}
                    <ModalSubtitle>Qual o nível da consulta</ModalSubtitle>
                    <ContainerButton>
                        <ButtonAgendar
                            textButton={"Rotina"}
                            clickButton= {statusModal === "rotina"}
                            onPress={() => setStatusModal("rotina")}
                        />
                        <ButtonAgendar
                            textButton={"Exame"}
                            clickButton= {statusModal === "exame"}
                            onPress={() => setStatusModal("exame")}
                        />
                        <ButtonAgendar
                            textButton={"Urgência"}
                            clickButton= {statusModal === "urgencia"}
                            onPress={() => setStatusModal("urgencia")}
                        />
                    </ContainerButton>

                    <ModalSubtitle>Qual o nível da consulta</ModalSubtitle>
                    <InputP
                        placeholder={'Informe a localização'}
                        editable={true}
                        maxLength={200}
                        customWidth={90}
                    />
                  
                    <ButtonModal onPress={() => navigation.replace('SelecionarClinica')}>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </ButtonModal>

                    <ButtonSub onPress={() => setShowModalConsult(false)}>
                        <ButtonSubText>Cancelar</ButtonSubText>
                    </ButtonSub> 

                </ModalContent>
            </PatientModal>
        </Modal>
    )
}