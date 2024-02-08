import { Container } from "../../Components/Container/Style"
import { Logo } from "../../Components/Logo/Style"
import { Input } from "../../Components/Input/Style"
import { ButtonTitle, SimpleText, Title } from "../../Components/Title/Style"
import { Button } from "../../Components/Button/Style"

export const RecuperarSenha = () => {
    return (
        <Container>
            <Logo source={require("../../assets/VitalHub_Logo.png")} />

            <Title>Recuperar Senha</Title>

            <SimpleText>
                Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha
            </SimpleText>

            <Input placeholder={"Usuário ou E-mail"}/>

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

        </Container>
    )
}
