import { Button } from "../../Components/Button/Style";
import { Container } from "../../Components/Container/Style";
import { ContentCodigo } from "../../Components/ContentAccount/Style";
import { InputCodigo } from "../../Components/Input/Style";
import { LinkCodigo, LinkEmail } from "../../Components/Link/Style";
import { Logo } from "../../Components/Logo/Style";
import { ButtonTitle, SimpleText, Title } from "../../Components/Title/Style";

export const VerficarEmail = () => {
  return (
    <Container>
      <Logo source={require("../../assets/VitalHub_Logo.png")} />

      <Title>Verifique o seu E-mail</Title>

      <SimpleText>
        Digite o código de 4 dígitos enviado para{" "}
        <LinkEmail>username@email.com</LinkEmail>
      </SimpleText>

      <ContentCodigo>
        <InputCodigo placeholder="0" keyboardType="numeric" />

        <InputCodigo placeholder="0" keyboardType="numeric" />

        <InputCodigo placeholder="0" keyboardType="numeric" />

        <InputCodigo placeholder="0" keyboardType="numeric" />
      </ContentCodigo>

      <Button>
        <ButtonTitle>Continuar</ButtonTitle>
      </Button>

      <LinkCodigo>Recuperar a Senha</LinkCodigo>
    </Container>
  );
};
