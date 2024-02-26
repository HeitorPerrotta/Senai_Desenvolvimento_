import { ScrollView } from "react-native";
import { Container } from "../../components/Container/style";
import { ImageBox } from "../../components/Image/Image";
import { TitleUser } from "../../components/Titulo/style";
import { Label, TextEmail } from "../../components/Text/style";
import { Button, ButtonTitle } from "../../components/Botao/style";

import { FieldInput } from "./Index";
import { LinkCancelBlue } from "../../components/Link/style";

export const MedicoProntuario = () => {
  return(
    <ScrollView>
      <Container>
        <ImageBox source={require("../../assets/images/Rectangle426.png")} />

        <TitleUser>Richard Kosta</TitleUser>
        <TextEmail>22 anos    richard.kosta@gmail.com</TextEmail>

        <Label>Descrição da consulta</Label>
        <FieldInput placeHolder="Descrição" containerWidth={355} containerHeight={121} paddingTop={21} textAlignVertical="top"/>

        <Label>Diagnóstico do paciente</Label>
        <FieldInput placeHolder="Diagnóstico" containerWidth={355} containerHeight={53} textAlignVertical="center"/>

        <Label>Prescrição médica</Label>
        <FieldInput placeHolder="Prescrição médica" containerWidth={355} containerHeight={121} paddingTop={21} textAlignVertical="top"/>

        <Button>
          <ButtonTitle>Salvar</ButtonTitle>
        </Button>
        
          <LinkCancelBlue>Cancelar</LinkCancelBlue>
      </Container>
    </ScrollView>
  );
};
