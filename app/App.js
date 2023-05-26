import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TelaPrincipalComponent from './Component/TelaPrincipal/TelaPricipalComponent'
import TelaLoginComponent from './Component/TelaLogin/TelaLoginComponent';
import TelaCadastroComponent from './Component/TelaCadastro/TelacadastroComponet';
import TelaNoticiaComponent from './Component/TelaNoticia/TelaNoticiaComponent';


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
