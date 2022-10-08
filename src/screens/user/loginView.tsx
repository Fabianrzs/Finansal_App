import { Text, View } from "react-native";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserLogin } from "../../models/User";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import React, { useState } from "react";
import Modal from "../../components/common/Modal";
import { styles } from "../../themes/scream/user/Login.themes";
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
        colorText='light'
        typeButton='outlet'
        title="Iniciar Sesion"
        onPress={methods.handleSubmit
        (onSubmit)}
      />
    </View>
  )
}
