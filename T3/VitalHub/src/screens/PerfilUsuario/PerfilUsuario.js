import { ScrollView } from "react-native"
import { Container, InfoContainer, UserBoxInput } from "../../components/Container/style"
import { ImageBox } from "../../components/Image/Image"
import { BoxUserInput, InputUser } from "../../components/Input/style"
import { Label, LabelCepCity, LabelDate, TextEmail } from "../../components/Text/style"
import { TitleUser } from "../../components/Titulo/style"
import { Button, ButtonEdit, ButtonTitle } from "../../components/Botao/style"
import { InputUserSquare } from "./Index"

export const PerfilUsuario = () => {
    return (
        <ScrollView>
            <Container>
                <ImageBox source={require("../../assets/images/Rectangle426.png")} />

                <InfoContainer>
                    <TitleUser>Richard Kosta</TitleUser>
                    <TextEmail>richard.kosta@gmail.com</TextEmail>
                </InfoContainer>


                <LabelDate>Data de Nascimento:</LabelDate>
                <InputUser />

                <Label>CPF</Label>
                <InputUser />

                <Label>Endereço</Label>
                <InputUser />


                <UserBoxInput>
                    <BoxUserInput>
                        <LabelCepCity>Cep</LabelCepCity>
                        <InputUserSquare placeHolder='00000-000' containerWidth={144} maxLength={9} keyType='numeric' />
                    </BoxUserInput>

                    <BoxUserInput>
                        <LabelCepCity>Cidade</LabelCepCity>
                        <InputUserSquare placeHolder='Cidade' containerWidth={144} />
                    </BoxUserInput>
                </UserBoxInput>
                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>

                <ButtonEdit>
                    <ButtonTitle>Editar</ButtonTitle>
                </ButtonEdit>

            </Container>
        </ScrollView>
    )

}