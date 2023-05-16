import { View , StyleSheet} from "react-native";
import { Button ,Text} from "react-native-paper";


const TelaPrincipalComponent =({navigation})=>{
    return(
    <View style ={estilo.conteiner}>    
    <Text>PROCURALITICO</Text>

    <Button icon="camera" mode="contained" onPress={()=>navigation.navigate("cadastro")}>Criar conta</Button>
    <Button icon="camera" mode="contained" onPress={()=>navigation.navigate("login")}>Entra com uma conta</Button>
    <Button icon="camera" mode="contained" onPress={()=> navigation.navigate("entrarVisitante")}> Entra como visitante </Button>
    </View>
 )
}

 const estilo = StyleSheet.create({
    conteiner:{
     flex: 1,
     backgroundColor: '#fff',
     justifyContent: 'center',
    }

 })

export default TelaPrincipalComponent