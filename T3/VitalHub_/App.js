import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import {
  MontserratAlternates_500Medium,
  MontserratAlternates_700Bold,
  MontserratAlternates_600SemiBold,
} from "@expo-google-fonts/montserrat-alternates";
import {
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Navegacao } from "./src/screens/Navegacao/Navegacao";
import { Login } from "./src/screens/Login/Login";
import { EsqueceuSenha } from "./src/screens/EsqueceuSenha/EsqueceuSenha";
import { VerifiqueEmail } from "./src/screens/VerifiqueEmail/VerifiqueEmail";
import { RedefinirSenha } from "./src/screens/RedefinirSenha/RedefinirSenha";
import { Cadastro } from "./src/screens/Cadastro/Cadastro";
import { Perfil } from "./src/screens/Perfil/Perfil";
import { Prontuario } from "./src/screens/Prontuario/Prontuario";
import { SelecionarMedico } from "./src/screens/SelecionarMedico/SelecionarMedico";
import { CalendarioPaciente } from "./src/screens/Calendario/Calendario";
import { LocalConsulta } from "./src/screens/LocalConsulta/LocalConsulta";
import { Prescricao } from "./src/screens/Prescricao/Prescricao";
import { ConsultasMedico } from "./src/screens/ConsultasMedico/ConsultasMedico";
import { SelecionarClinica } from "./src/screens/SelecionarClinica/SelecionarClinica";
import { PacienteConsulta } from "./src/screens/ConsultasPaciente/ConsultasPaciente";
import { Main } from "./src/screens/Main/Main";
import CameraProntuario from "./src/screens/CameraProntuario/CameraProntuario";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_700Bold,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />

        {/* <Stack.Screen
              name='Navegacao'
              component={Navegacao}
              options={{ title: "Navegação" }}
            /> */}

        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "Main" }}
        />

        <Stack.Screen
          name="EsqueceuSenha"
          component={EsqueceuSenha}
          options={{ title: "Esqueci a senha" }}
        />
        <Stack.Screen
          name="VerifiqueEmail"
          component={VerifiqueEmail}
          options={{ title: "Verifique seu Email" }}
        />
        <Stack.Screen
          name="RedefinirSenha"
          component={RedefinirSenha}
          options={{ title: "Redefinir Senha" }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: "Cadastro" }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ title: "Perfil" }}
        />
        <Stack.Screen
          name="Prontuario"
          component={Prontuario}
          options={{ title: "Prontuário" }}
        />
        <Stack.Screen
          name="ConsultasMedico"
          component={ConsultasMedico}
          options={{ title: "Consultas Medico" }}
        />
        <Stack.Screen
          name="ConsultasPaciente"
          component={PacienteConsulta}
          options={{ title: "Consultas Paciente" }}
        />
        <Stack.Screen
          name="SelecionarClinica"
          component={SelecionarClinica}
          options={{ title: "Selecionar Clínica" }}
        />
        <Stack.Screen
          name="SelecionarMedico"
          component={SelecionarMedico}
          options={{ title: "Selecionar Medico" }}
        />
        <Stack.Screen
          name="Calendario"
          component={CalendarioPaciente}
          options={{ title: "Calendário" }}
        />
        <Stack.Screen
          name="Local Consulta"
          component={LocalConsulta}
          options={{ title: "Local Consulta" }}
        />
        <Stack.Screen
          name="Prescricao"
          component={Prescricao}
          options={{ title: "Prescrição" }}
        />
        <Stack.Screen
          name="Camera"
          component={CameraProntuario}
          options={{ title: "Camera" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
