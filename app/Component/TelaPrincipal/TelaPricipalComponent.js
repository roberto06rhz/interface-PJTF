import { View, StyleSheet} from "react-native";
import { Text, Button } from "react-native-paper";

const TelaPrincipalComponent = ({ navigation }) => {
   return (
      <View style={estilo.conteiner}>

         <View style={estilo.info}>

            <View style={estilo.logo}>
               <Text style={estilo.titulo}>PROCURALITICO</Text>
            </View>

            <View style={estilo.butaoCotainer}>
               <View style={estilo.butao}>
                  <Button onPress={() => navigation.navigate("cadastro")}>Criar uma conta</Button>

                  <Button onPress={() => navigation.navigate("login")}>Entrar com uma conta</Button> 

                  <Button onPress={() => navigation.navigate("entrarVisitante")}>Entrar como visitante</Button>
               </View>
            </View>

         </View>

      </View>

   )
}

const estilo = StyleSheet.create({
   conteiner: {
      flex: 1,
      backgroundColor: '#DCDCDC',
      justifyContent: 'center',
   },
   info: {
      backgroundColor: 'white',
      height: '42%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      
   },

   butao: {
      backgroundColor: '#19A7CE',
      padding: 10,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
   },

   butaoCotainer:{
      width: '100%',
      flex:2,
      gap:10
   
   },
   logo: {
      flex:1,
      
   },
 titulo:{
   fontSize: 30,
   color: 'black',
   fontWeight: 'bold',
   textAlign: 'center',
   marginBottom: 10,

 }






})

export default TelaPrincipalComponent