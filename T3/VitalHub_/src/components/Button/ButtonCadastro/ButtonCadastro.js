import { ButtonCadText, ButtonCadastroS, ButtonConsultType, ButtonTextConsultType} from "./Style"


export const ButtonCadastroM = ({
    textButton,
    clickButton = false,
    onPress
}) => {
    return(
        <ButtonCadastroS clickButton={clickButton} onPress={onPress}>
            <ButtonCadText clickButton={clickButton}> {textButton} </ButtonCadText>
        </ButtonCadastroS>
    )
}

export const ButtonAgendar = ({
    textButton,
    clickButton = false,
    onPress
}) => {
    return(
        <ButtonConsultType clickButton={clickButton} onPress={onPress}>
            <ButtonTextConsultType clickButton={clickButton}> {textButton} </ButtonTextConsultType>
        </ButtonConsultType>
    )
}