import React from "react";
import  Icon  from "react-native-vector-icons/Ionicons";
import { primaryBlue } from "../../themes/_varibles";
interface IcoonProps{
  name:string
  color?:string
  style?:any
  size?:number
}
export default function Icoon (props: IcoonProps){
  const {name, color = primaryBlue, size, style} = props
  return <Icon name={name} color={color} style={style} size={size} />
}
