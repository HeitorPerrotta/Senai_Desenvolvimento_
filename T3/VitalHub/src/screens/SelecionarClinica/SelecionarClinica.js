import { ButtonSecundary, ButtonSecundaryText, ButtonTitle, ModalButton } from "../../components/Button/Style";
import { ClinicaCard } from "../../components/ClinicaCard/Index";
import { ListagemClinica } from "../../components/ClinicaCard/Style";
import { ClinicContent, ClinicaContainer } from "../../components/Container/style";
import { TitleBold } from "../../components/Title/style";

export const Seleciona = [
  {
    id: 1,
    nome: "Clinica",
    name: "Clínica em Pediatria Dr. Gabriel Henrique",
    rated: "5.0",
    time: "Seg-Sab",
    city: "São Paulo, SP",
    border: "#496BBA",
  },

  {
    id: 2,
    nome: "Clinica",
    name: "Gravidez Psicológica - Tratamentos Neurológicos",
    rated: "4.8",
    time: "Seg-Sex",
    border: "transparent",
    city: "São Paulo, SP",
    border: "transparent",
  },

  {
    id: 3,
    nome: "Clinica",
    name: "QuiroCatarina - Clinica especializada em QuiroPraxia",
    rated: "1.2",
    time: "Seg-Quinta",
    border: "transparent",
    city: "São Caetanos, SP",
    border: "transparent",
  },

  {
    id: 4,
    nome: "Clinica",
    name: "Depilaser - Dr. Thiago",
    rated: "4.2",
    time: "Seg-Sab",
    border: "transparent",
    city: "Jardim Elba, SP",
    border: "transparent",
  },
];

export const SelecionarClinica = () => {
  return (
    <ClinicaContainer>
      <ClinicContent>
        <TitleBold>Selecionar clínica</TitleBold>
        <ListagemClinica
          data={Seleciona}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ClinicaCard
              border={item.border}
              name={item.name}
              rated={item.rated}
              time={item.time}
              city={item.city}
            />
          )}
        />
        {/* Botão */}
        <ModalButton>
          <ButtonTitle>Continuar</ButtonTitle>
        </ModalButton>

        <ButtonSecundary>
          <ButtonSecundaryText>Cancelar</ButtonSecundaryText>
        </ButtonSecundary>
      </ClinicContent>
    </ClinicaContainer>
  );
};
