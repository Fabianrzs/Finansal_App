import React, { useRef } from "react";
import { Pressable, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { styles as stylesFile } from "../../styles/components/common/Button.style";

interface ButtonProps{
  title: string,
  onPress: () => void,
  stylesButton?: any,
  stylesText?:any,
  size?: number,
  disabled?: boolean,
  onLongPress?:  () => void,
  activeOpacity?: number,
}

export default function Button(props:ButtonProps){
  const {title, onPress, stylesButton, disabled,activeOpacity, size,stylesText, onLongPress} = props
  
  return (
    <TouchableOpacity style={[stylesButton? stylesButton:stylesFile.button ]}
               disabled={disabled} activeOpacity={activeOpacity? activeOpacity : 0.9}
               onLongPress={onLongPress}
               onPress={onPress}>
      <Text style={stylesText? stylesText:stylesFile.text}>{title}</Text>
    </TouchableOpacity>
  )
}
