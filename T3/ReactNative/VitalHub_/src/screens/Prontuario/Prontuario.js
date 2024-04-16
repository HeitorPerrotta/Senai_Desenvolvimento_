import { ButtonCinzaSub, ButtonPerfil, ButtonTitle } from '../../components/Button/Style'
import { ContainerLevantado, ContainerP } from '../../components/Container/Style'
import { ProfilePic } from '../../components/Image/Style'
import { InputBoxSub } from '../../components/InputBox/Index'
import { LinkBlue } from '../../components/Link/Style'
import { ScrollForm } from '../../components/ScrollForm/Style'
import { Subtitle, TitleBlack } from '../../components/Title/Style'

export const Prontuario = () => {
    return(
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

            <InputBoxSub
                textLabel='Descrição da consulta'
                placeholder='Descrição'
                keyboardType='numeric'
                maxLength={10}
                editable={true}
                fieldWidth={80}
                customHeight={120}
                customP={60}
            />
            <InputBoxSub
                textLabel='Diagnóstico do paciente'
                placeholder='Diagnóstico'
                keyboardType='numeric'
                maxLength={14}
                editable={true}
                fieldWidth={80}
            />
            <InputBoxSub
                textLabel='Prescrição médica'
                placeholder='Prescrição médica'
                keyboardType='default'
                maxLength={100}
                editable={true}
                fieldWidth={80}
                customHeight={120}
                customP={60}
            />

            <ButtonPerfil>
                <ButtonTitle>SALVAR</ButtonTitle>
            </ButtonPerfil>

            <ButtonCinzaSub>
                <ButtonTitle>EDITAR</ButtonTitle>
            </ButtonCinzaSub>

            <LinkBlue>Cancelar</LinkBlue>
        </ContainerP>
        </ScrollForm> 
    )
}