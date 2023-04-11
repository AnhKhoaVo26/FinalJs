import { View, Text, Dimensions,ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Btn from '../Other/Btn'
import { darktim, tim } from '../Other/Constant'
import { NavigationContainer } from '@react-navigation/native';

const{height}=Dimensions.get("window")  
const Login = (props) => {
  return (
    <View>
      <ImageBackground source={require("../assets/trip.jpeg")} style={{height:height/1.9}}></ImageBackground>
      
      <Text style={{textAlign:"center",fontSize:30,paddingTop:20,color:"#55BAD9"}}>Information Technology Service Center </Text>
      <Text style={{textAlign:"center",fontSize:20,paddingTop:10,color:"black"}}>Hợp Tác - Phát Triển - Bền Vững </Text>
      <View style={{flexDirection:"row",paddingLeft:20,paddingTop:100}}>
        <Btn  bgColor={tim} textColor={'white'} btnLabel="LOGIN" Press={()=>props.navigation.navigate("Sigin")}/>
        <Btn bgColor={darktim} textColor={'white'} btnLabel="SIGNUP" Press={()=>props.navigation.navigate("SignUp")}/>
      </View>
      
     
    </View> 
  )
}

export default Login;