import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login(){
    const navigate = useNavigate()
    const [data,setData]=useState({});
    const errDisplay = useRef();
    function handleSubmit(){
        const email = data.email;
        const password = data.password;
        if(!email|| !password){
            errDisplay.current.innerText = "Email or Password Can't Empty"
          
        }else{
            axios.post('https://test-binar.herokuapp.com/auth/login',data).then(res=>{
        
                const err = res.data.errors
                if(err){
                    errDisplay.current.innerText = "Email or Password is not correct"
                }else{
                    sessionStorage.setItem('token',res.data.result.access_token);
          
                    navigate('/Dashboard')
                }
              })
        }
    }
return(<>
<div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="login-form">
        <h1 className="text-3xl font-bold uppercase my-4">Login</h1>
          <div className="inputBox my-2">
              <input onChange={(e)=>{
                setData({...data,email:e.target.value})
              }} className="focus:ring-0 focus:border-black"type="text"required="required" name="email"/>
              <span>Email</span>
          </div>
          <div className="inputBox my-2">
              <input
              onChange={(e)=>{
                setData({...data,password:e.target.value})
              }}
              className="focus:ring-0 focus:border-black"type="text"required="required" name="password"/>
              <span>Password</span>
          </div>
          <button onClick={()=>{
            handleSubmit()
          }} className="buttonLogin">Login</button>
          <span ref={errDisplay} className="my-4"></span>
          <span className="my-4">Don't have an account? <Link className="text-gray-400 hover:text-black transition duration-300 ease-out text-sm underline"to="/Register">SignUp</Link></span>
          </div>
    </div>


</>)
}
export default Login;