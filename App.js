import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Srceens/Login';
import Sigin from './Srceens/Sigin';
import SignUp from './Srceens/SignUp';

import DetailScreen from './Srceens/DetailScreen';
import HomeScreen from './Srceens/HomeScreen';
import Home from './Srceens/Home';
import Detail from './Srceens/Detail';
import PlaneScreen from './Srceens/PlaneScreen';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Sigin" component={Sigin} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="PlaneScreen" component={PlaneScreen} />

        
        

      </Stack.Navigator>

      
    </NavigationContainer>
  );
}

export default App;