import React, { useState } from "react";
import {  FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let [input,setInput] = useState({
    email:" ",
    password:" "
  });
  let [showPassword,setShowPassword]=useState(false)
  
  let navigate = useNavigate();
  function handleinput(e) {
    setInput({...input,[e.target.name]:e.target.value});
  }
  
  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    })
      .then((res) => res.text())
      .then((mes) => {
        alert(mes);
        if (mes === "Login Successfully") navigate("/home");
      });
  }
  return (
   
    <div className="Login">
      <div className="formlogin">
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={input.email}
            onChange={handleinput}
            required
          />
          <div className="password">
            <input
            type={showPassword?"text":"password"}
            placeholder="Enter Your Password"
            name="password"
            value={input.password}
            onChange={handleinput}
            required
            pattern="(?=.*[!@#$%^&*])([A-Z]).{7,16}"
          />
          <div className="eye" onClick={()=>{setShowPassword(!showPassword)}}>{showPassword ? <FaRegEye/> : <FaRegEyeSlash/>}</div>
          </div>
          <button type="submit">Login</button>
          <p>Don't have an account?</p>
          <Link to={"/Signup"}>Sign up</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
