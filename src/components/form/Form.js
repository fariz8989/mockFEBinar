import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Form(props) {
  /* console.log(props.props.id) */
  const navigate = useNavigate()
const [create,setCreate] =useState({});
  const id = props.props.item.status?.id;
  const [product, setProduct] = useState({});
  const[edit,setEdit]=useState({})
  const token = sessionStorage.getItem("token");
  const popUp = props.props.item.popUp;
  useEffect(() => {
    
    axios({
      url: `https://test-binar.herokuapp.com/v1/products/${id}`,
      method: "GET",
      headers: { authorization: token },
    }).then((res) => {
      setProduct(res.data.result);
      console.log(res.data.result)
   
    }).catch(err=>{
      
    });
  }, [id]);
  function handleEdit(){
    axios({
        url: `https://test-binar.herokuapp.com/v1/products/${id}`,
        method: "PUT",
        headers: { authorization: token,'Content-Type':'application/json'},
        body:edit
      }).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
  }
  function handleDelete(){
    axios({
      url: `https://test-binar.herokuapp.com/v1/products/${id}`,
      method: "DELETE",
      headers: { authorization: token,'Content-Type':'application/json'}
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  function handleCreate(){
    axios.post(`https://test-binar.herokuapp.com/v1/products/`,create,{headers: { authorization: token,'Content-Type':'application/json'}}
      
    ).then(res=>{
      console.log(res)
      alert('Upload Succes')
    window.location.reload()
      
    }).catch(err=>{
      console.log(err)
    })
  }
  switch (props.props.item?.status.type) {
    case "new":
      return (
        <>
          <h1 className="text-3xl font-bold uppercase my-4">Create New</h1>
          <div className="inputBox my-2">
            <input
              onChange={(e) => {
                setCreate({...create,name:e.target.value})
              }}
              className="focus:ring-0 focus:border-black"
              type="text"
              required="required"
              name="name"
          
         
            />
            <span>Product Name</span>
          </div>
          <div className="inputBox my-2">
            <input
               onChange={(e) => {
                setCreate({...create,price:e.target.value})
              }}
              className="focus:ring-0 focus:border-black"
              type="number"
              required="required"
              name="price"
              
            />
            <span>{"Price (Dollar USD)"}</span>
          </div>
          <div className="inputBox my-2">
            <input
               onChange={(e) => {
                setCreate({...create,imageurl:e.target.value})
              }}
              className="focus:ring-0 focus:border-black"
              type="text"
              required="required"
              name="url"
             
            />
            <span>{"Image URL"}</span>
          </div>
          <button onClick={() => {
            handleCreate();
          }} className="buttonLogin">
            Create
          </button>
          <span className="my-4"></span>
          <span 
          onClick={()=>{
            popUp.classList.toggle('hidden')
          }}
          className="hover:cursor-pointer my-4 text-gray-400 hover:text-black transition duration-300 ease-out text-sm underline">
            Back
          </span>
        </>
      );
      break;
    case "edit":
      return (
        <>
          <h1 className="text-3xl font-bold uppercase my-4">Edit Product</h1>
          <div className="inputBox my-2">
            <input
              onChange={(e) => {
                e.preventDefault();
                setEdit({...edit,name:e.target.value})
              }}
              className="focus:ring-0 focus:border-black"
              type="text"
              required="required"
              name="name"
              value={product.name}
            />
            <span>Product Name</span>
          </div>
          <div className="inputBox my-2">
            <input
                onChange={(e) => {
                    e.preventDefault();
                    setEdit({...edit,price:e.target.value})
                  }}
              className="focus:ring-0 focus:border-black"
              type="number"
              required="required"
              name="price"
              value={product.price}
            />
            <span>{"Price (Dollar USD)"}</span>
          </div>
          <div className="inputBox my-2">
            <input
                onChange={(e) => {
                    e.preventDefault();
                    setEdit({...edit,imageurl:e.target.value})
                  }}
              className="focus:ring-0 focus:border-black"
              type="text"
              required="required"
              name="url"
              value={product.imageurl}
            />
            <span>{"Image URL"}</span>
          </div>
          <button onClick={() => {handleEdit()}} className="buttonLogin">
            Edit
          </button>
          <span className="my-4"></span>
          <span 
          onClick={()=>{
            popUp.classList.toggle('hidden')
          }}
          className="hover:cursor-pointer my-4 text-gray-400 hover:text-black transition duration-300 ease-out text-sm underline">
            Back
          </span>
        </>
      );
      break;
          case 'delete':
            return (
              <>
                <h1 className="text-2xl text-center font-bold uppercase my-4">{`Are You Sure Want To Delete ${product?.name}`} </h1>
                <div className="flex w-full p-4 gap-4">
                  <button 
                   onClick={()=>{
                    popUp.classList.toggle('hidden')
                  }}
                  className="bg-black border-black border-4 text-gray-200 w-1/2 rounded-md hover:text-black hover:bg-gray-200 transition ease-out duration-500">No</button>
                  <button 
                   onClick={()=>{
                    handleDelete().then(popUp.classList.toggle('hidden'))
                  }}
                  className="bg-gray-200 border-black border-4 text-black w-1/2 rounded-md hover:text-gray-200 hover:bg-black transition ease-out duration-500">Yes</button>
                </div>
              </>
            );
            break;
    default:
      break;
  }
}
