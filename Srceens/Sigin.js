import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'




function Sigin  (props)  {
  //states for validating
  const[errorEmail,setErrorEmail]=useState('')
  const[errorPassWord,setErrorPassWord]=useState('')
  //state to store email/password
  const[email,setEmail]=useState('')
  const[password,setPassWord]=useState('')

  const onChangedUsername=value=>{
    setEmail(value);

  };
  const onChangedPassword=value=>{
    setPassWord(value);

  };
  
  return (
    <SafeAreaView>
      <View>
      <View style={{paddingTop:50,alignItems:"center"}}>
          <Text style={{fontSize:40,color:"#4E90AB"}}>Login Here</Text>
          <Text style={{fontSize:30,marginVertical:10}}>Welcome To App </Text>

        </View>
        <View>
          <TextInput value={email} onChangeText={onChangedUsername} placeholder="Enter Your Email" placeholderTextColor={"#4F4A4F"} style={{fontSize:20,padding:15,backgroundColor:"#E6DEE6",borderRadius:40,marginVertical:10}}/>
          <TextInput value={password} onChangeText={onChangedPassword} placeholder="PassWord" placeholderTextColor={"#4F4A4F"} secureTextEntry={true} style={{fontSize:20,padding:15,backgroundColor:"#E6DEE6",borderRadius:40,marginVertical:10}}/>

        </View>
        <View>
          <Text style={{fontSize:17,alignSelf:"flex-end",color:"#312F31"}}>Forgot your password ?</Text>
        </View>
        <View style={{paddingTop:20,width:"95%",paddingLeft:10}}>
          <TouchableOpacity onPress={()=>{
            props.navigation.navigate('Home')
          }}
             style={{padding:20,backgroundColor:"#55BAD9",borderRadius:20}}>
            <Text style={{fontSize:20,textAlign:"center",color:"white"}}>SIGIN</Text>
          </TouchableOpacity>
        </View>

        
      </View>
    </SafeAreaView>
  )
}

export default Sigin