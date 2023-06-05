import React from "react";
import {Text} from 'react-native'

const TelaPolitico = ({ route }) => {
  console.log(route.params.chaveValor)
  const dadosPolitico = route.params.chaveValor
  return <>
    <Text>Faz o L</Text>

  </>;
};
export default TelaPolitico;
