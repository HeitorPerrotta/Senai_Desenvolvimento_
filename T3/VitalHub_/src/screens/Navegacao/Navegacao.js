import { Button, View } from "react-native";

export const Navegacao = ({ navigation }) => {
  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button
        title="Esqueceu Senha"
        onPress={() => navigation.navigate("Esqueceu Senha")}
      />
      <Button
        title="Verificar Email"
        onPress={() => navigation.navigate("Verificar Email")}
      />
      <Button
        title="Redefinir Senha"
        onPress={() => navigation.navigate("Redefinir Senha")}
      />
      <Button
        title="Cadastro"
        onPress={() => navigation.navigate("Cadastro")}
      />
      <Button
        title="Paciente Perfil"
        onPress={() => navigation.navigate("Paciente Perfil")}
      />
      <Button
        title="Medico Prontuario"
        onPress={() => navigation.navigate("Medico Prontuario")}
      />
      <Button
        title="Consultas Medico"
        onPress={() => navigation.navigate("Consultas Medico")}
      />
      <Button
        title="Consultas Paciente"
        onPress={() => navigation.navigate("Consultas Paciente")}
      />

      <Button
        title="Selecionar Medico"
        onPress={() => navigation.navigate("Selecionar Medico")}
      />

      <Button
        title="Selecionar Clinica"
        onPress={() => navigation.navigate("Selecionar Clinica")}
      />
      <Button
        title="Selecionar Data"
        onPress={() => navigation.navigate("Selecionar Data")}
      />
      <Button
        title="Local Consulta"
        onPress={() => navigation.navigate("Local Consulta")}
      />

      <Button
        title="Ver Prontuario"
        onPress={() => navigation.navigate("Ver Prontuario")}
      />
    </View>
  );
};
