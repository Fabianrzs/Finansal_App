import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import Modal from "../components/common/Modal";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const body = (
    <View>
      <Text>Me das el si?</Text>
    </View>
  )
  
  return (
    <View style={styles.centeredView}>
      <Modal body={body} setVisible={setModalVisible}
             animated={true} animationType={"fade"}
             transparent={true} visible={modalVisible}
             title={"Hola Como Estas?"}
      />
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
});

export default App;
