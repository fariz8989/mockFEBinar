import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Navbar(props){
   const setStatus = props.props.function.setStatus;
   const popUp = props.props.item.popUp;
    return(<>
    
    <div className="w-full justify-between flex bg-gray-300 px-20 py-6">
        <div className="flex gap-8 items-center">
           <h1 className="text-3xl font-bold">Product List</h1> 
            <button 
                onClick={()=>{
                    setStatus('new');
                    popUp.classList.toggle('hidden')
                   
                }}
            className="transition duration-300 ease-out hover:bg-black hover:text-gray-300 py-2 px-6 rounded-md text-md font-semibold border-black border-4">Create New</button>
        </div>
        <ul className="flex justify-evenly items-center">
            <Link to={"/Login"}>
            <li className="text-lg font-semibold">Login</li>
            </Link>
        </ul>
    </div>
    </>)
}
export default Navbar;