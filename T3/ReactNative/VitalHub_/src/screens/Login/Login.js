import { Container } from "../../components/Container/Style"
import { Logo } from "../../components/Logo/Style"
import { Title } from "../../components/Title/Style"
import { Input } from "../../components/Input/Style"
import { ButtonGoogleTitle, Button, ButtonGoogle, ButtonTitle } from "../../components/Button/Style"
import { ContentAccount } from "../../components/ContentAccount/Style"
import { TextAccount } from "../../components/TextAccount/Style"
import { AntDesign } from '@expo/vector-icons'
import { Link, LinkBlue } from "../../components/Link/Style"

export const Login = ({navigation}) => {

    async function Login() {
        navigation.replace("Main")
    }

    return(
        <Container>

            <Logo
                source={require('../../../src/assets/img/VitalHub_LogoAzul.png')}
            />

            <Title>Entrar ou criar conta</Title>
            
            <Input
                placeholder={'Usuário ou E-mail'}
            />

            <Input
                placeholder={'Senha'}
            />

            <Link onPress={() => navigation.replace('EsqueceuSenha')}>Esqueceu sua senha?</Link>

            <Button onPress={(e) => Login()}>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <AntDesign
                name="google"   
                size={20} color='#496BBA'
                />
                <ButtonGoogleTitle>Entrar com Google</ButtonGoogleTitle>
            </ButtonGoogle>
            
            <ContentAccount>
                <TextAccount>Não tem conta? <LinkBlue onPress={() => navigation.replace('Cadastro')}>Crie uma conta agora!</LinkBlue></TextAccount>
            </ContentAccount>

        </Container>
    )
}