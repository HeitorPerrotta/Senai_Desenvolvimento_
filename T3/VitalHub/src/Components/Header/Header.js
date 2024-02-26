import { FontAwesome } from "@expo/vector-icons";
import {
  DoctorName,
  DoctorUser,
  HeaderContainer,
  HeaderContent,
  Welcome,
} from "./style";
import { ContentInfosDoc, DoctorBox } from "../Container/style";

export const HeaderConsult = ({ user, imagem }) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <DoctorBox>
          <DoctorUser
            source={imagem.imagem}
          />
          <ContentInfosDoc>
            <Welcome>Bem vindo</Welcome>
            <DoctorName>{user.nome}</DoctorName>
          </ContentInfosDoc>
        </DoctorBox>
        <FontAwesome name="bell" size={25} color="white" />
      </HeaderContent>
    </HeaderContainer>
  );
};
