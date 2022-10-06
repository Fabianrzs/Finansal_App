import { View } from "react-native";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@react-native-material/core";
import { UserRegister } from "../../models/User";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";

export default function Register (){
  
  const {...methods} = useForm<UserRegister>({mode: "onChange"});
  
  const onSubmit: SubmitHandler<UserRegister> =
    (data:UserRegister) => console.log({data});
  
  const body = <View>
    <Input label={'firstName'} keyboardType={"default"}/>
    <Input label={'lastName'} keyboardType={"default"}/>
    <Input label={'email'} keyboardType={"email-address"}/>
    <Input label={'userName'} keyboardType={"default"}/>
    <Input label={'password'} keyboardType={"default"} secureTextEntry={true}/>
  </View>
  
  return(
    <View>
      <Form methods={methods} body={body}/>
      <Button variant="outlined"
              title="Outlined"
              onPress={methods.handleSubmit
              (onSubmit)}/>
    </View>
  )
}
