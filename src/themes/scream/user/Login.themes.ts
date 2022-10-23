import { StyleSheet } from "react-native";
import { lightWhite, primaryBlue } from "../../_varibles";

export const styles = StyleSheet.create({
  container : {
    backgroundColor: primaryBlue,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "100%",
  },
  title:{
    color: lightWhite,
    fontWeight: "bold",
    fontSize: 70,
    paddingBottom: 20,
  }
});
