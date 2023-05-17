import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TelaPrincipalComponent from './Component/TelaPricipalComponent';
import TelaLoginComponent from './Component/TelaLoginComponent';
import TelaCadastroComponent from './Component/TelacadastroComponet';
import TelaNoticiaComponent from './Component/TelaNoticiaComponent';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (

  
   
       <NavigationContainer>
        <Stack.Navigator inicialRouterName = "">
           <Stack.Screen name = "PROCURALITICO" component = {TelaPrincipalComponent} options={{headerShown:false}}/>
           <Stack.Screen name = "login" component = {TelaLoginComponent} />
           <Stack.Screen name = "cadastro" component = {TelaCadastroComponent} />
           <Stack.Screen name = "entrarVisitante" component = {TelaNoticiaComponent} />
           
        </Stack.Navigator>
       </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
