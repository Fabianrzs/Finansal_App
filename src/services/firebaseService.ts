import { UserLogin, UserRegister } from "../models/User";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase";

export default{
  async login(data:UserLogin){
    try {
      const response = await signInWithEmailAndPassword(auth,data.userName, data.password);
      return response;
    }catch (err){
      console.log(err);
      throw { err }
    }
  },
  async register(data:UserRegister){
    try {
      const response = await createUserWithEmailAndPassword(auth,data.userName, data.password);
      return response;
    }catch (err){
      console.log(err);
      throw { err }
    }
  }
  
}
