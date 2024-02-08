import { Container } from "../../Components/Container/Style";
import { Logo } from "../../Components/Logo/Style";
import { Input } from "../../Components/Input/Style";
import { ButtonTitle, SimpleText, Title } from "../../Components/Title/Style";
import { Button } from "../../Components/Button/Style";

export const RedefinirSenha = () => {
  return (
    <Container>
      <Logo source={require("../../assets/VitalHub_Logo.png")} />

      <Title>Redefinir Senha</Title>

      <SimpleText>Insira e confirme a sua nova senha</SimpleText>

      <Input placeholder={"Nova senha"} />

      <Input placeholder={"Confirmar nova senha"} />

      <Button>
        <ButtonTitle>Continuar</ButtonTitle>
      </Button>
    </Container>
  );
};
