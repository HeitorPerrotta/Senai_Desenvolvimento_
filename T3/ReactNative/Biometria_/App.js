import { StatusBar } from "expo-status-bar";
import {
  Alert,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

//importar os recursos do expo-local-authentication
import * as LocalAuthentication from "expo-local-authentication";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

import moment from "moment";

export default function App() {
  const [dateHistory, setDateHistory] = useState({});
  const [authenticated, setAuthenticated] = useState(false); //variável para armazenar o estado de autenticação
  //Salvar a referência de suporte a biometria
  const [isBiometrySupported, setIsBiometrySupported] = useState(false);

  //Função para verificar se existe biometria no aparelho
  async function CheckExistAuthentications() {
    const compatible = await LocalAuthentication.hasHardwareAsync();

    //salvando o status de compatibilidade com a biometria
    setIsBiometrySupported(compatible);
  }

  async function SetHistory() {
    const objAuth = {
      dataAuthentication: moment().format("DD/MM/YYYY HH:mm:ss"),
    };

    await AsyncStorage.setItem("authenticate", JSON.stringify(objAuth));

    setDateHistory(objAuth);
  }

  async function GetHistory() {
    const objAuth = await AsyncStorage.getItem("authenticate");

    if (objAuth) {
      setDateHistory(JSON.parse(objAuth));
    }
  }

  async function handleAuthentication() {
    //verificar se existe uma biometria cadastrada
    const biometricExist = await LocalAuthentication.isEnrolledAsync();

    //validar a existência
    if (!biometricExist) {
      return Alert.alert(
        "Falha ao logar",
        "Não foi encontrado nenhuma biometria cadastrada"
      );
    }

    //caso exista ->
    const auth = await LocalAuthentication.authenticateAsync();

    setAuthenticated(auth.success);

    if (auth.success) {
      SetHistory();
    }
  }

  useEffect(() => {
    CheckExistAuthentications();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isBiometrySupported
          ? "Seu dipositivo é compatível com a biometria"
          : "O seu dispositivo não suporta biometria / Face Id"}
      </Text>

      <TouchableOpacity
        style={styles.btnAuth}
        onPress={() => handleAuthentication()}
      >
        <Text style={styles.txtAuth}>Autenticar Acesso</Text>
      </TouchableOpacity>

      <Text
        style={[styles.txtReturn, { color: authenticated ? "green" : "red" }]}
      >
        {authenticated ? "Autenticado" : "Não autenticado"}
      </Text>

      {dateHistory.dataAuthentication ? (
        <Text style={styles.txtHistory}>
          último acesso em {dateHistory.dataAuthentication}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    width: "70%",
    textAlign: "center",
    lineHeight: 30,
  },

  btnAuth: {
    padding: 16,
    borderRadius: 10,
    margin: 20,
    backgroundColor: "#da1554",
  },

  txtAuth: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  txtReturn: {
    fontSize: 22,
    marginTop: 50,
  },
  txtHistory: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#bababa",
    position: "absolute",
    bottom: 120,
  },
});
