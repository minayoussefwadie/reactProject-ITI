import { ActionTypes } from "../constants/action-types";
export const  getall=(state=null,Action)=>{
    if(Action.type ==ActionTypes.LOGIN_USER){
        return {
            payload:Action.payload
        }
    }
    return state
}
export const  Regist=(state=null,Action)=>{
    if(Action.type ==ActionTypes.REGIST_USER){
        return {
            payload:Action.payload
        }
    }
    return state
}
