import React, { useRef } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles as stylesFile } from "../../styles/components/common/Button.styles";

interface ButtonProps{
  text: string,
  onPress: Function,
  styles?: any,
  size?: number,
  disabled?: boolean,
  onLongPress?: Function,
  activeOpacity?: number,
}

export default function Button(props:ButtonProps){
  const {text, onPress, styles, disabled,activeOpacity, size, onLongPress} = props
  const ref = useRef(null)
  return (
    <view style={stylesFile.container}>
      <TouchableOpacity
        ref={ref}
        activeOpacity={activeOpacity? activeOpacity:0.5}
        disabled={disabled}
        onLongPress={()=>onLongPress}
        onPress={()=>onPress}
        style={[styles? styles:stylesFile.button ]}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </view>
  )
}
