import { useState } from "react";
import { Container, FilterAppointment } from "../../Components/Container/Style";
import { BtnListAppointment } from "../../Components/BtnListAppointment/Index";
import { HeaderContainer } from "../../Components/Header/Index";
import { AppointmentCard } from "../../Components/AppointmentCard/Index";
import { ListComponent } from "../../Components/List/Style";
import { CancelModal } from "../../Components/CancellationModal/Index";
import CalendarList from "../../Components/Calendar/CalendarHome";
import { AppointmentModal } from "../../Components/AppointmentModal/Index";

const Consultas = [
  { id: 1, nome: "Carlos", situacao: "pendente" },
  { id: 2, nome: "Carlos", situacao: "realizado" },
  { id: 3, nome: "Carlos", situacao: "cancelado" },
  { id: 4, nome: "Carlos", situacao: "realizado" },
  { id: 5, nome: "Carlos", situacao: "cancelado" },
];

export const ConsultasPaciente = () => {
  const [statusLista, setStatusLista] = useState("pendente");

  const [showModalCancel, setShowModalCancel] = useState(false);
  const [showModalAppointment, setShowModalAppointment] = useState(false);
  return (
    <Container>
      <HeaderContainer />

      {/* Calendario */}
      <CalendarList />

      {/* Botoes */}
      <FilterAppointment>
        {/* Botao Agendadas */}
        <BtnListAppointment
          textButton={"Agendadas"}
          clickButton={statusLista === "pendente"}
          onPress={() => setStatusLista("pendente")}
        />

        {/* Botao Realizadas */}
        <BtnListAppointment
          textButton={"Realizadas"}
          clickButton={statusLista === "realizado"}
          onPress={() => setStatusLista("realizado")}
        />

        {/* Botao Canceladas */}
        <BtnListAppointment
          textButton={"Canceladas"}
          clickButton={statusLista === "cancelado"}
          onPress={() => setStatusLista("cancelado")}
        />
      </FilterAppointment>

      {/* Lista */}
      <ListComponent
        data={Consultas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          statusLista == item.situacao && (
            <AppointmentCard
              situacao={item.situacao}
              onPressCancel={() => setShowModalCancel(true)}
              onPressAppointment={() => setShowModalAppointment(true)}
            />
          )
        }
        showsVerticalScrollIndicator={false}
      />

      {/* modal de cancelar */}

      <CancelModal
        visible={showModalCancel}
        setShowModalCancel
        ={setShowModalCancel}
      />

      <AppointmentModal
        visible={showModalAppointment}
        setShowModalAppointment={setShowModalAppointment}
      />
    </Container>
  );
};
