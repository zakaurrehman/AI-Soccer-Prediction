


import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation after successful login
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import "../assets/css/style.css"; // Main template CSS
import logo from "../assets/img/icon.png"; // Import the logo image
import CONFIG from "../config";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // New state for toggling password visibility
  const navigate = useNavigate(); // Hook for navigation

  const handleLoginFunc = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      toast.error("Please enter both username and password");
      return;
    }

    axios.post(CONFIG.baseURL + "/api/auth/signin", {
      email: username,
      password,
    })
    .then((response) => {
      // Assuming the response data contains 'token', 'username', and 'userId'
      const { token, username, userId } = response.data;

      // Store the token, username, and userId in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      localStorage.setItem("userId", userId); // Store userId in localStorage

      // Optionally, store other user data if needed
      // localStorage.setItem("userData", JSON.stringify(response.data));

      toast.success("Login successful!");
      navigate("/Betoftheday"); // Redirect to dashboard on success
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        toast.error("Invalid username or password. Please try again.");
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle the password visibility
  };

  return (
    <main style={{ backgroundColor: "#2C3442", color: "white" }}>
      <ToastContainer />
      <div className="container" style={{ backgroundColor: "#2C3442", color: "white" }}>
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4" style={{ backgroundColor: "#2C3442", color: "white" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a 
                    href="/" 
                    className="logo d-flex align-items-center w-auto" 
                    style={{ textDecoration: 'none' }} // Remove underline by default
                  >
                    <img src={logo} alt="AI PROGNOZA Logo" />
                    <span className="d-none d-lg-block" style={{ color: "#d00102" }}>
                      AI PROGNOZA
                    </span>
                  </a>
                </div>

                {/* End Logo */}

                <div className="card mb-3" style={{ backgroundColor: "#2C3442", color: "white" }}>
                  <div className="card-body" style={{ backgroundColor: "#2C3442", color: "white", border: "2px solid #FF5733", borderRadius: "10px" }}>
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                      <p className="text-center small">Enter your username & password to login</p>
                    </div>

                    <form className="row g-3 needs-validation" noValidate onSubmit={handleLoginFunc}>
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">Email</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="inputGroupPrepend" style={{ color: "red" }}>@</span>
                          <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="yourUsername"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                            style={{ backgroundColor: "white", color: "black" }}
                          />
                          <div className="invalid-feedback">Please enter your email.</div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">Password</label>
                        <div className="input-group has-validation">
                          <input
                            type={passwordVisible ? "text" : "password"} // Toggle between text and password
                            name="password"
                            className="form-control"
                            id="yourPassword"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            style={{backgroundColor:'white',color:'black'}}
                          />
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                            style={{ cursor: "pointer", color: passwordVisible ? "red" : "gray" }} // Color toggle for the eye icon
                            onClick={togglePasswordVisibility} // Handle click event to toggle visibility
                          >
                            <i style={{color:'red'}} className={`bi ${passwordVisible ? "bi-eye" : "bi-eye-slash" }`}></i> {/* Toggle eye icon */}
                          </span>
                        </div>
                        <div className="invalid-feedback">Please enter your password!</div>
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            value="true"
                            id="rememberMe"
                          />
                          <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                        </div>
                      </div>

                      <div className="col-12">
                        <button className="btn btn-danger w-100" type="submit">Login</button>
                      </div>

                      <div className="col-12">
                        <p className="small mb-0">Don't have an account? <a href="Register" style={{ color: "red" }}>Create an account</a></p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </main>
  );
};

export default Login;


