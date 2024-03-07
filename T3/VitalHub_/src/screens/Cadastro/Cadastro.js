import { ButtonCadastro, ButtonTitle } from '../../components/Button/Style'
import { Container } from '../../components/Container/Style'
import { LinkCancel } from '../../components/Link/Style'
import { Logo } from '../../components/Logo/Style'
import { Subtitle, Title } from '../../components/Title/Style'
import { Input } from "../../components/Input/Style"

export const Cadastro = ({ navigation }) => {
    return (
        <Container>
            <Logo
                source={require('../../../src/assets/img/VitalHub_LogoAzul.png')}
            />

            <Title>Criar conta</Title>

            <Subtitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</Subtitle>


            <Input
                placeholder={'Usuário ou E-mail'}
            />
            <Input
                placeholder={'Senha'}
            />
            <Input
                placeholder={'Confirmar senha'}
            />

            <ButtonCadastro onPress={() => navigation.replace('Login')}>
                <ButtonTitle>Cadastrar</ButtonTitle>
            </ButtonCadastro>

            <LinkCancel onPress={() => navigation.replace('Login')}>Cancelar</LinkCancel>

        </Container>
    )
}