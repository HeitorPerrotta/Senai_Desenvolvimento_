import { Button, View } from "react-native"

export const Navegacao = ({navigation}) => {
    return(
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Recuperar Senha"
                onPress={() => navigation.navigate("Recuperar Senha")}
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
        </View>
    )
}