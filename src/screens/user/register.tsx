import { View } from "react-native";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@react-native-material/core";
import { UserRegister } from "../../models/User";
import Form from "../../components/Form";
import Input from "../../components/Input";

export default function Register (){
  
  const {...methods} = useForm<UserRegister>({mode: "onChange"});
  
  const onSubmit: SubmitHandler<UserRegister> =
    (data:UserRegister) => console.log({data});
  
  const body = <View>
    <Input label={'firstName'}/>
    <Input label={'lastName'}/>
    <Input label={'email'}/>
    <Input label={'userName'}/>
    <Input label={'password'} secureTextEntry={true}/>
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
