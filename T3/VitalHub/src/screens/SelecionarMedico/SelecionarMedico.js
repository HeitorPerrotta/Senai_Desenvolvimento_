import {
  ButtonSecundary,
  ButtonSecundaryText,
  ButtonTitle,
  ModalButton,
} from "../../components/Button/Style";
import { CardMedico } from "../../components/CardMedico";
import { ContainerMedico } from "../../components/Container/style";
import { Title } from "../../components/Title/style";

export const SelecionarMedico = () => {
  return (
    // container
    <ContainerMedico>
      {/* <MedicalContent> */}
      {/* titulo do medico */}
      <Title>Selecionar médico</Title>

      {/* card */}
      <CardMedico
        name={"Dr Atomico"}
        profissao={"Demartologa, Esteticista"}
        source={require("../../assets/images/Enrike.jpeg")}
      />
      <CardMedico
        name={"Dra Asia"}
        profissao={"Cirurgião, Cardiologista"}
        source={require("../../assets/images/Catarena.jpeg")}
      />
      <CardMedico
        name={"Dr GabrielAS"}
        profissao={"Clínico, Pediatra"}
        source={require("../../assets/images/Gabrielo.jpeg")}
      />

      {/* </MedicalContent> */}

      <ModalButton>
        <ButtonTitle>Continuar</ButtonTitle>
      </ModalButton>

      <ButtonSecundary>
        <ButtonSecundaryText>Cancelar</ButtonSecundaryText>
      </ButtonSecundary>
    </ContainerMedico>
  );
};
