import {
  BabyBlueButtonText,
  ButtonText,
  ButtonTextGoogle,
  ButtonTextHome,
  SendButtonText,
  WhiteButtonText,
} from "../ButtonText/StyleButtonText";
import { BoxLocalizationHome } from "../Container/StyleContainer";
import {
  ButtonBlocked,
  ButtonHome,
  ButtonLevel,
  GoogleButton,
  LargeButton,
  LargeButtonAgendamentModal,
  LargeButtonConfirmModal,
  LargeButtonLocalization,
  LargeButtonSelect,
  LargeButtonSelectClinic,
  LargeButtonSelectModal,
  NormalButton,
  SendButton,
  SmallButtonBlocked,
  WhiteButtonHome,
} from "./StyleButton";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export const ButtonNormal = ({ onPress, text }) => {
  return (
    <NormalButton onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </NormalButton>
  );
};

export const ButtonGoogle = ({ onPress, text }) => {
  return (
    <GoogleButton onPress={onPress}>
      <AntDesign name="google" size={18} color="#496BBA" />
      <ButtonTextGoogle>{text}</ButtonTextGoogle>
    </GoogleButton>
  );
};

export const ButtonLarge = ({ onPress, text }) => {
  return (
    <LargeButton onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </LargeButton>
  );
};

export const ButtonLargeSelect = ({ onPress, text }) => {
  return (
    <LargeButtonSelectModal onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </LargeButtonSelectModal>
  );
};
export const ButtonLargeLocalization = ({ onPress, text }) => {
  return (
    <LargeButtonLocalization onPress={onPress}>
      <BoxLocalizationHome>
        <FontAwesome name="home" size={24} color="white" />
        <ButtonText>{text}</ButtonText>
      </BoxLocalizationHome>
    </LargeButtonLocalization>
  );
};
export const ButtonLargeAgendament = ({ onPress, text }) => {
  return (
    <LargeButtonAgendamentModal onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </LargeButtonAgendamentModal>
  );
};
export const ButtonLargeSelectClinic = ({ onPress, text }) => {
  return (
    <LargeButtonSelectClinic onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </LargeButtonSelectClinic>
  );
};

export const BlockedButton = ({ onPress, text }) => {
  return (
    <ButtonBlocked onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </ButtonBlocked>
  );
};

export const BlockedSmallButton = ({ onPress, text }) => {
  return (
    <SmallButtonBlocked onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </SmallButtonBlocked>
  );
};

export const FilterButton = ({ selected = false, text, onPress = null }) => {
  return (
    <>
      {selected ? (
        <ButtonHome selected={selected} onPress={onPress}>
          <ButtonTextHome>{text}</ButtonTextHome>
        </ButtonHome>
      ) : (
        <WhiteButtonHome selected={selected} onPress={onPress}>
          <WhiteButtonText>{text}</WhiteButtonText>
        </WhiteButtonHome>
      )}
    </>
  );
};

export const LevelButton = ({ onPress, text }) => {
  return (
    <ButtonLevel onPress={onPress}>
      <BabyBlueButtonText>{text}</BabyBlueButtonText>
    </ButtonLevel>
  );
};
export const ButtonSend = ({ onPress, text }) => {
  return (
    <SendButton onPress={onPress}>
      <MaterialCommunityIcons name="camera-plus" size={24} color="white" />
      <SendButtonText>{text}</SendButtonText>
    </SendButton>
  );
};

export const ButtonLargeConfirmModal = ({ onPress, text }) => {
  return (
    <LargeButtonConfirmModal onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </LargeButtonConfirmModal>
  );
};
