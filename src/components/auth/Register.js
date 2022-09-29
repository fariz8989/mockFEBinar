import React ,{useState,useRef}from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
    const [data,setData]=useState({});
    const errDisplay = useRef();
    const navigate = useNavigate();
    function handleSubmit(){
        const email = data.email;
        const password = data.password;
        const name = data.name
  
        if(!email|| !password||!name){
            errDisplay.current.innerText = "Name,Email or Password Can't Empty"
          
        }else{
            axios.post('https://test-binar.herokuapp.com/auth/signup',data).then(res=>{
                navigate('/')
              
              })
        }
    }
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="login-form">
          <h1 className="text-3xl font-bold uppercase my-4">Register</h1>
          <div className="inputBox my-2">
            <input
              className="focus:ring-0 focus:border-black"
              type="text"
              required="required"
              name="name"
              onChange={(e)=>{
                setData({...data,name:e.target.value})
              }}
            />
            <span>Name</span>
          </div>
          <div className="inputBox my-2">
            <input
              className="focus:ring-0 focus:border-black"
              type="text"
              required="required"
              name="email"
              onChange={(e)=>{
                setData({...data,email:e.target.value})
              }}
            />
            <span>Email</span>
          </div>
          <div className="inputBox my-2">
            <input
              className="focus:ring-0 focus:border-black"
              type="text"
              required="required"
              name="password"
              onChange={(e)=>{
                setData({...data,password:e.target.value})
              }}
            />
            <span>Password</span>
          </div>
          <button onClick={(e)=>{
            e.preventDefault()
            handleSubmit()
          }} className="buttonLogin">Register</button>
             <span ref={errDisplay} className="my-4"></span>
          <span className="my-4">
            Already have account?{" "}
            <Link
              className="text-gray-400 hover:text-black transition duration-300 ease-out text-sm underline"
              to="/"
            >
              Login
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
export default Register;
