import React, { useEffect, useState } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { styles } from "../../../themes/components/common/Button.themes";

export default function useButtonStyle (typeButton:string | undefined, colorText:string | undefined){

  const [text, setText] = useState<StyleProp<TextStyle>>()
  const [button, setButton] = useState< StyleProp<ViewStyle>>()
  
  const stylesButton = () =>{
    switch (typeButton){
      case 'outlet':
        setButton(styles.buttonOutlet)
        break;
      case 'btn':
        setButton(styles.button)
        break;
      case 'FAB':
        break;
      default :
        setButton(styles.button)
        break;
    }
  }
  
  const stylesText = () =>{
    switch (colorText){
      case 'primary':
        setText([styles.text, styles.primary])
        break;
      case 'danger':
        setText([styles.text, styles.danger])
        break;
      case 'light':
        setText([styles.text, styles.ligth])
        break;
      case 'dark':
        setText([styles.text, styles.dark])
        break;
      case 'susses':
        setText([styles.text, styles.susses])
        break;
      default :
        setText([styles.text, styles.ligth])
        break;
    }
  }
  
  useEffect(()=>{
    stylesButton()
    stylesText()
    console.log(button);
  },[])
  
  return{
    text,
    button
  }
}
