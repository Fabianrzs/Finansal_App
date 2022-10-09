import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/user/loginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../screens/user/registerScreen";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

export default function StackNavigator(){
  return(
      <Stack.Navigator
        screenOptions={{
          headerShown: false,}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Loged" component={TabNavigator} />
      </Stack.Navigator>
  )
}
