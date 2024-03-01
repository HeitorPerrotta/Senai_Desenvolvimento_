import { Container } from "../../components/Container/style";
import { MapImage } from "../../components/Image/Image";
import { ContainerInput, FlexTitle, InputFlex, InputMapa, LabelInputMap, TextInput } from "../../components/Modals/Mapa/style";
import { Subtitle } from "../../components/Text/style";
import { Title } from "../../components/Title/style";

export const LocalConsulta = () => {
  return (
    <Container>
      <MapImage source={require("../../assets/images/mapa.png")} />

      <FlexTitle>
        <Title>Clínica Natureh</Title>
        <Subtitle>São Paulo, SP</Subtitle>
      </FlexTitle>

      <InputFlex>
        <LabelInputMap>Endereço</LabelInputMap>
        <InputMapa fieldwidth={320} />
      </InputFlex>
      <ContainerInput>
        <TextInput>
          <LabelInputMap>Número</LabelInputMap>
          <InputMapa fieldwidth={144} />
        </TextInput>
        <TextInput>
          <LabelInputMap>Bairro</LabelInputMap>
          <InputMapa fieldwidth={144} />
        </TextInput>
      </ContainerInput>
    </Container>
  );
};
