import React, { useState,useEffect } from "react";
import { Link,Outlet } from "react-router-dom";
import './Ecommerce.css'
import Ecommercre_main from "./Ecommercre_main";
import API_BASE_URL from "../api";
const Ecommerce = () => {
 

 
  return (
    <div className="Ecommerce">
      <nav >
        <div className="left">
          <Link to="/ecommerce_main">Logo</Link>
        </div>
       
        <div className="right">
           <Link to={"/login"}> <button>Login</button></Link>
           <Link to={"/signup"}> <button>Sign</button></Link>
        </div>
      </nav>
      <Outlet></Outlet>
      {location.pathname !== "/login" && location.pathname !== "/signup" &&(<Ecommercre_main></Ecommercre_main>)}
       
    </div>
  );
};

export default Ecommerce;
