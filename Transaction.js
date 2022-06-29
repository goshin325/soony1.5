import React,{Componet} from "react"
import{View,Text,StyleSheet,TouchableOpacity,TextInput,Image,ImageBackground} from "react-native"
import * as Permissions from "expo-permissions" 
import db from "config"

 export default class Transaction extends Componet{
  constructor(props){ 
  super(props)
  this.state ={
    bookId:"",
    studentId:"",
    domState:"normal",
    hasCamaraPermissions:null,
    scanned:false
  } 
}

getCamaraPermissions = async domState =>{
  const {status} = await Permissions.askAsync(Permissions.CAMERA)
  this.setState({
  hasCamaraPermissions:status ==="granted",
  domState:domState,
  scanned:false
  })
}

handleBarCodeScanned = async ({type,data}) =>{

}

  render(){
  renturn(
    <View style={styles.container}>
     <Text style={styles.text}>
    pantalla de Transaction     
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