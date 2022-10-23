import React from "react";
import { View } from "react-native";
import Icoon from "../../components/common/Icon";

export default function HomeScreen(){
  
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Icoon name={"alert"} color={'red'} size={700}/>
    </View>
  )
}
