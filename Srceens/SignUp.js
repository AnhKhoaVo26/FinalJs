import { View, Text, SafeAreaView,TextInput,TouchableOpacity    } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';


export default function SignUp() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sdt, setSdt] = useState('');
  const [birthday, setBirthday] = useState('');
  const handleSignUp = () => {
    axios('https://your-api-endpoint.com/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        sdt: sdt,
        birthday: birthday
      })
    })
    .then(response => response.json())
    .then(data => {
      // handle response data
    })
    .catch(error => {
      console.error(error);
    });
  };
  return (
    <SafeAreaView>
    <View style={{paddingTop:50,alignItems:"center"}}>
    <Text style={{fontSize:40,color:"#A247A2"}}>Register Here</Text>
    </View>
    <View>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} placeholderTextColor={"#4F4A4F"} style={{fontSize:20,padding:15,backgroundColor:"#E6DEE6",borderRadius:40,marginVertical:10}}/>
        <TextInput placeholder="PassWord" secureTextEntry={true} value={password} onChangeText={setPassword} placeholderTextColor={"#4F4A4F"}  style={{fontSize:20,padding:15,backgroundColor:"#E6DEE6",borderRadius:40,marginVertical:10}}/>
        <TextInput placeholder="Resent PassWord" secureTextEntry={true} value={confirmPassword} onChangeText={setConfirmPassword} placeholderTextColor={"#4F4A4F"}  style={{fontSize:20,padding:15,backgroundColor:"#E6DEE6",borderRadius:40,marginVertical:10}}/>
        <TextInput placeholder="SDT" value={sdt} onChangeText={setSdt} placeholderTextColor={"#4F4A4F"} style={{fontSize:20,padding:15,backgroundColor:"#E6DEE6",borderRadius:40,marginVertical:10}}/>
        <TextInput placeholder="Birth Day" value={birthday} onChangeText={setBirthday} placeholderTextColor={"#4F4A4F"} style={{fontSize:20,padding:15,backgroundColor:"#E6DEE6",borderRadius:40,marginVertical:10}}/>
      </View>
      <View style={{paddingTop:20,width:"95%",paddingLeft:10}}>
        <TouchableOpacity onPress={handleSignUp} style={{padding:20,backgroundColor:"#55BAD9",borderRadius:20}}>
          <Text style={{fontSize:20,textAlign:"center",color:"white"}}>SignIn</Text>
        </TouchableOpacity>
      </View>
  </SafeAreaView>

  );
}
