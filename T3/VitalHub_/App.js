import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { Navegacao } from "./src/screens/Navegacao/Navegacao";
import { Login } from "./src/screens/Login/Login";

import {
  useFonts,
  MontserratAlternates_500Medium,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_700Bold,
} from "@expo-google-fonts/montserrat-alternates";
import {
  Quicksand_500Medium,
  Quicksand_600SemiBold,
} from "@expo-google-fonts/quicksand";

import { Cadastro } from "./src/screens/Cadastro/Cadastro";
import { ConsultasPaciente } from "./src/screens/ConsultasPacientes/ConsultasPaciente";
import { EsqueceuSenha } from "./src/screens/EsqueceuSenha/EsqueceuSenha";
import { LocalConsulta } from "./src/screens/LocalConsulta/LocalConsulta";
import { MedicoProntuario } from "./src/screens/MedicoProntuario/MedicoProntuario";
import { PacientePerfil } from "./src/screens/PacientePerfil/PacientePerfil";
import { RedefinirSenha } from "./src/screens/RedefinirSenha/RedefinirSenha";
import { SelecionarClinica } from "./src/screens/SelecionarClinica/SelecionarClinica";
import { SelecionarData } from "./src/screens/SelecionarData/SelecionarData";
import { SelecionarMedico } from "./src/screens/SelecionarMedico/SelecionarMedico";
import { VerProntuario } from "./src/screens/VerProntuario/VerProntuario";
import { VerificarEmail } from "./src/screens/VerificarEmail/VerificarEmail";
import { ConsultasDoutor } from "./src/screens/ConsultasDoutor/ConsultasDoutor";
import { Main } from "./src/screens/Main/Main";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    //Container - envolve toda a estrutura de navegação
    //Navigator - componente para a navegação
    //Screen - tela
    //name: nome da tela
    //component: componente que será chamado
    //options(title): título da tela

    <NavigationContainer>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />

        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "Main" }}
        />
        {/* <Stack.Screen
          name="Navegação"
          component={Navegacao}
          options={{ title: "Navegação" }}
        /> */}

        <Stack.Screen
          name="Esqueceu Senha"
          component={EsqueceuSenha}
          options={{ title: "Esqueceu Senha" }}
        />

        <Stack.Screen
          name="Verificar Email"
          component={VerificarEmail}
          options={{ title: "Verificar Email" }}
        />

        <Stack.Screen
          name="Redefinir Senha"
          component={RedefinirSenha}
          options={{ title: "Redefinir Senha" }}
        />

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: "Cadastro" }}
        />

        <Stack.Screen
          name="Paciente Perfil"
          component={PacientePerfil}
          options={{ title: "Paciente Perfil" }}
        />

        <Stack.Screen
          name="Medico Prontuario"
          component={MedicoProntuario}
          options={{ title: "Medico Prontuario" }}
        />

        <Stack.Screen
          name="Consultas Medico"
          component={ConsultasDoutor}
          options={{ title: "Consultas Medico" }}
        />

        <Stack.Screen
          name="Consultas Paciente"
          component={ConsultasPaciente}
          options={{ title: "Consultas Paciente" }}
        />

        <Stack.Screen
          name="Selecionar Medico"
          component={SelecionarMedico}
          options={{ title: "Selecionar Medico" }}
        />

        <Stack.Screen
          name="Selecionar Clinica"
          component={SelecionarClinica}
          options={{ title: "Selecionar Clinica" }}
        />
        <Stack.Screen
          name="Selecionar Data"
          component={SelecionarData}
          options={{ title: "Selecionar Data" }}
        />
        <Stack.Screen
          name="Local Consulta"
          component={LocalConsulta}
          options={{ title: "Local Consulta" }}
        />
        <Stack.Screen
          name="Ver Prontuario"
          component={VerProntuario}
          options={{ title: "Ver Prontuario" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
