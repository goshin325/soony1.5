import Raect,{Componet} from "raect"
import {View,StyleSheet,Text} from "react-native"

export default class Search extends Componet {
    render(){
    renturn(
      <View style={styles.container}>
    <Text style ={styles.text}>
      pantalla de busqueda  
    </Text>
      </View>  
    )    
    }
}

const styles =StyleSheet.create(
   {
     container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center" ,
        backgroundColor:"#5653D4",

     }   ,
  text:{
    color:"#ffff",
    fontSize:35,
    
  }
   } 
)
