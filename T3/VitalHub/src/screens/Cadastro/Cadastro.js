import { Button, ButtonTitle } from "../../components/Botao/style"
import { Container } from "../../components/Container/style"
import { LinkDown } from "../../components/ContentAccount/style"
import { Input } from "../../components/Input/style"
import { Icon, Logo } from "../../components/Logo/style"
import { Text } from "../../components/Text/style"
import { Title } from "../../components/Titulo/style"

export const Cadastro = () => {
    return(
        <Container>
            <Icon source={require("../../assets/icons/Group170.png")}/>

            <Logo source={require("../../assets/images/VitalHub_Logo 1.png")}/>

            <Title>Criar conta</Title>
            <Text>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Text>

            <Input placeholder="Usuário ou E-mail"/>
            <Input placeholder="Senha"/>
            <Input placeholder="Confirma Senha"/>

            <Button>
                <ButtonTitle> Cadastrar</ButtonTitle>
            </Button>

            <LinkDown>Cancelar</LinkDown>


        </Container>

    )

}