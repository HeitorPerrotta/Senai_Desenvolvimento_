import { ScrollView } from "react-native";
import { ContainerPerfil } from "../../Components/Container/Style";
import {
  BoxInput,
  CepCidadeInput,
  InputBoxShadow,
  TextInputShadow,
} from "../../Components/Input/Style";
import { FotoPaciente } from "../../Components/Logo/Style";
import {
  InputPerfil,
  LabelCepCidade,
  LabelInput,
  LabelInput2,
  LabelInput3,
  LabelInput4,
  LabelPerfil,
} from "../../Components/PerfilLabel/Style";
import { Button } from "../../Components/Button/Style";
import { ButtonTitle } from "../../Components/Title/Style";
import { LinkCodigo } from "../../Components/Link/Style";

export const Perfil = () => {
  return (
    <ScrollView>
      <ContainerPerfil>
        <FotoPaciente source={require("../../assets/FotoPerfil.png")} />

        <InputBoxShadow>
          <TextInputShadow>Richard Kosta</TextInputShadow>
          <TextInputShadow>richard.kosta@gmail.com</TextInputShadow>
        </InputBoxShadow>

        <LabelInput>
          <LabelPerfil>Data de nascimento</LabelPerfil>
        </LabelInput>
        <InputPerfil placeholder="00/00/0000" />

        <LabelInput2>
          <LabelPerfil>CPF</LabelPerfil>
        </LabelInput2>
        <InputPerfil placeholder="000.000.000-00" />

        <LabelInput3>
          <LabelPerfil>Endereço</LabelPerfil>
        </LabelInput3>
        <InputPerfil placeholder="Rua Niterói, 180" />

        <BoxInput>
          <LabelCepCidade>CEP</LabelCepCidade>
          <LabelCepCidade>Cidade</LabelCepCidade>
        </BoxInput>

        <BoxInput>
          <CepCidadeInput placeholder={"00000-000"} />

          <CepCidadeInput placeholder={"Sampas-SP"} />
        </BoxInput>

        <Button>
          <ButtonTitle>Salvar</ButtonTitle>
        </Button>

        <Button>
          <ButtonTitle>Editar</ButtonTitle>
        </Button>

        <LinkCodigo>Cancelar</LinkCodigo>
      </ContainerPerfil>
    </ScrollView>
  );
};
