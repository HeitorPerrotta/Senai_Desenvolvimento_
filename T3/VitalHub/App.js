import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./src/screens/Login/Login";
import {
  useFonts,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium,
} from "@expo-google-fonts/montserrat-alternates";
import {
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_400Regular,
} from "@expo-google-fonts/quicksand";
import { LocalConsulta } from "./src/screens/LocalConsulta/LocalConsulta";
import { Navigation } from "./src/screens/Navigation/Navigation";
import { ConsultasMedico } from "./src/screens/ConsultasMedico/ConsultasMedico";
import { RecuperarSenha } from "./src/screens/RecuperarSenha/RecuperarSenha";
import { RedefinirSenha } from "./src/screens/RedefinirSenha/RedefinirSenha";
import { ConsultasPaciente } from "./src/screens/ConsultasPaciente/ConsultasPaciente";
import { MedicoProntuario } from "./src/screens/MedicoProntuario/MedicoProntuario";
import { PerfilUsuario } from "./src/screens/PerfilUsuario/PerfilUsuario";
import { Email } from "./src/screens/VerificarEmail/Email";
import { Cadastro } from  "./src/screens/Cadastro/Cadastro"

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_400Regular,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  const stack = createNativeStackNavigator();
  return (
    //container = NavigationContainer, container envolve toda estrutura de navegação
    //navigator = componente para navegação
    //screen(s) = tela(s)
    //name: nome da tela
    //component: componente que será chamado
    //options(title): titulo da tela
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Navegacao"
          component={Navigation} //componente Navegacao importado para ser usado aq
          options={{ title: "Navegação" }}
        />
        <stack.Screen
          name="Login"
          component={Login} //componente Login importado para ser usado aq
          options={{ title: "Login" }}
        />
        <stack.Screen
          name="Recuperar Senha"
          component={RecuperarSenha}
          options={{ title: "Recuperar senha" }}
        />

        <stack.Screen
          name="Verificar Email"
          component={Email}
          options={{ title: "Verificar Email" }}
        />

        <stack.Screen
          name="Redefinir Senha"
          component={RedefinirSenha}
          options={{ title: "Redefinir Senha" }}
        />

        <stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: "Criar Conta" }}
        />

        <stack.Screen
          name="Medico Consultas"
          component={ConsultasMedico}
          options={{ title: "Medico Consultas" }}
        />

        <stack.Screen
          name="Tela de Usuário"
          component={PerfilUsuario}
          options={{ title: "Tela de Usuário" }}
        />

        <stack.Screen
          name="Médico Prontuário"
          component={MedicoProntuario}
          options={{ title: "Médico Prontuário" }}
        />

        <stack.Screen
          name="Local da consulta"
          component={LocalConsulta}
          options={{ title: "Local da consulta" }}
        />

        <stack.Screen
          name="Consultas Paciente"
          component={ConsultasPaciente}
          options={{ title: "Consultas Paciente" }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
