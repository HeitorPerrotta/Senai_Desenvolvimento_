import { Button, ButtonGoogle } from "../../Components/Button/Style";
import { Container } from "../../Components/Container/Style";
import { ContentAccount, LinkBold, TextAccount } from "../../Components/ContentAccount/Style";
import { Input } from "../../Components/Input/Style";
import { LinkMedium } from "../../Components/Link/Style";
import { Logo } from "../../Components/Logo/Style";
import { ButtonTitle, ButtonTitleGoogle, Title } from "../../Components/Title/Style";

export const Login = () => {
  return (
    <Container>
      <Logo source={require("../../assets/VitalHub_Logo.png")} />

      <Title>Entrar ou criar conta</Title>

      <Input placeholder="Usuário ou E-mail" />

      <Input placeholder="Senha" />

      <LinkMedium>Esqueceu sua senha?</LinkMedium>

      <Button>
        <ButtonTitle>Entrar</ButtonTitle>
      </Button>

      <ButtonGoogle>
        {/* <AntDesign name="google" size={18} color="#496bba" /> */}
        <ButtonTitleGoogle>Entrar com Google</ButtonTitleGoogle>
      </ButtonGoogle>

      <ContentAccount>
        <TextAccount>
          Não tem conta? <LinkBold>Crie uma conta agora!</LinkBold>
        </TextAccount>
      </ContentAccount>
    </Container>
  );
};