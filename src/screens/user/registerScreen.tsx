import { Text, View } from "react-native";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserRegister } from "../../models/User";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
import { darkBlack, lightWhite, primaryBlue } from "../../themes/_varibles";
import React, { useState } from "react";
import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
import { styles } from "../../themes/scream/user/Login.themes";
import {auth} from "../../utils/Firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function RegisterScreen (){
  
  
  const [open, setOpen] = useState(false)
  
  const {...methods} = useForm<UserRegister>({mode: "onChange"});
  
  const onSubmit: SubmitHandler<UserRegister> =
    (data:UserRegister) => {
      console.log(data);
      createUserWithEmailAndPassword(auth, data.userName, data.password )
      .then(()=>{
        console.log("Logeadito jeje: ", data)
      })
      .catch((e)=>{
        console.log("Error: ",e);
      })
    }
  
  const body = <View>
    <Input label={'FirstName'} keyboardType={"default"}/>
    <Input label={'LastName'} keyboardType={"default"}/>
    <Input label={'email'} keyboardType={"email-address"}/>
    <Input label={'UserName'} keyboardType={"default"}/>
    <Input label={'Password'} keyboardType={"default"} secureTextEntry={true}/>
  </View>
  
  const body1 = <Text style={{color:darkBlack}}>No Puedes Registrarte Aun</Text>
  
  return(
    <View style={{padding:50 ,backgroundColor:lightWhite, justifyContent:'center', flex:1}}>
        <Modal body={body1}
               visible={open}
               setVisible={setOpen}
               transparent
        />
        <View>
          <Text style={{...styles.title, color:primaryBlue}}>Registrar</Text>
          <Form  methods={methods} body={body}/>
          <Button
            title="Registro"
            colorText='primary'
            typeButton={'btn'}
            onPress={methods.handleSubmit(onSubmit)}
          />
        </View>
    </View>
  )
}
