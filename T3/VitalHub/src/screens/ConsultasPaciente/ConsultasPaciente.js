import { ButtonsContainer, Container } from "../../components/Container/style";
import { HeaderConsult } from "../../components/Header/Header";
import { CalendarList } from "../../components/Calendar/Calendar";
import { AbsTabsStyle } from "../../components/BtnListAppontement/AbsListAppointment";
import { useState } from "react";
import { ListComponents } from "../../components/List/List";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { CancellationModal } from "../../components/Modals/CancellationModal/CancellationModal";
import { AppointmentModal } from "../../components/Modals/AppointmentModal/AppointmentModal";
import { ButtonDocEquipament } from "../../components/DocEquipament/DocEquipament";
import { ConsultModal } from "../../components/Modals/ConsultModal/ConsultModal";

//import do icone que irei usar como imagem do botao 
import iconMedic from '../../assets/icons/estetoscopio.png';

export const ConsultasPaciente = () => {
  const [statusListaMedicos, setStatusListaMedicos] = useState("pendente");

  //declaro uma variavel iconButton que guarda o icon(import da imagem que eu iria usar como icone do botão)
  const iconButton = iconMedic;

  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalOpenAppoitment, setShowModalAppointment] = useState(false);
  const [showModalConsult, setShowModalConsult] = useState(false);

  const pacienteUser = [
    {
      nome: "VinCius",
      imagem: { uri: "http://github.com/Vinicius-Vieira-Andrade.png" },
    },
  ];

  const medicos = [
    {
      id: 1,
      nome: "Dr Chezzy",
      situacao: "pendente",
      imagem: require("../../assets/images/Chezzy.jpeg"),
    },
    {
      id: 2,
      nome: "Dr Enrike",
      situacao: "realizado",
      imagem: require("../../assets/images/Enrike.jpeg"),
    },
    {
      id: 3,
      nome: "Dra Catarena",
      situacao: "cancelado",
      imagem: require("../../assets/images/Catarena.jpeg"),
    },
    {
      id: 4,
      nome: "Dr Dominguinhos",
      situacao: "cancelado",
      imagem: require("../../assets/images/Tinas.jpeg"),
    },
    {
      id: 5,
      nome: "Dr Gordão",
      situacao: "realizado",
      imagem: require("../../assets/images/Lindo.jpeg"),
    },
    {
      id: 6,
      nome: "Dr GabrielAS",
      situacao: "realizado",
      imagem: require("../../assets/images/Gabrielo.jpeg"),
    },
  ];

  return (
    <Container>
      {/* Header */}
      <HeaderConsult
        user={pacienteUser.find((element) => element.nome)}
        imagem={pacienteUser.find((element) => element.imagem)}
      />

      {/* Calendario */}
      <CalendarList />

      {/* Navegação dos botoes "Agendadas" "Realizados e "Cancelas"" */}
      <ButtonsContainer>
        <AbsTabsStyle
          textButton={"agendadas"}
          clickButton={statusListaMedicos == "pendente"}
          onPress={() => {
            setStatusListaMedicos("pendente");
          }}
        />
        <AbsTabsStyle
          textButton={"realizadas"}
          clickButton={statusListaMedicos == "realizado"}
          onPress={() => {
            setStatusListaMedicos("realizado");
          }}
        />
        <AbsTabsStyle
          textButton={"canceladas"}
          clickButton={statusListaMedicos == "cancelado"}
          onPress={() => {
            setStatusListaMedicos("cancelado");
          }}
        />
      </ButtonsContainer>

      {/* Sessao de Cards de médicos */}
      <ListComponents
        data={medicos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          statusListaMedicos === item.situacao ? (
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

      {/* Botão que ao clicar abre modal de agendar consulta */}

      <ButtonDocEquipament
      onPressConsult={() => setShowModalConsult(true)}

      //chamando a prop icon e passando como parametro a imagem guardada na variavel iconButton
      icon={iconButton}
      />


      <ConsultModal
        visible={showModalConsult}
        setShowModalConsult={setShowModalConsult}
      />

      

      <CancellationModal
        visible={showModalCancel}
        setShowModalCancel={setShowModalCancel}
      />

      <AppointmentModal
        visible={showModalOpenAppoitment}
        setShowModalAppointment={setShowModalAppointment}
      />
    </Container>
  );
};
