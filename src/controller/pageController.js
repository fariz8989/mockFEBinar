import React,{useEffect,useState} from "react";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
function HomePage(){
    const[popUp,setPopUp]=useState('')
    const[status,setStatus]= useState('')
    useEffect(()=>{
        setPopUp(document.getElementById('popup'));
        
    },[])
    return(<>
    
    <Navbar props={{item:{popUp,status},function:{setStatus}}}/>
    <Home props={{item:{popUp,status},function:{setStatus}}}/>
    </>)
}
function LoginPage(){
    return(<>

    <Login/>
    </>)
}
function RegisterPage(){
    return(<>
    <Register/>
    </>)
}
export {HomePage,LoginPage,RegisterPage}