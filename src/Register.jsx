import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const Register = () => {
        console.log("register");
        let data = {name , email ,password , role :"2"}
        fetch("http://localhost:9090/userdata" , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp);
                navigate("/login")
            })
        })
    }
    return (
        <MDBContainer fluid>

            <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                            <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon fas icon="user me-3" size='lg' />
                                <MDBInput label='Your Name' value={name} onChange={(e) => setName(e.target.value)} id='form1' type='text' className='w-100' />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size='lg' />
                                <MDBInput label='Your Email' value={email} onChange={(e) => setEmail(e.target.value)}  id='form2' type='email' />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="lock me-3" size='lg' />
                                <MDBInput label='Password' value={password} onChange={(e) => setPassword(e.target.value)}  id='form3' type='password' />
                            </div>



                            <MDBBtn className='mb-4' size='lg' onClick={Register}>Register</MDBBtn>

                        </MDBCol>

                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                        </MDBCol>

                    </MDBRow>
                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    );
}

export default Register;
