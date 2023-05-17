import { useState } from "react";
import { View,TextInput,Text ,StyleSheet} from "react-native";
import { Button } from "react-native-paper";

const TelaLoginComponent =({navigation})=>{
    const[email,setEmail] = useState('');
    const[senha,setSenha] = useState('');
    
    return(
  
    <View>

        <Text>PROCURALITICO</Text>
        
        <TextInput
            placeholder="EMAIL"
            onChangeText={(texto) => setEmail(texto)}
            defaultValue={email}>
        </TextInput>

        <TextInput
            placeholder="SENHA"
            onChangeText={(texto) => setSenha(texto)}
            defaultValue={senha}>
        </TextInput>

        <Button onPress={()=>navigation.navigate("entrarVisitante")}>Iniciar sessão</Button>

    </View>

)

}

export default TelaLoginComponent;