import { useState } from "react";
import { View , TextInput} from "react-native";
import { Button } from "react-native-paper";

const TelaCadastroComponent = ({navigation}) =>{
    const[email,setEmail] = useState('')
    const[senha,setSenha] = useState('')
    const[senhaOk,setSenhaOk] = useState('')

    return(
        <View>

            <TextInput
                placeholder="EMAIL"
                onChangeText={ (texto)=> setEmail(texto)}
                default={email}>
            </TextInput>

            <TextInput
                placeholder = "SENHA"
                onChangeText ={(texto)=> setSenha(texto)}
                default={senha}>
            </TextInput>

            <TextInput
                placeholder = "CONFIRMA SENHA"
                onChangeText ={(texto) => setSenhaOk(texto)}
                default={senhaOk}>
            </TextInput>

            <Button onPress={() => navigation.navigate("login")}>Iniciar sessão</Button>

        </View>
    )

}

export default TelaCadastroComponent