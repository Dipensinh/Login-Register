import React from 'react';
import {createBrowserRouter} from "react-router-dom"
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import User from './User';
import Admin from './Admin';

const Mainrouter = createBrowserRouter ([
    {
        path : "/",
        element : <><Navbar/></>
    },    
    {
        path : "/login",
        element : <><Navbar/><Login/></>
    },
    {
        path : "/register",
        element : <><Navbar/><Register/></>
    },
    {
        path : "/user",
        element : <><Navbar/><User/></>
    },
    {
        path : "/admin",
        element : <><Navbar/><Admin/></>
    }
])
export default Mainrouter