import { Text, TextInput, View, StyleSheet } from "react-native";
import React, { useState } from 'react';

const TelaNoticiaComponent = () => {
    const [pesquisa, setpesquisa] = useState('');

    return (
        <View>
            <View style={estilo.barraPesquisa}>
            <TextInput style={estilo.pesquisa} 
            placeholder="pesquise"
            onChangeText={(text) => setpesquisa(text)}
            defaultValue={pesquisa}>
            </TextInput>
            </View>
        </View>
    )
}
const estilo = StyleSheet.create({

    pesquisa:{
        textAlign:'center',
        border:'none',
        width:"100%",
        height:"40%",
        backgroundColor:"rgb(211,211,211)"
    },

    barraPesquisa:{
       backgroundColor: 'black',
    }

})

export default TelaNoticiaComponent