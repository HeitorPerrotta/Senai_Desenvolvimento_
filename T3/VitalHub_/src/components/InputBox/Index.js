import { InputP } from "../Input/Index"
import { Input } from "../Input/Style"
import { Label } from "../Label/Index"
import { FieldContent, FieldContent2 } from "./Style"

export const InputBox = ({
    fieldWidth = 100,
    customHeight = 53,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText,
    keyboardType = 'default',
    maxLength,
    customP,
    multiline,
    numberOfLines


}) => {
    return(
        <FieldContent fieldWidth={fieldWidth}>

            <Label 
                textLabel={textLabel}
            /> 

            <Input
            numberOfLines={numberOfLines}
            multiline={multiline}
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyboardType}
            maxLength={maxLength}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            customHeight={customHeight}
            customP={customP}
            />

        </FieldContent>
        
    )
}

export const InputBoxSub = ({
    fieldWidth = 100,
    customHeight = 53,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText,
    keyboardType = 'default',
    maxLength,
    customP

}) => {
    return(
        <FieldContent 
            fieldWidth={fieldWidth}
            >

            <Label 
                textLabel={textLabel}
                /> 

            <InputP
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyboardType}
            maxLength={maxLength}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            customHeight={customHeight}
            customP={customP}
            />

        </FieldContent>
        
    )
}

