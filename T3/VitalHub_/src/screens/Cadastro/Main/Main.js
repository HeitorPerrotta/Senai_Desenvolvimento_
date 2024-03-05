import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ConsultasPaciente } from "../../screens/ConsultasPacientes/ConsultasPaciente";
import { PacientePerfil } from "../../screens/PacientePerfil/PacientePerfil";
import { ContentIcon, TextIcon } from "./StyleMain";

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export const Main = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Consultas Paciente"
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "#FFF", height: 80, paddingTop: 10 },
        tabBarActiveBackgroundColor: "transparent",
        tabBarShowLabel: false,
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          if (route.name === "Consultas Paciente") {
            return (
              <ContentIcon
                tabBarActiveBackgroundColor={
                  focused ? "#ECF2FF" : "transparent"
                }
              >
                <FontAwesome name="calendar" size={18} color="4E4B59" />
                {focused && <TextIcon>Agenda</TextIcon>}
              </ContentIcon>
            );
          } else {
            <ContentIcon
              tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
            >
              <FontAwesome5 name="user-circle" size={18} color="4E4B59" />
              {focused && <TextIcon>Perfil</TextIcon>}
            </ContentIcon>;
          }
        },
      })}
    >
      <BottomTab.Screen
        name="Consultas Paciente"
        component={ConsultasPaciente}
      />
      <BottomTab.Screen name="Paciente Perfil" component={PacientePerfil} />
    </BottomTab.Navigator>
  );
};
