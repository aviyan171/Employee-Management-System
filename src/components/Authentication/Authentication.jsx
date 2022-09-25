import React, { useState } from "react";
import "./Authentication.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Context";

const Authentication = () => {
  const {
    Email,
    Password,
    LoginDetails,
    setEmail,
    setPassword,
    setLoginDetails,
  } = useData();

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const loginField = { Email, Password };
    const regexforemail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regaxforonespecialcharacter =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
    if (loginField.Email === "" && loginField.Password === "") {
      alert("Email and passoword fields cannot be empty");
    } else if (loginField.Password === "") {
      alert("Please Insert Password");
    } else if (loginField.Email === "") {
      alert("Email cannot be empty");
    } else if (!regexforemail.test(loginField.Email)) {
      alert("Please Insert Valid Email");
    } else if (loginField.Password.length < 8) {
      alert("Password must be of 8 characters");
    } else if (!regaxforonespecialcharacter.test(loginField.Password)) {
      alert("You must have atleast 1 special characters and 1 uppercase");
    } else {
      setLoginDetails([...LoginDetails, loginField]);
      setEmail("");
      setPassword("");
      alert("Login Success Redirecting to Home Page");
      navigate("/dashboard");
    }
  };

  return (
    <div className="Login-Form ">
      <h3>Welcome to Employee Management System</h3>
      <div className="login-field">
        <p className="text">Login to Employee Management System</p>
        <input
          className="Input-tag"
          type="email"
          value={Email}
          onChange={handleEmailChange}
          placeholder="Your Email Id"
        />
        <input
          className="Input-tag"
          type="password"
          value={Password}
          onChange={handlePasswordChange}
          placeholder="Your password"
        />
        <button onClick={handleLogin} className="btn">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Authentication;
