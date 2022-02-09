import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useDispatch ,useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import {GetAllAction} from "../redux/actions/userActions"
 const Login = () => {
   const stateusers = useSelector((state)=>{
       return state.getallusers
   })
   var initialValues =  {
    email: '',
    password:''

  }
  const history = useHistory();
  const [values, setValues] = useState(initialValues);
   const dispatch=useDispatch()
  const fet=async()=>{
    dispatch(GetAllAction())
    if(stateusers){
      let userinfo=stateusers.payload.find(x=>x.email ==values.email && x.password ==values.password)
      if(userinfo){
        localStorage.setItem("userInfo", JSON.stringify({username:userinfo.name,useremail:userinfo.email,userstate:userinfo.state}));
        history.push("/")
        }
    }
  }
  useEffect(()=>{
    fet()
    
  },[])
  const handleFormSubmit=(event)=>{
    event.preventDefault();
    fet()
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  }
  return (
    <div className="container">
        <div className="row shadowDiv m-auto w-50">
        <form onSubmit={(e)=>{
          handleFormSubmit(e)
          
        }
  }>

    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" name="email" value={values.email}  onChange={(e) => handleInputChange(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" name="password" value={values.password} onChange={(e)=>handleInputChange(e)} id="exampleInputPassword1"/>
    </div>
    <button type="submit" class="btn btn-primary d-block w-50 m-auto">login</button>
  </form>
  <div className="">
    <div className="text-center m-auto">---------------OR------------</div>
    <button type="submit" class="btn btn-primary d-block w-50 m-auto">
    <Link to={"/register"}> <a class="btn-primary d-block w-25 m-auto">regist</a></Link>
    </button>
    
  </div>
        </div>
    </div>
    );
}
export default Login