import { ViewBoxCode } from "../Container/StyleContainer";
import {
  CancelCard,
  CancelLessMargin,
  CancelLessMarginModal,
  CancelLessMarginPrescription,
  CancelPhotoCss,
  DescripritionEmail,
  DescripritionForgot,
  EmailText,
  PhotoCancel,
  ResendCode,
  SeeMedicalRecord,
  SmallDescriptionModal,
  SmallDescriptionModal2,
} from "./StyledDescriptions";

export const DescriptionPassword = ({ description }) => {
  return <DescripritionForgot>{description}</DescripritionForgot>;
};

export const EmailDescription = () => {
  return (
    <DescripritionEmail>
      Digite o código de 4 dígitos enviado para{" "}
      <EmailText>username@email.com</EmailText>
    </DescripritionEmail>
  );
};

export const CodeResend = ({ text, onPress }) => {
  return <ResendCode onPress={onPress}>{text}</ResendCode>;
};

export const SeeRecord = ({ onPressAppointment, text }) => {
  return (
    <SeeMedicalRecord onPress={onPressAppointment}>{text}</SeeMedicalRecord>
  );
};

export const CardCancel = ({ onPressCancel, text }) => {
  return <CancelCard onPress={onPressCancel}>{text}</CancelCard>;
};

export const CardCancelLess = ({ onPressCancel, text }) => {
  return <CancelLessMargin onPress={onPressCancel}>{text}</CancelLessMargin>;
};

export const CardCancelLessModal = ({ onPressCancel, text }) => {
  return <CancelLessMarginModal onPress={onPressCancel}>{text}</CancelLessMarginModal>;
};
export const CardCancelLessPrescription = ({ onPressCancel, text }) => {
  return (
    <CancelLessMarginPrescription onPress={onPressCancel}>
      {text}
    </CancelLessMarginPrescription>
  );
};
export const CancelPhoto = ({ onPressCancel, text }) => {
  return <PhotoCancel onPress={onPressCancel}>{text}</PhotoCancel>;
};

export const DescripritionModalSmall = ({ text }) => {
  return <SmallDescriptionModal>{text}</SmallDescriptionModal>;
};

export const DescripritionModalSmall2 = ({ text }) => {
  return <SmallDescriptionModal2>{text}</SmallDescriptionModal2>;
};

