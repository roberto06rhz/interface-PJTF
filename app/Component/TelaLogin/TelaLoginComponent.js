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
        height: '55%',
        width: '96%',
        marginLeft:8,
        
    

    },

    titulo: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
        margin: 13,

    },

    title: {
      
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 28,
        margin:13,
    },

    emailSenha: {
        borderBottomWidth: 2,
        height: 85,
        marginLeft:10,
        fontSize: 16,

    }
})


export default TelaLoginComponent;