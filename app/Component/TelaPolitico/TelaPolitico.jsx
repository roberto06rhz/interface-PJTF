import React, { useEffect, useState } from "react";
import { Text, Image, StyleSheet, View, FlatList, ScrollView} from "react-native";
import { List } from "react-native-paper";
import { GASTOS_FAKE } from "../Utils/DataFake";

const TelaPolitico = ({ route }) => {
  //  console.log(route.params.chaveValor)
  /* console.log(route); */
  const dadosPolitico = route?.params?.chaveValor;
  console.log(dadosPolitico);
  /* console.log(dadosPolitico); */
  //console.log(dadosPolitico.uri.dados.gabinete.email);

  const [data, setData] = useState([]);
  const [selecionados, setSelecionados] = useState([]);

  // Substituido pela linha 26 à 40 | Se utilizando de IIFE
  // const showMoreData = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://dadosabertos.camara.leg.br/api/v2/deputados/${dadosPolitico.id}/despesas`
  //     );
  //     const json = await response.json();
  //     //console.log(json.dados);
  //     setData(json.dados);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    //Utilizando de IIFE -> Immediately Invoked Function Expression
    (async () => {
      try {
        const response = await fetch(
          `https://dadosabertos.camara.leg.br/api/v2/deputados/${dadosPolitico.id}/despesas`
        );
        const json = await response.json();
        //console.log(json.dados);

        if (json?.dados) setData(json.dados);
        else {
          setData(GASTOS_FAKE);
        }
      } catch (error) {
        console.error("error:" + error);
      }
    })();
  }, []);
  console.log(data);

  return (

    <View style={{ flex: 1 }}>
      <View style={style.content}>
        <View style={{ height: 450, width: 200, backgroundColor: "blue" }}>
          <Image
            style={style.image}
            source={{ uri: `${dadosPolitico.urlFoto}` }}
          />
        </View>
        <View style={style.contentPrimary}>
          <Text style={style.title}>Nome: {dadosPolitico.nome}</Text>
          <Text style={style.description}>Partido: {dadosPolitico.siglaPartido}</Text>
          <Text style={style.description}>Contado: {dadosPolitico.email}</Text>
        </View>
      </View>
      <ScrollView>
        {data?.map((despesa, i) => (
          <View key={i}>
            <Text>Tipo: {despesa.tipoDespesa}</Text>
            <Text>
              Ano: {despesa.ano} mes: {despesa.mes} gasto:{" "}
              {despesa.valorDocumento}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>

  );
};
const style = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
   
   
  },
  content: {
    display: "flex",
    backgroundColor: 'red',
    flexDirection: "row",
  },
});
export default TelaPolitico;
