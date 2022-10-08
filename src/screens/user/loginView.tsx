import { Text, View } from "react-native";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserLogin } from "../../models/User";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import React, { useState } from "react";
import { styles } from "../../styles/scream/user/Loging.style";
import Modal from "../../components/common/Modal";
export default function LoginView (){
  
  const [open, setOpen] = useState<boolean>(false)
  
  const {...methods} = useForm<UserLogin>();
  
  const onSubmit: SubmitHandler<UserLogin> =
    (data) => {
      console.log({ data });
      setOpen(true);
    }
  
  const body = <View>
    <Input label={'userName'} keyboardType={"default"}/>
    <Input label={'password'} keyboardType={"default"} secureTextEntry={true}/>
  </View>
  const body2 = <Text style={{color : 'red'}}>No sea bruto y llene los campos </Text>
  return(
    <View style={styles.container}>
      <Modal title={"Alerta"} body={body2} visible={open} setVisible={setOpen} transparent={true}/>
      <Text style={styles.title}>LOGIN</Text>
      <Form methods={methods} body={body}/>
      <Button
        title="Iniciar Sesion"
        onPress={methods.handleSubmit
        (onSubmit)}
      />
    </View>
  )
}