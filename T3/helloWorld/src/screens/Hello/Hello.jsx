import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";


export default function Hello({backLoginPage}) {

  return (


    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../assets/images/KANYE.jpg")}
      />

      <Text style={styles.text}>Graduation Day</Text>

      <TextInput placeholder="Coloque aqui seu album" style={styles.input} />
      <View style={styles.flexButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>I Decide when i'm finish</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={backLoginPage} style={styles.buttonExit}>
          <Text style={styles.textExit}>Back</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    color: "blue",
  },
  text: {
    color: "yellowgreen",
    fontSize: 24,
    // fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    backgroundColor: "gray",
    borderColor: "yellowgreen",
    paddingLeft: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  img: {
    width: "35%",
    height: 150,
    borderRadius: 50,
  },
  button: {
    width: "50%",
    height: 45,
    backgroundColor: "gray",
    borderWidth: 1,
    borderColor: "yellowgreen",
    marginTop: 30,
    borderRadius: 8,
    justifyContent: "center",
  },
  textButton: {
    color: "yellowgreen",
    alignSelf: "center",
  },
  buttonExit: {
    width: "50%",
    height: 45,
    backgroundColor: "gray",
    borderWidth: 1,
    borderColor: "yellowgreen",
    marginTop: 30,
    borderRadius: 8,
    justifyContent: "center",
  },
  textExit: {
    color: "yellowgreen",
    alignSelf: "center",
  },
  flexButton: {
    flexDirection: 'row',
    gap: 30
  }
});
