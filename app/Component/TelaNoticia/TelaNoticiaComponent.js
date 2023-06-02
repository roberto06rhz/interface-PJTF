import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Avatar, List, TextInput } from 'react-native-paper';

const TelaNoticiaComponent = () => {
  const [politicos, setPoliticos] = useState([]);
  const [politicoFiltrado, setPoliticoFiltrado] = useState([])
  const [text, setText] = useState("");

  useEffect(() => {

  const getPoliticos = async () => {
    try {
      const response = await fetch("https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome");
      const json = await response.json();
      setPoliticos  (json.dados);
    } catch (error) {
      console.error(error);
    }
  };
    getPoliticos();
  }, []);

  useEffect(()=>{
    const nomesPoliticos = politicos.map(politico => {
     const obj = {
      nome: politico.nome,
       id: politico.id
     } 

     return obj
      
    })
    const idsPoliticos = politicos.map(politico => politico.id)

    const nomeBuscado = politicos.filter((item) =>
    item.nome.toLowerCase().includes(text.toLocaleLowerCase()))

    setPoliticoFiltrado(nomeBuscado)

  },[text])


  const ComponentFiltrados = ({data}) => {
    console.log(politicoFiltrado)
    if(politicoFiltrado.length > 0){
        return (
     <FlatList
          data={politicoFiltrado}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <List.Item title={item.nome} 
            description={item.siglaPartido} 
            left={props => <Avatar.Image source={{uri: item.urlFoto}} />} />
          )}
        />
      
    ) 
    }else{
      return(
        <FlatList
          data={politicos}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <List.Item title={item.nome} 
            description={item.siglaPartido} 
            left={props => <Avatar.Image source={{uri: item.urlFoto}} />} />
          )}
        />
      )
    }
  }
  
  return (

      <View style={{ flex: 1, padding: 24 }}>
          <TextInput
            outlineColor='green'
            label="Nome do deputado federal"
            value={text}
            onChangeText={text => setText(text)}
          />

    <ComponentFiltrados /> 
          
      
      </View>

  );
};
export default TelaNoticiaComponent;
