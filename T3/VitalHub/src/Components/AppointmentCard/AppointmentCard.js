import { AntDesign } from '@expo/vector-icons';
import { ButtonCard, ButtonText, ClockCard, ContainerCardList, ContentCard, DataProfileCard, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, TextPoint, ViewRow } from './style';

export const AppointmentCard = ({ situacao = "pendente", onPressCancel, onPressAppointment, dados }) => {
    return (
        <ContainerCardList>
            <ProfileImage source={dados.imagem} />

            <ContentCard>
                <DataProfileCard>
                    <ProfileName>
                        {dados.nome}
                    </ProfileName>

                    <ProfileData>
                        <TextAge>20 anos</TextAge>
                        <TextPoint>·</TextPoint>
                        <TextBold>Rotina</TextBold>
                    </ProfileData>
                </DataProfileCard>


                <ViewRow>
                    <ClockCard>
                        <AntDesign name="clockcircleo" size={14} color={situacao == "pendente" ? "#49B3BA" : "#BC8A97"} />
                        <TextBold situacao={situacao} color={"#49B3BA"}>14:00</TextBold>
                    </ClockCard>

                    {/* valida e mostra o tipo de botão conforme a situação */}


                    {situacao == "cancelado" ? (
                        <>
                        </>
                    ) : situacao == "pendente" ? (
                        <ButtonCard onPress={onPressCancel}>
                            <ButtonText situacao={situacao}>Cancelar</ButtonText>
                        </ButtonCard>
                    ) : (
                        <ButtonCard onPress={onPressAppointment}>
                            <ButtonText situacao={situacao}>Ver prontuario</ButtonText>
                        </ButtonCard>
                    )}

                </ViewRow>

            </ContentCard>
        </ContainerCardList>

    )
}