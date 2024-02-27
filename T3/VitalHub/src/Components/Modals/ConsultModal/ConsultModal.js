import { Modal } from "react-native";
import { Title } from "../../Title/style";
import { LabelModal } from "../../Text/style";
import { BoxModalInput, ContentModal, PatientModal } from "./style";
import { InputProp } from "../../Input/Input";
import { Input, InputModal } from "../../Input/style";
import { Button, ButtonSecundary, ButtonSecundaryText, ButtonTitle } from "../../Button/Style";

export const ConsultModal = ({ visible, setShowModalConsult, ...rest }) => {
  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <PatientModal>
        <ContentModal>
          <Title>Agendar Consulta</Title>

          <LabelModal>Qual o nível da consulta</LabelModal>

          <BoxModalInput>
            <InputProp
              placeHolder={"Rotina"}
              inputHeight={40}
              fieldWidth={88}
            />
            <InputProp placeHolder={"Exame"} fieldWidth={88} inputHeight={40} />
            <InputProp
              placeHolder={"Urgência"}
              fieldWidth={88}
              inputHeight={40}
            />
          </BoxModalInput>

          <LabelModal>Informe a localização desejada</LabelModal>
          <InputModal placeholder="informe a localização" />

          <Button>
            <ButtonTitle>Continuar</ButtonTitle>
          </Button>

          <ButtonSecundary onPress={() => setShowModalConsult(false)}>
            <ButtonSecundaryText>Cancelar</ButtonSecundaryText>
          </ButtonSecundary>
        </ContentModal>
      </PatientModal>
    </Modal>
  );
};
