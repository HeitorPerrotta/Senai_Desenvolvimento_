import { Button, Text } from "react-native"
import { Container } from "../../Components/Container/Style"
import { Logo } from "../../Components/Logo/Style"
import { Title } from "../../Components/Title/Style"
import { Input } from "../../Components/Input/Style"

export const Login = () => {
    return (
        <Container>
            <Logo source={require("../../assets/VitalHub_Logo.png")}/>

            <Title>Entrar ou criar conta</Title>

            <Input/>
            <Input/>

            {/* <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonTitleGoogle>Entra com Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta ? Crie uma agora!</TextAccount>
            </ContentAccount> */}
        </Container>
    )
}