import React, { useEffect, useState } from "react";
import "./Authentication.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Context";
import { ToastContainer } from "react-toastify";

const Authentication = () => {
  const {
    Email,
    Password,
    LoginDetails,
    setEmail,
    setPassword,
    setLoginDetails,
    error,
    Passworderror,
    EmptyEmailerror,
    validEmailError,
    passwordLengthError,
    specialCharacter,
    login,
    isLogin,
  } = useData();

  const navigate = useNavigate();

  const [password, showPassword] = useState(true);

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
      error();
    } else if (loginField.Password === "") {
      Passworderror();
    } else if (loginField.Email === "") {
      EmptyEmailerror();
    } else if (!regexforemail.test(loginField.Email)) {
      validEmailError();
    } else if (loginField.Password.length < 8) {
      passwordLengthError();
    } else if (!regaxforonespecialcharacter.test(loginField.Password)) {
      specialCharacter();
    } else {
      setLoginDetails([...LoginDetails, loginField]);
      setEmail("");
      setPassword("");
      localStorage.setItem("logindetails", JSON.stringify(loginField));
      isLogin(true);
      console.log(login);

      navigate("/dashboard");
    }
  };

  return (
    <div className="Login-Form ">
      <h1>Employee Management System</h1>
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
          type={password ? "password" : "text"}
          value={Password}
          onChange={handlePasswordChange}
          placeholder="Your password"
        />
        <button onClick={handleLogin} className="btn">
          Log in
        </button>
        <label htmlFor="showpassword">Show Password</label>
        <input
          className="checkbox"
          type="checkbox"
          name="showpassword"
          id="showpassword"
          onClick={() => showPassword(!password)}
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Authentication;
