import { ButtonLargeSelect, ButtonLargeSelectClinic } from "../../components/Button/Button";
import { LargeButtonSelect } from "../../components/Button/StyleButton";
import { CardSelecClinc } from "../../components/Cards/Cards";
import { CardContainer } from "../../components/Cards/StyleCards";
import {
  Container,
  ContainerClinic,
  FlatContainerSelect,
  FlatContainerSelectClinic,
  ScrollContainer,
} from "../../components/Container/StyleContainer";
import { CancelLessMargin } from "../../components/Descriptions/StyledDescriptions";
import { TitleSelect } from "../../components/Title/StyleTitle";
import { NameTitle } from "../../components/Title/Title";

export const SelecionarClinica = ({navigation}) => {
  const dataItens = [
    {
      id: "1",
      NameClinic: "Clínica Natureh",
      Location: "Sao Paulo, SP",
      Rate: "4,5",
      OpenTime: "Seg-Sex",
    },
    {
      id: "2",
      NameClinic: "Diamond Pró-Mulher",
      Location: "Sao Paulo, SP",
      Rate: "4,8",
      OpenTime: "Seg-Sex",
    },
    {
      id: "3",
      NameClinic: "Clinica Villa Lobos",
      Location: "Taboão, SP",
      Rate: "4,2",
      OpenTime: "Seg-Sab",
    },
    {
      id: "4",
      NameClinic: "SP Oncologia Clínica",
      Location: "Taboão, SP",
      Rate: "4,2",
      OpenTime: "Seg-Sex",
    },

    {
      id: "5",
      NameClinic: "SP Doncologia Clínica",
      Location: "Taboão, SP",
      Rate: "4,2",
      OpenTime: "Seg-Sex",
    },
    {
      id: "6",
      NameClinic: "SP Clínica Ortopedica",
      Location: "Taboão, SP",
      Rate: "4,2",
      OpenTime: "Seg-Sex",
    },
  ];

  return (
    <Container>
      <TitleSelect>Selecionar clínica</TitleSelect>

      <FlatContainerSelectClinic
        data={dataItens}
        renderItem={({ item }) => (
          <CardSelecClinc
            NameClinic={item.NameClinic}
            Location={item.Location}
            Rate={item.Rate}
            OpenTime={item.OpenTime}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      <ButtonLargeSelectClinic onPress={() => { navigation.navigate("Selecionar Data") }} text={"Continuar"} />

      <CancelLessMargin>Cancelar</CancelLessMargin>
    </Container>
  );
};
