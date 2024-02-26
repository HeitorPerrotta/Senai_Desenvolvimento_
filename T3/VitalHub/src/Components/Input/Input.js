import { FieldContent } from "../Modals/ConsultModal/style"
import { InputModalProp } from "./style"


export const InputProp = ({inputHeight, fieldWidth = 88, placeHolder}) => {
    return(
        // <FieldContent>
        <InputModalProp placeholder={placeHolder} fieldWidth={fieldWidth} height={inputHeight}/>
        // </FieldContent>
    )

}