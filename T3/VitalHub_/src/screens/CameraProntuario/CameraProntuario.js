import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useEffect, useState, useRef } from "react";
import * as MediaLibary from "expo-media-library";

import { FontAwesome } from "@expo/vector-icons";

import { LinkBlue } from "../../components/Link/Style"

export default function CameraProntuario({ navigation }) {
  const cameraRef = useRef(null);

  const [photo, setPhoto] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  const [tipoCamera, setTipoCamera] = useState(CameraType.front);

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();

      const { status: mediaLibary } =
        await MediaLibary.requestPermissionsAsync();
    })();
  }, []);

  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();

      setPhoto(photo.uri);

      setOpenModal(true);

      console.log(photo);
    }
  }

  function ClearPhoto() {
    setPhoto(null);

    setOpenModal(false);
  }

  async function UploadPhoto() {
    // await MediaLibary.createAssetAsync(photo)
    //   .then(() => {
    //     alert('Foto salva com Sucesso!')
    //   }).catch(error => {
    //     alert.apply('Não foi possivel processar a foto')
    //   })

    console.log(photo);
    navigation.navigate("Prescricao", { photoUri: photo });
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={tipoCamera}
        // ratio='16:9'
      >
        <View style={styles.viewFlip}>
          <TouchableOpacity
            style={styles.btnFlip}
            onPress={() => {
              setTipoCamera(
                tipoCamera == CameraType.front
                  ? CameraType.back
                  : CameraType.front
              );
            }}
          >
            <Text style={styles.txtFlip}>Trocar</Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity
        style={styles.btnCapture}
        onPress={() => {
          CapturePhoto();
        }}
      >
        <FontAwesome name="camera" size={18} color="#fff" />
      </TouchableOpacity>

      <LinkBlue onPress={() => navigation.replace("Prescricao")}>
        Cancelar
      </LinkBlue>

      <Modal animationType="slide" transparent={false} visible={openModal}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
          }}
        >
          <View style={{ margin: 10, flexDirection: "row", gap: 20 }}>
            {/* Botoes de controle */}
            <TouchableOpacity
              style={styles.btnClear}
              onPress={() => {
                ClearPhoto();
              }}
            >
              <FontAwesome name="trash" size={35} color="#ff000" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnUpload}
              onPress={() => {
                UploadPhoto();
              }}
            >
              <FontAwesome name="upload" size={35} color="#121212" />
            </TouchableOpacity>
          </View>

          <Image
            style={{ width: "100%", height: 500, borderRadius: 15 }}
            source={{ uri: photo }}
          />
        </View>
      </Modal>
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

  camera: {
    flex: 1,
    heigth: "80%",
    width: "100%",
  },

  viewFlip: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },

  btnFlip: {
    padding: 20,
  },

  txtFlip: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
  },

  btnCapture: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
    backgroundColor: "#121212",

    justifyContent: "center",
    alignItems: "center",
  },

  btnClear: {
    padding: 20,
    backgroundColor: "transparent",

    justifyContent: "center",
    alignItems: "center",
  },

  btnUpload: {
    padding: 20,
    backgroundColor: "transparent",

    justifyContent: "center",
    alignItems: "center",
  },
});
