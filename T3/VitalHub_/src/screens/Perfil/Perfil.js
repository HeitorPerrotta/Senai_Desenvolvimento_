import { ContainerLabel, ContainerLevantado, ContainerP, PerfilCityInputsContainer } from "../../components/Container/Style"
import { Subtitle, TitleBlack } from "../../components/Title/Style"
import { ScrollForm } from "../../components/ScrollForm/Style"
import { ButtonCinza, ButtonPerfil, ButtonTitle, } from "../../components/Button/Style"
import { ProfilePic } from "../../components/Image/Style"
import { InputBox } from "../../components/InputBox/Index"
import { PerfilInput } from "../../components/Input/PerfilInput/Index"

export const Perfil = () => {
    return (
        <ScrollForm>
            <ContainerP>
                <ProfilePic
                    source={require('../../../src/assets/img/Enrike.jpeg')}
                    resizeMode='cover'
                >

                    <ContainerLevantado>
                        <TitleBlack>Enrike o Matheus</TitleBlack>
                        <Subtitle>rikzzm@gmail.com</Subtitle>
                    </ContainerLevantado>
                </ProfilePic>

                <PerfilInput
                    inputLabel="Data de nascimento"
                    inputPlaceholder="06/05/1968"
                    containerWidth="90%"
                    inputType={"numeric"}
                />
                <PerfilInput
                    inputLabel="CPF"
                    inputPlaceholder="543********"
                    containerWidth="90%"
                    inputType={"numeric"}
                />
                <PerfilInput
                    inputLabel="Endereço"
                    inputPlaceholder="Rua do Piscinão, 645"
                    containerWidth="90%"
                />

                <PerfilCityInputsContainer>
                    <PerfilInput
                        inputLabel="Cep"
                        inputPlaceholder="04597-609"
                        containerWidth="40%"
                    />
                    <PerfilInput
                        inputLabel="Cidade"
                        inputPlaceholder="Santo André-SP"
                        containerWidth="40%"
                    />
                </PerfilCityInputsContainer>
                <ButtonPerfil>
                    <ButtonTitle>SALVAR</ButtonTitle>
                </ButtonPerfil>
                <ButtonPerfil>
                    <ButtonTitle>EDITAR</ButtonTitle>
                </ButtonPerfil>
                <ButtonCinza>
                    <ButtonTitle>Sair do app</ButtonTitle>
                </ButtonCinza>
            </ContainerP>
        </ScrollForm>
    )
}