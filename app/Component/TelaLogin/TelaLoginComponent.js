import { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const TelaLoginComponent = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (

        <View style={estilo.container}>
            <View style={estilo.dados}>
                <Text style={estilo.titulo}>PROCURALITICO</Text>

                <View style={estilo.emailSenha}>
                    <Text style={estilo.title}>USUÀRIO</Text>
                    <TextInput
                        placeholder="Digite um email"
                        onChangeText={(texto) => setEmail(texto)}
                        defaultValue={email}>
                    </TextInput>
                </View>

                <View style={estilo.emailSenha}>
                    <Text style={estilo.title}>SENHA</Text>
                    <TextInput
                        placeholder="Senha"
                        onChangeText={(texto) => setSenha(texto)}
                        defaultValue={senha}>
                    </TextInput>
                </View>
                <Button onPress={() => navigation.navigate("entrarVisitante")}>Iniciar sessão</Button>
            </View>
        </View>

    )

}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC',
        justifyContent: 'center',

    },

    dados: {
        backgroundColor: 'white',
        height: '50%',
        width: '100%',
        
    

    },

    titulo: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,

    },

    title: {
      
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 28
    },

    emailSenha: {
        borderBottomWidth: 2,
        height: 85,
        
        fontSize: 16,

    }
})


export default TelaLoginComponent;