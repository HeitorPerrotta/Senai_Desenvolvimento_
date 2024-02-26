import { Button, ButtonTitle } from "../../components/Botao/style"
import { Container } from "../../components/Container/style"
import { Input } from "../../components/Input/style"
import { Icon, Logo } from "../../components/Logo/style"
import { Text } from "../../components/Text/style"
import { Title } from "../../components/Titulo/style"

export const RedefinirSenha = () => {
    return (
        <Container>
            <Icon source={require("../../assets/icons/Group170.png")} />

            <Logo source={require("../../assets/images/VitalHub_Logo 1.png")}/>

            <Title>Redefinir senha</Title>
            <Text>Insira e confirme a sua nova senha</Text>

            <Input placeholder="Nova Senha"/>
            <Input placeholder="Confirmar nova senha"/>

            <Button>
                <ButtonTitle>Confirmar nova senha</ButtonTitle>
            </Button>
        </Container>


    )
}