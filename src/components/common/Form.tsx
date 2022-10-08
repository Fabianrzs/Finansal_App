import React, { ReactElement } from "react";
import { View } from "react-native";
import { FormProvider } from 'react-hook-form';

type FormProps = {
  body: ReactElement,
  methods:any
}

export default function Form(props:FormProps){
  const { body, methods } = props
  return <View style={{width: '100%'}}>
    <FormProvider {...methods}>
      {body}
    </FormProvider>
  </View>
}
