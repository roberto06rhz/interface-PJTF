import { useState } from "react";
import {  View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";

const TelaLoginComponent = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (




        <View style={estilo.container}>

            <Text style={estilo.titulo}>PROCURALITICO</Text>

            <View style={estilo.emailSenha}>
                <Text style={estilo.title}>USUÀRIO</Text>
                <TextInput
                    placeholder=""
                    onChangeText={(texto) => setEmail(texto)}
                    defaultValue={email}>
                </TextInput>
            </View>

            <View style={estilo.emailSenha}>
                <Text style={estilo.title}>SENHA</Text>
                <TextInput
                    placeholder=""
                    onChangeText={(texto) => setSenha(texto)}
                    defaultValue={senha}>
                </TextInput>

                <TouchableOpacity style onPress={() => navigation.navigate("entrarVisitante")}>
                    <Text style={estilo.entrarVstt}>Entrar como visitante</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("entrarVisitante")}>
                    <Text style={estilo.criarCnt}>Criar uma conta</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity style={estilo.bordaButao} onPress={() => navigation.navigate("entrarVisitante")}>
                <Text style={estilo.butao}>LOGIN</Text>
            </TouchableOpacity>

        </View>




    )

}

const estilo = StyleSheet.create({



    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#45BA5F',
        height: '100%',
        width: '100%',

    },

    titulo: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 0,
        top:-110
    },

    title: {

        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 28,
        margin: 13,
    },

    emailSenha: {
        borderBottomWidth: 2,
        height: 85,
        marginLeft: 10,
        fontSize: 16,
    },



    butao: {
        color: 'white',
        fontSize: 16,
        padding: 13,
        borderWidth: 'none',
        width: 350,
        fontWeight: 'bold',
        textAlign: 'center',
        top:27,
        backgroundColor: '#19451F',
        margin:-10,
        marginTop:0
    },
    bordaButao: {
        margin:26,
        padding:20,
        marginTop:0
    },
    entrarVstt:{
        color: 'white',
        top:24,
        textAlign:'left'
    },
    criarCnt:{
        color:'white',
        top:8,
        textAlign:'right'
    }
})


export default TelaLoginComponent;