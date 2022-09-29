import axios from "axios";
import React, { useEffect, useState } from "react";
export default function Form(props) {
  /* console.log(props.props.id) */
  const id = props.props?.id;
  const [product, setProduct] = useState({});
  const[edit,setEdit]=useState({})
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    
    axios({
      url: `https://test-binar.herokuapp.com/v1/products/${id}`,
      method: "GET",
      headers: { authorization: token },
    }).then((res) => {
      setProduct(res.data.result);
    });
  }, [id]);
  function handleEdit(){
    axios({
        url: `https://test-binar.herokuapp.com/v1/products/${id}`,
        method: "PUT",
        headers: { authorization: token,'Content-Type':'application/json','Access-Control-Allow-Origin': '*'},
        body:edit
      }).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
  }
  switch (props.props.type) {
    case "new":
      return (
        <>
          <h1 className="text-3xl font-bold uppercase my-4">Create New</h1>
          <div className="inputBox my-2">
            <input
              onChange={(e) => {}}
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
              onChange={(e) => {}}
              className="focus:ring-0 focus:border-black"
              type="number"
              required="required"
              name="price"
            />
            <span>{"Price (Dollar USD)"}</span>
          </div>
          <div className="inputBox my-2">
            <input
              onChange={(e) => {}}
              className="focus:ring-0 focus:border-black"
              type="text"
              required="required"
              name="url"
            />
            <span>{"Image URL"}</span>
          </div>
          <button onClick={() => {}} className="buttonLogin">
            Create
          </button>
          <span className="my-4"></span>
          <span className="my-4 text-gray-400 hover:text-black transition duration-300 ease-out text-sm underline">
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
          <span className="my-4 text-gray-400 hover:text-black transition duration-300 ease-out text-sm underline">
            Back
          </span>
        </>
      );
      break;

    default:
      break;
  }
}
