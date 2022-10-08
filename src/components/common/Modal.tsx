import React from "react";
import { Modal as ModalNative, ModalBaseProps, Pressable, Text, View } from "react-native";
import { styles } from "../../themes/components/common/Modal.style";

interface ModalProps{
  title?: string
  body:  JSX.Element
  animated?: boolean;
  animationType?: 'none' | 'slide' | 'fade';
  transparent: boolean;
  visible: boolean;
  setVisible: Function;
}

export default function Modal (props: ModalProps){
  const {title ,animationType, visible, transparent, body, animated, setVisible } = props
  return(
    <View>
      <ModalNative
        animated={animated}
        animationType={animationType}
        transparent={transparent}
        visible={visible}
        statusBarTranslucent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text style={styles.titleStyle}>{title}</Text>
            </View>
            <View style={styles.modalBody}>
              {body}
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setVisible(!visible)}
            >
              <Text style={styles.textStyle}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </ModalNative>
    </View>
  )
}
