import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {

    const navigate = useNavigate()

   useEffect(()=>{
    let username = sessionStorage.getItem("name")
    let role = sessionStorage.getItem("role")

    if(username === "" || username === null || role != 1){
        console.log("Called");
        navigate("/login")        
    }
    
   })

    return ( 
        <>
        <h1>ADMIN</h1>
        </>
     );
}
 
export default Admin;