import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import "./Signup.css";
import {  FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import API_BASE_URL from "../api";
const Signup = () => {
  let navigate = useNavigate();
  let [showPassword,setShowPassword]=useState(false)
  let[showResetPassword,setShowResetPassword]=useState(false)
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    resetPassword: "",
  });

  function handleFormmData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <div className="Signup">
      <div className="formsignup">
        <h1>Signup</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetch(`${API_BASE_URL}/signup`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
            })
              .then((res) => res.text())
              .then((mes) => {
                alert(mes);
                if (mes === "SignupSuccessfully") navigate("/login");
              });
          }}
        >
          <input
            type="text"
            placeholder="Firstname"
            required
            name="firstName"
            value={formData.firstName}
            onChange={handleFormmData}
          />
          <input
            type="text"
            placeholder="Lastname"
            required
            name="lastName"
            onChange={handleFormmData}
            value={formData.lastName}
          />
          <div className="gender" required>
            <input
              type="radio"
              name="gender"
              onChange={handleFormmData}
              value={"Male"}
              checked={formData.gender === "Male"}
            />
            <label htmlFor="">Male</label>
            <input
              type="radio"
              name="gender"
              onChange={handleFormmData}
              value={"Female"}
              checked={formData.gender === "Female"}
            />
            <label htmlFor="">Female</label>
            <input
              type="radio"
              name="gender"
              onChange={handleFormmData}
              value={"Others"}
              checked={formData.gender === "Others"}
            />
            <label htmlFor="">Other</label>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            value={formData.email}
            onChange={handleFormmData}
          />
          <div className="password">
            <input
            type={showPassword?"text":"password"}
            placeholder="Enter Your Password"
            name="password"
            required
            value={formData.password}
            onChange={handleFormmData}
            pattern="(?=.*[!@#$%^&*])([A-Z]).{7,16}"
          />
          <div className="eye" onClick={()=>{setShowPassword(!showPassword)}}>{ showPassword?<FaRegEye></FaRegEye>: <FaRegEyeSlash></FaRegEyeSlash>}</div>
          </div>

          <div className="resetPassword">
            <input
            type={showResetPassword? "text":"password"}
            placeholder="Enter Your Password"
            name="resetPassword"
            required
            value={formData.resetPassword}
            onChange={handleFormmData}
            pattern="(?=.*[!@#$%^&*])([A-Z]).{7,15}"
          />
          <div className="eye" onClick={()=>{ setShowResetPassword(!showResetPassword)}}>{showResetPassword? <FaRegEye/>:<FaRegEyeSlash />}</div>
          </div>

          <button type="submit">Submit</button>
          <p>Do you already Account?</p>
          <span
            onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
          >
            {" "}
            Login
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
