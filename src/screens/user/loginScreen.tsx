import { Text, View } from "react-native";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserLogin } from "../../models/User";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import React, { useState } from "react";
import Modal from "../../components/common/Modal";
import { styles } from "../../themes/scream/user/Login.themes";
import firebaseService from "../../services/firebaseService";
import auth from '@react-native-firebase/auth';
import { app } from "../../utils/Firebase";

export default function LoginScreen ({ navigation }:any){

  const [open, setOpen] = useState<boolean>(false)
  const {...methods} = useForm<UserLogin>();
  const {login} = firebaseService;
  
  const onSubmit: SubmitHandler<UserLogin> =
    (data) => {
      login(data).then((response)=>{
        console.log(response)
      }).catch((err)=>{console.log(err)})
    }
  
  const body = <View>
    <Input label={'Username'} keyboardType={"default"}/>
    <Input label={'Password'} keyboardType={"default"} secureTextEntry={true}/>
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
        title="Login"
        onPress={methods.handleSubmit(onSubmit)}
      />
      <Button stylesButton={{padding: 5, border: 1}}
        title="Register"
        colorText='dark'
        onPress={()=> navigation.navigate('Register')}
      />
    </View>
  )
}
