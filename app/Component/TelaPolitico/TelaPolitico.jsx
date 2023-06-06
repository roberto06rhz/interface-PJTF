import React, { useState } from "react";
import {Text, Image, StyleSheet, View} from 'react-native'

const TelaPolitico = ({ route }) => {
//  console.log(route.params.chaveValor)
  const dadosPolitico = route.params.chaveValor
  console.log(dadosPolitico)

  return(
  <View style={{flex: 1}}>
    <View style={{height: 300, width: 200}}>
      <Image
  
      style={style.image}
        source={{uri:`${dadosPolitico.urlFoto}`}}
      />
      <View style={style.content}>

        <Text>{dadosPolitico.nome}</Text>

      </View>

    </View>

  </View>

  ) 
};

const style = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }
  
});
export default TelaPolitico;
