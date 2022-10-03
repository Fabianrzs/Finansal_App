import React from "react";
import { TextInput } from "@react-native-material/core";
import { useFormContext, Controller } from "react-hook-form";
type InputProps = {
  label: string,
  defaultValue?: string|undefined,
  secureTextEntry? : boolean
  placeholder?: string
  rules?: string
}
export default function Input(props: InputProps){
  const {defaultValue, secureTextEntry, label, placeholder} = props
  const formContext = useFormContext();
  const {control} = formContext
  
  return <Controller key={label} name={label} control={control}
                     render={({field: {onChange,value, onBlur}}) => (
    <TextInput variant="outlined"
               onBlur={onBlur} label={label} defaultValue={defaultValue}
               placeholder={placeholder} onChangeText={value => onChange(value)}
               value={value} style={{ margin: 16 }}
               secureTextEntry={secureTextEntry}/>
  )}/>
}
