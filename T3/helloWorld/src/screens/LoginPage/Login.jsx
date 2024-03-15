import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useFonts, BebasNeue_400Regular, Roboto_900Black, Inter_900Black } from '../../../node_modules/@expo-google-fonts/bebas-neue'
import Hello from '../Hello/Hello'


export default function Login() {
    const [changePage, setChangePage] = useState(false);
    let [fontsLoaded, fontError] = useFonts({
        BebasNeue_400Regular,
        Roboto_900Black,
        Inter_900Black,
    })

    function handlerChangePage () {
        setChangePage(true)
    };

    if (changePage) {
        return <Hello backLoginPage={() => setChangePage(false)}/>
    }
    return (
        
        <View style={styles.container}>
            <Image style={styles.img}
                source={require('../../assets/images/loginuser.jpg')} />
            <Text style={styles.texto}>Bem vindo ao Higa's</Text>
            <Text style={styles.textoEmail}>E-mail:</Text>
            <TextInput 
                style={styles.textoInputEmail} 
                placeholder='Digite E-mail'  
            />
            <Text style={styles.textoSenha}>Senha:</Text>
            <TextInput placeholder='Digite sua senha' style={styles.textoInputSenha} />

            <TouchableOpacity style={styles.btn}>
                <Text onPress={handlerChangePage} style={styles.textBtn}>Ingressar</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'blue',
    },
    img: {
        width: 116,
        height: 116,
        marginBottom: 20,
    },
    texto: {
        fontSize: 40,
        fontFamily: 'BebasNeue_400Regular'
    },
    textoInputEmail: {
        borderWidth: 1,
        width: '75%',
        height: 40,
        borderRadius: 10,
        fontSize: 10,
        paddingLeft: 15,
        marginTop: 5,
        borderWidth: 2
    },
    textoInputSenha: {
        borderWidth: 1,
        width: '75%',
        height: 40,
        borderRadius: 10,
        fontSize: 10,
        paddingLeft: 15,
        marginTop: 5,
        borderWidth: 2
    },
    textoEmail: {
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginTop: 30
    },
    textoSenha: {
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginTop: 30,
    },
    btn: {
        width: '25%',
        height: 40,
        backgroundColor: 'black',
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 40
    },
    textBtn: {
        color: 'white',
        alignSelf: 'center',
    }

})
