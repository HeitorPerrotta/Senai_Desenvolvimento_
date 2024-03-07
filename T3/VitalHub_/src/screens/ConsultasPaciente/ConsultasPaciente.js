import { HeaderPaciente } from "../../components/Header/HeaderPaciente/HeaderPaciente";
import { ListComponent } from "../../components/Lista/Lista";
import { CardPaciente } from "../../components/Cards/CardPaciente/CardPaciente";
import { ModalConsulta } from "../../components/Modals/ModalConsulta/ModalConsulta";
import { CardModalPaciente } from "../../components/Modals/ModalCard/ModalCard";
import { useState } from "react";
import { ButtonMedical } from "../../components/Button/Style";
import { FontAwesome6 } from "@expo/vector-icons";
import CalendarList from "../../components/Calendario/Index";
import {
  ContainerButton,
  ContainerConsulta,
  ContainerMedico,
} from "../../components/Container/Style";
import { ButtonCadastroM } from "../../components/Button/ButtonCadastro/ButtonCadastro";

const ConsultasPaciente = [
  { id: 1, nome: "Richard", situacao: "pendente" },
  { id: 2, nome: "Richard", situacao: "realizado" },
  { id: 3, nome: "Richard", situacao: "cancelado" },
];

export const PacienteConsulta = ({ navigation }) => {
  const [showModalAppointment, setShowModalAppointment] = useState(false);
  const [showModalConsult, setShowModalConsult] = useState(false);
  const [statusListaPaciente, setStatusListaPaciente] = useState("pendente");
  const [statusModal, setStatusModal] = useState("");

  return (
    <ContainerConsulta>
      {/* Header */}
      <HeaderPaciente />

      {/* Calendário */}
      <CalendarList />

      {/* Botões */}
      <ContainerButton>
        <ButtonCadastroM
          textButton={"Agendadas"}
          clickButton={statusListaPaciente === "pendente"}
          onPress={() => setStatusListaPaciente("pendente")}
        />
        <ButtonCadastroM
          textButton={"Realizadas"}
          clickButton={statusListaPaciente === "realizado"}
          onPress={() => setStatusListaPaciente("realizado")}
        />
        <ButtonCadastroM
          textButton={"Canceladas"}
          clickButton={statusListaPaciente === "cancelado"}
          onPress={() => setStatusListaPaciente("cancelado")}
        />
      </ContainerButton>

      {/* FlatList */}
      <ListComponent
        data={ConsultasPaciente}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          statusListaPaciente == item.situacao && (
            <CardPaciente
              onPressImage={() => setShowModalAppointment(true)}
              source={require("../../../src/assets/img/ImageDoctor.png")}
              name={"Dr. Chezzy"}
              age={"30 anos"}
              type={"Rotina"}
              time={"14:00"}
              situacao={item.situacao}
              navigation={navigation}
              onConnectAppointment={() => setShowModalAppointment(true)}
            />
          )
        }
      />

      <ContainerMedico>
        <ButtonMedical onPress={() => setShowModalConsult(true)}>
          <FontAwesome6 name="stethoscope" size={28} color="#FBFBFB" />
        </ButtonMedical>
      </ContainerMedico>

      <ModalConsulta
        navigation={navigation}
        visible={showModalConsult}
        setShowModalConsult={setShowModalConsult}
        setStatusModal={setStatusModal}
        statusModal={statusModal}
      />

      <CardModalPaciente
        navigation={navigation}
        visible={showModalAppointment}
        setShowModalAppointment={setShowModalAppointment}
      />
    </ContainerConsulta>
  );
};
