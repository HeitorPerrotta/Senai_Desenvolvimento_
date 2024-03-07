import { ContainerP, ContainerSub, PerfilCityInputsContainer } from "../../components/Container/Style"
import { ProfilePicSub } from "../../components/Image/Style"
import { PerfilInput } from "../../components/Input/PerfilInput/Index"
import { InputBox } from "../../components/InputBox/Index"
import { TextGray, TitleSub } from "../../components/Title/Style"

export const LocalConsulta = () => {
    return (

        <ContainerP>
            <ProfilePicSub
                source={require('../../../src/assets/img/Mapa.png')}
                resizeMode='cover'
            />

            <TitleSub>Clínica Natureh</TitleSub>
            <TextGray>São Paulo, SP</TextGray>

            <PerfilInput
                inputLabel="Endereço"
                inputPlaceholder="Rua Exemplo, 000"
                containerWidth="90%"
            />
            <PerfilCityInputsContainer>
                <PerfilInput
                    inputLabel="Número"
                    inputPlaceholder="000"
                    containerWidth="40%"
                    inputType={"numeric"}

                />
                <PerfilInput
                    inputLabel="Bairro"
                    inputPlaceholder="Bairro-Estado"
                    containerWidth="40%"
                />

            </PerfilCityInputsContainer>

        </ContainerP>

    )
}

