import { Container } from "../../Components/Container/Style";
import { Logo } from "../../Components/Logo/Style";
import { Title } from "../../Components/Title/Style";
import { Input } from "../../Components/Input/Style";
import { LinkMedium } from "../../Components/Link/Style";
import {
  Button,
  ButtonGoogle,
  ButtonTitleGoogle,
  ButtonTitle,
} from "../../Components/Button/Style";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import { useState } from "react";

export const Login = () => {
  const [loading, setLoading] = useState();
  return (
    <Container>
      <Logo source={require("../../assets/VitalHub_Logo.png")} />

      <Title>Entrar ou criar conta</Title>

      <Input placeholder="Usuário ou E-mail" />
      <Input placeholder="Senha" />

      <LinkMedium>Esqueceu sua senha?</LinkMedium>

      <Button>
        <TouchableOpacity onPress={() => setLoading(!loading)}>
          <ButtonTitle>Entrar</ButtonTitle>

          {loading && <ActivityIndicator color="#FFF" size={24} />}
        </TouchableOpacity>
      </Button>

      <ButtonGoogle>
        <ButtonTitleGoogle>Entra com Google</ButtonTitleGoogle>
      </ButtonGoogle>

      <ContentAccount>
        <TextAccount>Não tem conta ? Crie uma agora!</TextAccount>
      </ContentAccount>
    </Container>
  );
};
