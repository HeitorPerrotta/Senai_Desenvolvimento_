import { FlatList, StatusBar } from "react-native";
import {
  BoxDataHome,
  BoxHome,
  ButtonHomeContainer,
  Container,
  FlatContainer,
  MoveIconBell,
  MoveIconstethoscope,
  ScrollContainer,
} from "../../components/Container/StyleContainer";
import { Header } from "../../components/Header/StyledHeader";
import { ImagemHome } from "../../components/Images/StyleImages";
import { NameTitle, WelcomeTitle } from "../../components/Title/Title";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Calendar from "../../components/Calendar/Calendar";

import { FilterButton } from "../../components/Button/Button";
import { useState } from "react";
import { Card, CardPatient } from "../../components/Cards/Cards";
import { CancellationModal } from "../../components/CancellationModal/CancellationModal";
import { CardCancelLess } from "../../components/Descriptions/Descriptions";
import { AppointmentModal } from "../../components/AppointmentModal/AppointmentModal";
import { ScheduleModal } from "../../components/ScheduleModal/ScheduleModal";
import { PatientAppointmentModal } from "../../components/PatientAppointmentModal/PatientAppointmentModal";

export const ConsultasPaciente = ({ navigation }) => {
  
  const [selected, setSelected] = useState({
    agendadas: true,
    realizadas: false,
    canceladas: false,
  });

  const [showModelCancel, setShowModelCancel] = useState(false);
  const [showModelAppointment, setShowModelAppointment] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalPatient, setShowModalPatient] = useState(false);

  const image = require("../../assets/Chezzy.jpeg");

  // CARD MOCADOS

  const dataItens = [
    {
      id: 1,
      hour: "14:00",
      image: image,
      name: "Dr.???",
      age: "22 anos",
      routine: "Rotina",
      status: "r",
    },
    {
      id: 2,
      hour: "15:00",
      image: image,
      name: "Dr.Chezzy",
      age: "28 anos",
      routine: "Urgência",
      status: "a",
    },
    {
      id: 3,
      hour: "17:00",
      image: image,
      name: "Dr.Vini",
      age: "28 anos",
      routine: "Rotina",
      status: "c",
    },
    {
      id: 4,
      hour: "14:00",
      image: image,
      name: "Dr. Glutão",
      age: "22 anos",
      routine: "Rotina",
      status: "r",
    },
  ];

  //FILTRO PARA CARD

  const Check = (data) => {
    if (data.status === "a" && selected.agendadas) {
      return true;
    }
    if (data.status === "r" && selected.realizadas) {
      return true;
    }
    if (data.status === "c" && selected.canceladas) {
      return true;
    }
    return false;
  };

  const data = dataItens.filter(Check);

  // MODAL STATE PARA SETAR SE ESTA ABERTO

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // console.log(isModalOpen);
  // const openModal = () => {
  //     setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //     setIsModalOpen(false);
  // };;

  // RETURN

  return (
    <Container>
      <Header>
        <StatusBar translucent backgroundColor="transparent" />

        <BoxHome>
          <ImagemHome source={require("../../assets/Patient.png")} />

          <BoxDataHome>
            <WelcomeTitle textTitle={"Bem vindo"} />

            <NameTitle textTitle={"Richard Kosta"} />
          </BoxDataHome>
        </BoxHome>

        <MoveIconBell>
          <Ionicons name="notifications" size={25} color="white" />
        </MoveIconBell>
      </Header>

      <Calendar />

      <ButtonHomeContainer>
        <FilterButton
          onPress={() => {
            setSelected({ agendadas: true });
          }}
          selected={selected.agendadas}
          text={"Agendadas"}
        />

        <FilterButton
          onPress={() => {
            setSelected({ realizadas: true });
          }}
          selected={selected.realizadas}
          text={"Realizadas"}
        />

        <FilterButton
          onPress={() => {
            setSelected({ canceladas: true });
          }}
          selected={selected.canceladas}
          text={"Canceladas"}
        />
      </ButtonHomeContainer>

      <FlatContainer
        data={data}
        renderItem={({ item }) => (
          <Card
            hour={item.hour}
            name={item.name}
            age={item.age}
            routine={item.routine}
            url={image}
            status={item.status}
            onPressCancel={() => setShowModelCancel(true)}
            onPressAppointment={() => setShowModelAppointment(true)}
            onPressCard={() => setShowModalPatient(true)}
            navigation={navigation}
            
          />
        )}
        keyExtractor={(item) => item.id}
      />

      <MoveIconstethoscope onPress={() => setShowModal(true)}>
        <FontAwesome5 name="stethoscope" size={28} color="white" />
      </MoveIconstethoscope>

      <CancellationModal
        visible={showModelCancel}
        setShowModalCancel={setShowModelCancel}
      />

      <AppointmentModal
        // navigation={navigation}
        visible={showModelAppointment}
        setShowModelAppointment={setShowModelAppointment}
        // setShowModalCancel={setShowModelCancel}
      />

      <ScheduleModal
        visible={showModal}
        setShowModal={setShowModal}
        navigation={navigation}
      />

      <PatientAppointmentModal
        navigation={navigation}
        visible={showModalPatient}
        setShowModalAppointment={setShowModalPatient}
      />

      {/* <Card url={require('../../assets/ImageCard.png')} name={"Niccole Sarge"} age={"22 anos"} routine={"Rotina"} hour={"14:00"}/>

                <Card url={require('../../assets/ImageCardMale.png')} name={"Richard Kosta"} age={"28 anos"} routine={"Urgência"} hour={"15:00"}/>

                <Card url={require('../../assets/chezzy.jpeg')} name={"Chezzy Jr"} age={"33 anos"} routine={"Rotina"} hour={"17:00"}/> */}
    </Container>
  );
};

// onPress={() => { navigation.navigate("SelectDate") }}