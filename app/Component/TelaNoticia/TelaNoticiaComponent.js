import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Avatar, List, TextInput } from 'react-native-paper';

const TelaNoticiaComponent = () => {
  const [politicos, setPoliticos] = useState([]);
   const [text, setText] = React.useState("");

  const getPoliticos = async () => {
    try {
      const response = await fetch("https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome");
      const json = await response.json();
      console.log(json)
      setPoliticos  (json.dados);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPoliticos();
  }, []);

  return (

      <View style={{ flex: 1, padding: 24 }}>
          <TextInput
            label="Digite o nome do deputado"
            value={text}
            onChangeText={text => setText(text)}
          />
        <FlatList
          data={politicos}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <List.Item title={item.nome} 
            description={item.siglaPartido} 
            left={props => <Avatar.Image source={{uri: item.urlFoto}} />} />
          )}
        />
      </View>

  );
};

export default TelaNoticiaComponent;
