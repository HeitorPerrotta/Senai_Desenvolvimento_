import RNPickerSelect from "react-native-picker-select";
import { StyleSheet } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { View } from "./style";

const InputSelect = () => {
  return (
    <View
      style={{
        width: 316,
        top: 45,
        right: 10,
        borderWidth: 2,
        borderColor: "#60BFC5",
        borderRadius: 5,
      }}
    >
      <RNPickerSelect
        style={style}
        Icon={() => {
          // return <MaterialIcons name="keyboard-arrow-down" size={22} color="#34898F" />
        }}
        placeholder={{
          label: "Selecionar horário",
          value: null,
          color: "#34898F",
        }}
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "JavaScript", value: "JavaScript" },
          { label: "TypeScript", value: "TypeScript" },
          { label: "Python", value: "Python" },
          { label: "Java", value: "Java" },
          { label: "C++", value: "C++" },
          { label: "C", value: "C" },
        ]}
      />
    </View>
  );
};

const style = StyleSheet.create({
  View: {
    borderWidth: 2,
    borderColor: "#000000",
  },
  inputIOS: {
    fontSize: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: "#60BFC5",
    borderRadius: 5,
    color: "#34898F",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "MontserratAlternates_600SemiBold",
  },
  inputAndroid: {
    fontSize: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: "#60BFC5",
    borderRadius: 5,
    color: "#34898F",
    alignItems: "center",
    justifyContent: "center",

    fontFamily: "MontserratAlternates_600SemiBold",
  },
  iconContainer: {
    top: "25%",
    marginRight: 10,
  },
  placeholder: {
    color: "#34898F",
  },
});

export default InputSelect;
