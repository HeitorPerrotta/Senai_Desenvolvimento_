import { InputBlue } from "../../components/Input/style"


//props do input
export const FieldInput = ({placeHolder, containerWidth, containerHeight, textAlignVertical, paddingTop}) => {
    return(
        <InputBlue placeholder={placeHolder} width={containerWidth} height={containerHeight} textAlignVertical={textAlignVertical} paddingTop={paddingTop}/>
    )
}