import React from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import authAdmin from "../utils/authAdmin";
import image from "../Assets/image.png";

function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (email === "" || password === "") {
      toast.error("Email and password fields are required");
    } else {
      // make a POST request to the login route on the back-end server

      await axios
        .post("http://localhost:8000/users/admin/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.data.message === "Successfully logged in") {
            toast.success("Successfully logged in");
            localStorage.setItem("isAdminLogged", true);
            navigate("/user/admin/dashboard", {
              state: { user: response.data.user },
            });
          } else if (response.data.message === "Invalid Password") {
            toast.error("Invalid Password");
          } else if (response.data.message === "User not found") {
            toast.error("User not found");
          } else {
            console.log(response.data.message);
            toast.error("Email and Password fields are invalid");
          }
        });
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="main">
        <div className="main-left flex-box">
          <div className="login-text">
            <p>Login as Admin</p>
            <hr className="line"></hr>
          </div>
          <div className="form">
            <form action="" className="box-grp">
              <input
                className="form-box"
                type="text"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              ></input>
              <input
                className="form-box"
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              ></input>

              <button
                type="submit"
                className="form-box"
                id="submit-btn"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="main-right">
          <img src={image} className="img" alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
}

export default authAdmin(LoginAdmin);