import { Button, ContentIconButton } from "./style"

export const ButtonDocEquipament = ({onPressConsult, icon}) => {
    return(
            <Button onPress={onPressConsult}>
                {/* defino no source a prop icon que sera para passar a imagem para o botão */}
                <ContentIconButton source={icon}/>
            </Button>
    )
}