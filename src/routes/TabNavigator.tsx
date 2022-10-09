import React from 'react'
import LoginScreen from "../screens/user/loginScreen";
import HomeScreen from "../screens/home/homeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegisterScreen from "../screens/user/registerScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator(){
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Informe" component={LoginScreen} />
      <Tab.Screen name="Registros" component={RegisterScreen} />
    </Tab.Navigator>
  )
}
