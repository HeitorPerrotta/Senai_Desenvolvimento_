import { ContainerHeader } from "../Container/Style";
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./Style";
import { MaterialIcons } from "@expo/vector-icons";

export const Header = () => {
  return (
    <ContainerHeader>
      <BoxUser>
        <ImageUser source={{ uri: "https://github.com/kauameloo.png" }} />
        <DataUser>
          <TextDefault> Bem Vindo !</TextDefault>
          <NameUser>Dr.Fulano</NameUser>
        </DataUser>

        <MaterialIcons name="notifications" size={24} color="white" />
      </BoxUser>
    </ContainerHeader>
  );
};