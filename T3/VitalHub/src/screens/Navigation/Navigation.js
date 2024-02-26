import { Button, View } from "react-native";

export const Navigation = ({ navigation }) => {
  return (
    <View>
      <Button
        //titulo da tela que será chamado no navigation
        title={"Login"}
        //ao clique do botão será chamado a função
        onPress={() => navigation.navigate("Login")}
      />

      <Button
        title={"Recuperar Senha"}
        onPress={() => navigation.navigate("Recuperar Senha")}
      />

      <Button
        title={"Verificar Email"}
        onPress={() => navigation.navigate("Verificar Email")}
      />

      <Button
        title={"Redefinir Senha"}
        onPress={() => navigation.navigate("Redefinir Senha")}
      />

      <Button
        title={"Cadastro"}
        onPress={() => navigation.navigate("Cadastro")}
      />

      <Button
        title={"Medico Consultas"}
        onPress={() => navigation.navigate("Medico Consultas")}
      />

      <Button
        title={"Perfil Usuario"}
        onPress={() => navigation.navigate("Perfil Usuario")}
      />

      <Button
        title={"Médico Prontuário"}
        onPress={() => navigation.navigate("Médico Prontuário")}
      />

      <Button
        title={"Consultas Paciente"}
        onPress={() => navigation.navigate("Consultas Paciente")}
      />



    </View>
  );
};
