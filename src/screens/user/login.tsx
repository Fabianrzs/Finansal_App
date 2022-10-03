import { View } from "react-native";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@react-native-material/core";
import { UserLogin } from "../../models/User";
import Form from "../../components/Form";
import Input from "../../components/Input";
export default function Login (){
  
  const {...methods} = useForm<UserLogin>();
  
  const onSubmit: SubmitHandler<UserLogin> =
    (data) => console.log({data});
  
  const body = <View>
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
