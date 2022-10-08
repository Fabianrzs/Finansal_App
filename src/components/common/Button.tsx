import React, { useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import useButtonStyle from "../../hooks/components/common/useButtonStyle";

interface ButtonProps{
  title: string,
  onPress: ()=> void,
  typeButton?: 'outlet' | 'btn' | 'FAB' | undefined,
  colorText?:'primary' | 'danger' | 'light' | 'dark' | 'susses' | undefined,
  stylesButton?: any,
  stylesText?:any,
  size?: number,
  disabled?: boolean,
  onLongPress?:  () => void,
  activeOpacity?: number,
}

export default function Button(props:ButtonProps){
  const {title, onPress, stylesButton, disabled,activeOpacity, typeButton, colorText ,stylesText, onLongPress} = props
  const { text, button } = useButtonStyle(typeButton, colorText)
  
  return (
    <TouchableOpacity style={[stylesButton? stylesButton:button ]}
               disabled={disabled} activeOpacity={activeOpacity? activeOpacity : 0.9}
               onLongPress={onLongPress}
               onPress={onPress}>
      <Text style={stylesText? stylesText:text}>{title}</Text>
    </TouchableOpacity>
  )
}
