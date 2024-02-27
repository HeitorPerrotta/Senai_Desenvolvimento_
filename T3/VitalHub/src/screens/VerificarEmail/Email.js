import { Button, ButtonTitle } from "../../components/Button/Style"
import { Container, ContentInput } from "../../components/Container/style"
import { LinkDown, LinkEmail } from "../../components/ContentAccount/style"
import { InputSquare } from "../../components/Input/style"
import { Icon, Logo } from "../../components/Logo/style"
import { Text } from "../../components/Text/style"
import { Title } from "../../components/Title/style"

export const Email = () => {
    return(
        <Container>
            <Icon source={require("../../assets/icons/Group170.png")}/>

            <Logo source={require("../../assets/images/VitalHub_Logo 1.png")}/>

            <Title>Verifique seu e-mail</Title>
            <Text>Digite o código de 4 digitos enviado para <LinkEmail>username@email.com</LinkEmail></Text>

            <ContentInput>
                <InputSquare placeholder="0"/>
                <InputSquare placeholder="0"/>
                <InputSquare placeholder="0"/>
                <InputSquare placeholder="0"/>
            </ContentInput>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <LinkDown>Reenviar Código</LinkDown>

        </Container>
    )
}