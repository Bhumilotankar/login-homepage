import React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import Login from './Login';
import Home from './Home';
import Logout from './Logout';
import Settings from './Settings';


import{createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Tab=createBottomTabNavigator();
const Stack=createNativeStackNavigator();
const App=()=>{
    return(
      
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="Logout" component={Logout} />
       <Stack.Screen name="Settings" component={Settings} />

    </Stack.Navigator>
    </NavigationContainer>
    ) 
}; 


export default App;