import { StyleSheet } from "react-native";
import { lightWhite, primaryBlue } from "../../_varibles";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    backgroundColor: lightWhite,
    padding:15,
    shadowRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 1,
    borderRadius: 30,
    elevation:1
  },
  text:{
    color : primaryBlue,
    fontSize:20,
    fontWeight: "bold"
  }
});
