import React from 'react'
import HomeScreen from "../screens/home/homeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Informe from "../screens/aplication/informe";
import Registro from "../screens/aplication/registro";

const Tab = createBottomTabNavigator();

export default function TabNavigator(){
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Informe" component={Informe} />
      <Tab.Screen name="Registros" component={Registro} />
    </Tab.Navigator>
  )
}
