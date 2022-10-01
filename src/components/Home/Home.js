import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { icon } from "../../public/icon/icon";
import Form from "../form/Form";
import { Link } from "react-router-dom";
function Home(props) {
  const setStatus = props.props.function.setStatus;
  const popUp = props.props.item.popUp;
  const status = props.props.item.status;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    axios({
      url: "https://test-binar.herokuapp.com/v1/products",
      method:'GET',
      headers: {
        authorization: token,
      },
    }).then((res) => {
      setData(res.data.result);
    });
  }, []);
  return (
    <>
      <div className=" w-full h-0 sticky top-0 z-10 ">
        <div
          id="popup"
          className=" relative hidden w-full h-screen justify-center p-8  bg-low-black flex items-center"
        >
          <div
            onClick={() => {
              popUp.classList.toggle("hidden");
            }}
            className="absolute w-8 h-8 top-0 right-0 mx-3 my-3 hover:cursor-pointer"
          >
            {icon.close}
          </div>
          <div className="login-form">
            <Form props={{item:{popUp,status}}} />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="p-8 grid grid-cols-3 gap-6">
          {data.map((data) => {
            return (
              <>
                <div className="relative sm:h-80 hover:bg-gray-300 shadow-gray-600 hover:-translate-y-3 transition ease-out duration-500 rounded bg-white border-gray-300 shadow-md overflow-hidden my-2 pb-4">
                  <img
                    className="h-40 sm:h-52 w-full object-cover "
                    src={data?.image_url ? "" + data?.image_url : ""}
                    alt={data.name}
                  />
                  <div className="m-4">
                    <span className="font-bold">{data.name}</span>
                    <span className="block text-gray-500 text-sm">
                      {formatter.format(data.price)}
                    </span>
                  </div>
                  <div className="w-full h-full justify-end p-3 opacity-0 hover:opacity-100 flex gap-3 absolute right-0 top-0 transition duration-300 ease-in">
                    <div
                      onClick={() => {
                        popUp.classList.toggle("hidden");
                        setStatus({type:'edit',id:data.id})
                      }}
                      className="w-6 h-6 hover:cursor-pointer hover:fill-slate-400 duration-300 ease-out transition"
                    >
                      {icon.edit}
                    </div>
                    <div 
                    onClick={() => {
                      popUp.classList.toggle("hidden");
                      setStatus({type:'delete',id:data.id})
                    }}
                    className="w-6 h-6 hover:cursor-pointer hover:fill-slate-400 duration-300 ease-out transition">
                      {icon.trash}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Home;
