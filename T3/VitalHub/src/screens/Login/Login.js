import {
  Button,
  ButtonGoogle,
  ButtonTitle,
  GoogleTitle,
} from "../../components/Button/Style";
import { Container } from "../../components/Container/style";
import {
  ContentAccount,
  LinkAccount,
  TextAccount,
} from "../../components/ContentAccount/style";
import { Input } from "../../components/Input/style";
import { Link } from "../../components/Link/style";
import { Logo } from "../../components/Logo/style";
import { Title } from "../../components/Title/style";
import { AntDesign } from "@expo/vector-icons";

export const Login = () => {
  return (
    <Container>
      <Logo source={require("../../assets/images/VitalHub_Logo 1.png")} />
      <Title>Entrar ou criar conta</Title>
      <Input placeholder="Usuario ou Email" />
      <Input placeholder="Senha" />
      <Link>Esqueceu sua senha?</Link>
      <Button>
        <ButtonTitle>Entrar</ButtonTitle>
      </Button>
      <ButtonGoogle>
        <AntDesign name="google" size={18} color="#496BBA" />
        <GoogleTitle>Entrar com Google</GoogleTitle>
      </ButtonGoogle>

      <ContentAccount>
        <TextAccount>
          Não tem conta? <LinkAccount>Crie uma conta agora!</LinkAccount>
        </TextAccount>
      </ContentAccount>
    </Container>
  );
};
