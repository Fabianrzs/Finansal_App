import React from "react";
import { TextInput } from "@react-native-material/core";
import { useFormContext, Controller } from "react-hook-form";
import { KeyboardType, Text, View } from "react-native";
import { styles } from "../../styles/components/common/Input.style";
type InputProps = {
  label: string
  keyboardType: KeyboardType
  defaultValue?: string|undefined
  secureTextEntry? : boolean
  placeholder?: string
  rules?: string
}
export default function Input(props: InputProps){
  const { defaultValue, secureTextEntry, label, placeholder, keyboardType } = props
  const formContext = useFormContext();
  const {control, formState: {errors}} = formContext
  
  return <View>
    <Controller key={label} name={label} control={control}
      render={({field: {onChange,value, onBlur}}) => (
        <TextInput variant="outlined" color={"on-surface"}
           onBlur={onBlur} label={label} defaultValue={defaultValue}
           placeholder={placeholder} onChangeText={value => onChange(value)}
           value={value} style={styles.input}
           secureTextEntry={secureTextEntry} keyboardType={keyboardType}/>
      )}/>
    {errors[label] && <Text>campo requerido</Text>}
  </View>
}

