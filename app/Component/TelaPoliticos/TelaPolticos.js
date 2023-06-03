import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Avatar, List, TextInput } from "react-native-paper";

const TelaPoliticos = () => {
  const [politicos, setPoliticos] = useState([]);
  const [politicoFiltrado, setPoliticoFiltrado] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const getPoliticos = async () => {
      try {
        const response = await fetch(
          "https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome"
        );
        const json = await response.json();
        setPoliticos(json.dados);
      } catch (error) {
        console.error(error);
      }
    };
    getPoliticos();
  }, []);

  useEffect(() => {
    const nomeBuscado = politicos.filter((item) =>
      item.nome.toLowerCase().includes(text.toLowerCase())
    );
    setPoliticoFiltrado(nomeBuscado);
  }, [text, politicos]);

  const ComponentFiltrados = () => {
    console.log(politicoFiltrado);
    if (politicoFiltrado.length > 0) {
      return (
        <FlatList
          data={politicoFiltrado}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <List.Item
              title={item.nome}
              description={item.siglaPartido}
              left={(props) => <Avatar.Image source={{ uri: item.urlFoto }} />}
            />
          )}
        />
      );
    } else {
      return (
        <FlatList
          data={[]}
          keyExtractor={() => ""}
          renderItem={() => <View />} // Renderiza uma View vazia
        />
      );
    }
  };
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <TextInput
        style={{ backgroundColor: "#a3c152" }}
        activeUnderlineColor="black"
        label="Nome do deputado federal"
        value={text}
        onChangeText={(text) => setText(text)}
      />

      <ComponentFiltrados />
    </View>
  );
};

export default TelaPoliticos;
