import styled from "styled-components";
import { SubtitleCard } from "../../Title/style";
import { Label } from "../../Text/style";

export const FlexTitle = styled.View`
    align-items: center;
`

export const TextLocal = styled(SubtitleCard)`
    font-size: 14px;
`

export const InputMapa = styled.TextInput`
    border-radius: 5px;
    height: 53px;
    background-color: #F5F3F3;
`

export const ContainerInput = styled.View`
flex-direction: row;
justify-content: space-between;
width: 80%;
`

export const LabelInputMap = styled(Label)`
    margin: 0;
`

export const TextInput = styled.View`
    gap: 10px;
`

export const InputFlex = styled.View`
    margin: 25px 0;
    gap: 10px;
`