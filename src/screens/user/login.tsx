import { View } from "react-native";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@react-native-material/core";
import { UserLogin } from "../../models/User";
import Form from "../../components/common/Form";
import Input from "../../components/common/Input";
export default function Login (){
  
  const {...methods} = useForm<UserLogin>();
  
  const onSubmit: SubmitHandler<UserLogin> =
    (data) => console.log({data});
  
  const body = <View>
    <Input label={'userName'} keyboardType={"default"}/>
    <Input label={'password'} keyboardType={"default"} secureTextEntry={true}/>
  </View>
  
  return(
    <View>
      <Form methods={methods} body={body}/>
      <Button variant="outlined"
              color={"on-surface"}
              title="Iniciar Sesion"
              onPress={methods.handleSubmit
              (onSubmit)}/>
    </View>
  )
}
