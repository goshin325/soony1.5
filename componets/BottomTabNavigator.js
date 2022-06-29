import React,{Comment} from "react"
import {View,Text,StyleSheet} from "react-native"
import{NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()

function adidas (){
return(
  <View style ={styles.goku}>
  <Text>
  Search    
  </Text>    
  </View>  
)


}
function superman (){
    return(
      <View style ={styles.goku}>
      <Text>
      Transaction    
      </Text>    
      </View>  
    )
    
    
    }
export default class BottomTabNavigator extends Comment{
constructor(){

}
}

const styles =StyleSheet.create({
   goku :{
   flex:1,
   justifyContent:"center",  
   alingItems:"center",

   }},
)