import { InputUserCepCity } from "../../components/Input/style";

export const InputUserSquare = ({placeHolder, containerWidth, maxLength, keyType}) => {
    return(
        <InputUserCepCity 
            placeHolder={placeHolder} width={containerWidth} maxLength={maxLength} keyboardType={keyType}
        />
    )
}