import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { BoxButton, ButtonFooter, ContainerFooter, TextButtonFooter } from './Style';
import { useState } from 'react';
export const Footer = ({
    clickButton = null,

}) => {
    const [statusFooter, setStatusFooter] = useState("agenda")

    return(
        <ContainerFooter>
            <BoxButton>

                <ButtonFooter clickButton={statusFooter === "agenda"} onPress={() => setStatusFooter("agenda")}>
                    <FontAwesome6 name="calendar-check" size={18} color={statusFooter === "agenda" ? color='#607EC5'  : color='#4E4B59'}/>
                    <TextButtonFooter clickButton={statusFooter === "agenda"} >Agenda</TextButtonFooter>
                </ButtonFooter>

            </BoxButton>

            <BoxButton>

                <ButtonFooter clickButton={statusFooter === "clinica"} onPress={() => setStatusFooter("clinica")}> 	
                    <FontAwesome6 name="hospital" size={18} color={statusFooter === "clinica" ? color='#607EC5'  : color='#4E4B59' } />                    
                    <TextButtonFooter clickButton={statusFooter === "clinica"} >Clínica</TextButtonFooter>
                </ButtonFooter>

                </BoxButton>

            <BoxButton>

                <ButtonFooter clickButton={statusFooter === "perfil"} onPress={() => setStatusFooter("perfil")}>
                    <FontAwesome5 name="user-circle" size={18} color={statusFooter === "perfil" ? color='#607EC5'  : color='#4E4B59'}/>
                    <TextButtonFooter clickButton={statusFooter === "perfil"} >Perfil</TextButtonFooter>
                </ButtonFooter>
            </BoxButton>

        </ContainerFooter>
    )
}