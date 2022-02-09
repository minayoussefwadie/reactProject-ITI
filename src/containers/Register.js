import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import {RegistAction} from "../redux/actions/userActions"
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  const userRed = useSelector((state) => {
    return state;
  });

    var initialValues =  {
        name: '',
        email: '',
        password:'',
        image:'',
        gender:'',
        state:"user",
        cart:[]
      }
      const dispatch=useDispatch()
      const history = useHistory();
      const [values, setValues] = useState(initialValues);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
        console.log("mina",name)
      }
      const handleFormSubmit = (event) => {
        event.preventDefault();
        dispatch(RegistAction(values))
        localStorage.setItem("userInfo", JSON.stringify({username:values.name,useremail:values.email,userstate:values.state}));
        history.push("/")
      // const dispatch = useDispatch();
      //     dispatch(RegidtAction())
        // selectedUser ? dispatch(updateUser({ ...selectedUser, ...values })) :
        //   dispatch(createUser({ ...values, id: cuid() }))
        // history.push("/");
      }
  return (
  <div className="container">
      <div className="row shadowDiv m-auto w-50">
      <form onSubmit={(e)=>{
        handleFormSubmit(e)
      }
}>
      <div class="mb-3">
      <label for="nameInput" class="form-label">Name</label>
      <input type="text" name="name" value={values.name}  onChange={(e) => handleInputChange(e)} class="form-control" id="nameInput" />
    </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name="email" value={values.email}  onChange={(e) => handleInputChange(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" name="password" value={values.password} onChange={(e)=>handleInputChange(e)} id="exampleInputPassword1"/>
  </div>
  <div class="form-check">
    <input type="radio" class="form-check-input" id="validationFormCheck2" onChange={(e) => handleInputChange(e)} value="male" name="gender" required/>
    <label class="form-check-label" for="validationFormCheck2">male</label>
  </div>
  <div class="form-check mb-3">
    <input type="radio" class="form-check-input" id="validationFormCheck3" onChange={(e) => handleInputChange(e)} value="female" name="gender" required/>
    <label class="form-check-label" for="validationFormCheck3">female</label>

  </div>
  <button type="submit" class="btn btn-primary">Register</button>
</form>
      </div>
  </div>
  );
};

export default Register;
