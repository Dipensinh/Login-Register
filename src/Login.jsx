import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate("")
    const [username ,setUsername] = useState("")
    const [userpassword , setUserpassword] = useState("")

    useEffect(()=>{
      sessionStorage.clear()
    },[])    

    const Login = ()=>{
        if(username !== ""){
            console.log("login");
        fetch("http://localhost:9090/userdata?name=" + username).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
                if(resp[0]){
                  sessionStorage.setItem("role" , resp[0].role)
                  sessionStorage.setItem("name" , username)
                  if(resp[0].role == 1){
                    navigate("/admin")                    
                  }
                  else{
                    navigate("/user")
                  }
                }
                else{
                  alert("user not find")
                }
            })
        })
        }
        
    }
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Username' value={username} onChange={(e)=>setUsername(e.target.value)} id='form1' type='username'/>
      <MDBInput wrapperClass='mb-4' label='Password' value={userpassword} onChange={(e)=>setUserpassword(e.target.value)} id='form2' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4" onClick={Login}>login</MDBBtn>

      <div className="text-center">
        <p> <Link to="/register">Register</Link></p>
        

        
      </div>

    </MDBContainer>
  );
}

export default Login;