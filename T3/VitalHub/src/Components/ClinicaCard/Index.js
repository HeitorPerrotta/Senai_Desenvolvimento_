import { TitleBold } from "../Title/style";
import {
  BoxCard,
  BoxDay,
  ClinicaShadow,
  DayBox,
  IconContent,
  TextBlue,
  TextBox,
  TextCity,
  TextGold,
} from "./Style";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const ClinicaCard = ({ name, rated, time, border, city }) => {
  return (
    <ClinicaShadow border={border}>
      <BoxCard>
        <TextBox>
          <TitleBold>{name}</TitleBold>
          <IconContent>
            <AntDesign name="star" size={20} color="#F9A620" />
            <TextGold>{rated}</TextGold>
          </IconContent>
        </TextBox>
        <BoxDay>
          <TextCity>{city}</TextCity>
          <DayBox>
            <MaterialCommunityIcons
              name="calendar-today"
              size={14}
              color="#49B3BA"
            />
            <TextBlue>{time}</TextBlue>
          </DayBox>
        </BoxDay>
      </BoxCard>
    </ClinicaShadow>
  );
};
