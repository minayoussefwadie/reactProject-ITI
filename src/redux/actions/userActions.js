import axios from "axios";
import {ActionTypes} from "../constants/action-types"
export const GetAllAction=async()=>{
    const {data}=await axios
    .get(`http://localhost:3000/Users`)
    .catch((err) => {
      console.log("error: ", err);
    });
    return{
      type:ActionTypes.LOGIN_USER,
      payload:data
    }
}
export const RegistAction=async(values)=>{
    const {data}=await axios
    .post(`http://localhost:3000/Users`,
    values
    )
    .catch((err) => {
      console.log("error: ", err);
    });
    return {
      type: ActionTypes.REGIST_USER,
      payload:data
    };
}
export const LogoutAction=()=>{
  let logstate=false;
 if(localStorage.removeItem("userInfo")){
  logstate=true
 }
  return {
    type: ActionTypes.LOGOUT_USER,
    payload:logstate
  };


}