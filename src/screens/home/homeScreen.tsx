import React from "react";
import { Text, View } from "react-native";
import Loader from "../../components/common/Loader";

export default function HomeScreen(){
  
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Loader/>
    </View>
  )
}
