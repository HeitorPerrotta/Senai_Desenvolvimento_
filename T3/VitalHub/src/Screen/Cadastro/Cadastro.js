import { Container } from "../../Components/Container/Style";
import { Logo } from "../../Components/Logo/Style";
import { Input } from "../../Components/Input/Style";
import { ButtonTitle, SimpleText, Title } from "../../Components/Title/Style";
import { Button } from "../../Components/Button/Style";
import { LinkCodigo } from "../../Components/Link/Style";

export const Cadastro = () => {
  return (
    <Container>
      <Logo source={require("../../assets/VitalHub_Logo.png")} />

      <Title>Redefinir Senha</Title>

      <SimpleText>Insira e confirme a sua nova senha</SimpleText>

      <Input placeholder={"Usuario ou E-mail"} />

      <Input placeholder={"Senha"} />

      <Input placeholder={"Confirmar Senha"} />

      <Button>
        <ButtonTitle>Cadastrar</ButtonTitle>
      </Button>

      <LinkCodigo>Cancelar</LinkCodigo>
    </Container>
  );
};
