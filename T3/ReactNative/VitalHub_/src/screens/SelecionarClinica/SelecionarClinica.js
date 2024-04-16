import { useState } from "react"
import { ClinicContent, ContainerC } from "../../components/Container/Style"
import { TitleBlack } from "../../components/Title/Style"
import { CardClinic } from "../../components/Cards/CardClinica/CardClinica"
import { ListClinic } from "../../components/Cards/CardClinica/Style"
import { ButtonSub, ButtonSubText } from "../../components/Modals/ModalCancel/Style"
import { ButtonModal, ButtonTitle } from "../../components/Button/Style"

export const SelecionarClinica = ({navigation}) => {
    const SelecionarClinica = [
        {id: 1, nome: 'Clinica',                     
        name:'Clínica Natureh',
        rated:'4,5',
        time:'Seg-Sex',
        city: 'São Paulo, SP',
        border: '#496BBA'},
    
        {id: 2, nome: 'Clinica',                     
        name:'Diamond Pró-Mulher',
        rated:'4,8',
        time:'Seg-Sex',
        border:'transparent',
        city:'São Paulo, SP',
        border: 'transparent' },
    
        {id: 3, nome: 'Clinica',                     
        name:'Clinica Villa Lobos',
        rated:'4,2',
        time:'Seg-Sab',
        border:'transparent',
        city:'Taboão, SP',
        border: 'transparent' },
    
        {id: 4, nome: 'Clinica',                     
        name:'SP Oncologia Clínica',
        rated:'4,2',
        time:'Seg-Sab',
        border:'transparent',
        city:'Taboão, SP',
        border: 'transparent'},
    ]

    const [borderColor, setBorderColor] = useState(null)

    return (
        <ContainerC>
            <ClinicContent>
                <TitleBlack>Selecionar clínica</TitleBlack>
                <ListClinic
                
                    data={SelecionarClinica}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) =>
                         (
                        <CardClinic

                            clickButton={item.id == borderColor}
                            onPress={() => setBorderColor(item.id)}
                            name={item.name}
                            rated={item.rated}
                            time={item.time}
                            city={item.city}
                        />
                        )}
                />
                {/* Botão */}
                <ButtonModal onPress={() => navigation.replace('SelecionarMedico')}>
                    <ButtonTitle>Continuar</ButtonTitle>
                </ButtonModal>

                <ButtonSub onPress={() => navigation.replace('ConsultasPaciente')}>
                    <ButtonSubText>Cancelar</ButtonSubText>
                </ButtonSub>
            </ClinicContent>
        </ContainerC>
    )
}