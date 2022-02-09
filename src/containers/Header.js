import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {LogoutAction} from "../redux/actions/userActions"

const Header = () => {
  const history = useHistory();
  let localStorageValues=JSON.parse(localStorage.getItem("userInfo"))

const renderheader=()=>{
  if(localStorage.getItem("userInfo")){
    
      return(
        <li class="nav-item active">
          <ul class="navbar-nav">
          <li class="nav-item active">
          <Link to={"/login"}> 
          <a class="nav-link">Hi:{localStorageValues.username} </a>
          </Link>
          </li>
          <li class="nav-item active">
          <Link to={"/login"}> 
          <Link to={"/login"}> <a className="nav-link " onClick={()=>{
           LogoutAction()
            history.push("/")
          }}>logout</a></Link>
          </Link>
          </li>
          </ul>
        </li>
      )
  }else{

    return(
      <li class="nav-item ">
       <Link to={"/login"}> <a class="nav-link">login</a></Link> 
    </li>
    )
  }
}
  return (
 
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <Link to={"/"}> <a class="navbar-brand" href="#">Navbar</a></Link> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav">
      <li class="nav-item active">
      <Link to={"/"}><a class="nav-link " aria-current="page">Home</a></Link> 
      </li>
      <li class="nav-item">
      <Link to={"/about"}> <a class="nav-link">About</a></Link> 
      </li>
      <li class="nav-item">
      <Link to={"/cart"}> <a class="nav-link">MyCart</a></Link> 
      </li>
       {
         renderheader()
       }
     
       {/* <Link to={"/login"}> <a class="nav-link">login</a></Link>  */}
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Header;
