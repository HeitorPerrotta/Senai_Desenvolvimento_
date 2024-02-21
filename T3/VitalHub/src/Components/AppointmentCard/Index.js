import {
  ButtonCard,
  ButtonText,
  ClockCard,
  ContainerCardList,
  ContentCard,
  DataProfileCard,
  ProfileData,
  ProfileImage,
  ProfileName,
  TextAge,
  TextBold,
  ViewRow,
} from "./Style";
import { AntDesign } from "@expo/vector-icons";

export const AppointmentCard = ({
  situacao = "pendente",
  onPressCancel,
  onPressAppointment,
}) => {
  return (
    //container principal
    <ContainerCardList>
      {/* Imagem do Perfil */}
      <ProfileImage
        source={{ uri: "https://github.com/gabrielhenriqueas.png" }}
      />

      {/* Conteúdo do Card */}
      <ContentCard>
        <DataProfileCard>
          <ProfileName>Gabriel Henrique Lindo</ProfileName>

          <ProfileData>
            <TextAge>24 Anos</TextAge>
            <TextBold>Rotina</TextBold>
          </ProfileData>

          <ViewRow>
            {/* Icone + Horário */}
            <ClockCard>
              <AntDesign
                name="clockcircle"
                size={14}
                color={situacao == "pendente" ? "#49B3BA" : "#49B3BA"}
              />
              <TextBold>14:00</TextBold>
            </ClockCard>

            {/* valida e mostra o tipo de botão conforme a situação da consulta */}
            {situacao == "cancelado" ? (
              <></>
            ) : situacao == "pendente" ? (
              <ButtonCard onPress={onPressCancel}>
                <ButtonText situacao={situacao}>Cancelar</ButtonText>
              </ButtonCard>
            ) : (
              <ButtonCard>
                <ButtonText situacao={situacao}>Ver prontuário</ButtonText>
              </ButtonCard>
            )}
          </ViewRow>
        </DataProfileCard>
      </ContentCard>
    </ContainerCardList>
  );
};
