import { CalendarList } from "../../components/Calendar/Calendar";
import { ButtonsContainer, Container } from "../../components/Container/style";
import {
  BoxFooter,
  FooterText,
  FooterTextSelected,
  OptionsFooter,
  OptionsFooterSelected,
} from "../../components/FooterComponent/style";
import { HeaderConsult } from "../../components/Header/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import { ListComponents } from "../../components/List/List";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { CancellationModal } from "../../components/Modals/CancellationModal/CancellationModal";
import { AppointmentModal } from "../../components/Modals/AppointmentModal/AppointmentModal";
import { AbsTabsStyle } from "../../components/BtnListAppontement/AbsListAppointment";

const medico = [
  {
    nome: "Dra Catarena",
    imagem: require("../../assets/images/Catarena.jpeg"),
  },
];

const consultas = [
  {
    id: 1,
    nome: "Homem Lindo",
    situacao: "pendente",
    imagem: { uri: "https://github.com/HeitorPerrotta.png" },
  },
  {
    id: 2,
    nome: "Lucas Biansexy",
    situacao: "pendente",
    imagem: { uri: "https://github.com/kanyewestfan420.png" },
  },
  {
    id: 3,
    nome: "AlbatrozPyt",
    situacao: "realizado",
    imagem: { uri: "https://github.com/AlbatrozPyt.png" },
  },
  {
    id: 4,
    nome: "Catarina paciente",
    situacao: "pendente",
    imagem: { uri: "https://github.com/BarackHusseinObama.png" },
  },
  {
    id: 5,
    nome: "Gabriel paciente",
    situacao: "cancelado",
    imagem: { uri: "https://github.com/VinnyDiesel.png" },
  },
];

export const ConsultasMedico = () => {
  // state para o estado da lista
  const [statusListas, setStatusListas] = useState("pendente");

  // state para a exibição dos modais
  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalAppointment, setShowModalAppointment] = useState(false);

  return (
    <Container>
      <HeaderConsult
        user={medico.find((element) => element.nome)}
        imagem={medico.find((element) => element.imagem)}
      />

      {/* usando biblioteca */}
      <CalendarList />

      {/* navegacao */}
      {/* <Consults/> */}
      <ButtonsContainer>
        <AbsTabsStyle
          textButton={"agendadas"}
          clickButton={statusListas == "pendente"}
          onPress={() => {
            setStatusListas("pendente");
          }}
        />
        <AbsTabsStyle
          textButton={"realizadas"}
          clickButton={statusListas == "realizado"}
          onPress={() => {
            setStatusListas("realizado");
          }}
        />
        <AbsTabsStyle
          textButton={"canceladas"}
          clickButton={statusListas == "cancelado"}
          onPress={() => {
            setStatusListas("cancelado");
          }}
        />
      </ButtonsContainer>

      {/* sessao de card */}
      {/* lista */}
      <ListComponents
        //usa o array consultas como parametro para os dados
        data={consultas}
        //especifica que a expressao "item" está relacionada com a lista de consultas(pacientes) por conta do ITEM.ID
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          statusListas === item.situacao ? (
            <AppointmentCard
              situacao={item.situacao}
              onPressCancel={() => setShowModalCancel(true)}
              onPressAppointment={() => setShowModalAppointment(true)}
              dados={item}
            />
          ) : null
        }
        showsVerticalScrollIndicator={false}
      />

      {/* Modal Cancelar */}
      <CancellationModal
        visible={showModalCancel}
        setShowModalCancel={setShowModalCancel}
      />

      <AppointmentModal
        visible={showModalAppointment}
        setShowModalAppointment={setShowModalAppointment}
      />

      <BoxFooter>
        <OptionsFooterSelected>
          <FontAwesome6 name="calendar-days" size={22} color="#607EC5" />
          <FooterTextSelected>Agenda</FooterTextSelected>
        </OptionsFooterSelected>

        <OptionsFooter>
          <MaterialCommunityIcons
            name="hospital-building"
            size={22}
            color="black"
          />
          <FooterText>Clínicas</FooterText>
        </OptionsFooter>

        <OptionsFooter>
          <FontAwesome6 name="circle-user" size={22} color="black" />
          <FooterText>Perfil</FooterText>
        </OptionsFooter>
      </BoxFooter>
    </Container>
  );
};
