import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Navegacao } from "./src/Screen/Navigation/Navegacao";
import { Login } from "./src/Screen/Login/Login";
import {
  useFonts,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium,
  Quicksand,
  Quicksand_500Medium,
} from "@expo-google-fonts/montserrat-alternates";
import { RecuperarSenha } from "./src/Screen/Recuperar Senha/RecuperarSenha";
import { VerficarEmail } from "./src/Screen/Verificar Email/VerificarEmail";
import { RedefinirSenha } from "./src/Screen/Redefinir Senha/RedefinirSenha";
import { Cadastro } from "./src/Screen/Cadastro/Cadastro";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand,
    Quicksand_500Medium,
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navegacao"
          component={Navegacao}
          options={{ title: "Navegação" }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />

        <Stack.Screen
          name="Recuperar Senha"
          component={RecuperarSenha}
          options={{ title: "Recuperar Senha" }}
        />

        <Stack.Screen
          name="Verificar Email"
          component={VerficarEmail}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
