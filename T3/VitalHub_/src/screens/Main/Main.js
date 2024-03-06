import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ConsultasPaciente } from "../ConsultasPacientes/ConsultasPaciente";
import { PacientePerfil } from "../PacientePerfil/PacientePerfil";
import { ContentIcon, TextIcon } from "./StyleMain";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export const Main = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#ffffff",
          height: 80,
          paddingTop: 10,
        },
        // Cor de fundo ativa
        tabBarActiveBackgroundColor: {
          backgroundColor: "transparent",
        },
        tabBarShowLabel: false,
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={
                  focused ? "#ECF2FF" : "transparent"
                }
              >
                <FontAwesome name="calendar" size={18} color="#4E4B59" />
                {focused && <TextIcon>Agenda</TextIcon>}
              </ContentIcon>
            );
          } else {
            // Se a rota ativa não for a "Home", o ícone será o código retornado abaixo
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={
                  focused ? "#ECF2FF" : "transparent"
                }
              >
                <FontAwesome5 name="user-circle" size={18} color="4E4B59" />
                {focused && <TextIcon>Perfil</TextIcon>}
              </ContentIcon>
            );
          }
        },
      })}
    >
      <BottomTab.Screen name="Home" component={ConsultasPaciente} />

      <BottomTab.Screen name="Perfil" component={PacientePerfil} />
    </BottomTab.Navigator>
  );
};
