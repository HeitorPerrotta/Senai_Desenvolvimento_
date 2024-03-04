import { StatusBar } from "react-native";
import {
  Container,
  FlatContainerSelect,
  ScrollContainer,
} from "../../components/Container/StyleContainer";
import { TitleSelect } from "../../components/Title/StyleTitle";
import { CardSelectDoctor } from "../../components/Cards/Cards";
import { ButtonLarge, ButtonLargeSelect } from "../../components/Button/Button";
import { CancelLessMargin } from "../../components/Descriptions/StyledDescriptions";
import { useState } from "react";
import { ScheduleModal } from "../../components/ScheduleModal/ScheduleModal";
import { PatientAppointmentModal } from "../../components/PatientAppointmentModal/PatientAppointmentModal";

// const [showModalCancel, setShowModalCancel] = useState(false);

// const [showModal, setShowModal] = useState(false);

export const SelecionarMedico = ({navigation}) => {
  const image = require("../../assets/ImageCard.png");

  const dataItens = [
    {
      id: "fsdfsfsdf",
      doctorArea: "Dermatóloga, Esteticista",
      image: image,
      name: "Dr Alessandra",
    },
    {
      id: "fsdfsf",
      doctorArea: "Cirurgião, Cardiologista",
      image: image,
      name: "Dr Kumushiro",
    },
    {
      id: "fsdf",
      doctorArea: "Clínico, Pediatra",
      image: image,
      name: "Dr Rodrigo Santos",
    },
  ];

  return (
    <ScrollContainer>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <Container>
        <TitleSelect>Selecionar Médico</TitleSelect>

        <FlatContainerSelect
          data={dataItens}
          renderItem={({ item }) => (
            <CardSelectDoctor
              doctorArea={item.doctorArea}
              name={item.name}
              url={image}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        {/* 
                <CardSelectDoctor doctorArea={'Dermatóloga, Esteticista'} url={require('../../assets/DermaImage.png')} name={'Dr Alessandra'}/>

                <CardSelectDoctor doctorArea={'Cirurgião, Cardiologista'} url={require('../../assets/DermaImage.png')} name={'Dr Kumushiro'}/>

                <CardSelectDoctor doctorArea={'Clínico, Pediatra'} url={require('../../assets/DermaImage.png')} name={'Dr Rodrigo Santos'}/> */}

        <ButtonLargeSelect  onPress={() => { navigation.navigate("SelectDate") }} text={"Continuar"} />

        <CancelLessMargin>Cancelar</CancelLessMargin>

        {/* <ScheduleModal visible={showModal} setShowModal={setShowModal} /> */}

        {/* <PatientAppointmentModal
          visible={showModalAppointment}
          setShowModalAppointment={setShowModalAppointment}
        /> */}

        {/* <CancellationModal
          visible={showModalCancel}
          setShowModalCancel={setShowModalCancel}
        /> */}
      </Container>
    </ScrollContainer>
  );
};
