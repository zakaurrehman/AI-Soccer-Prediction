


import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icons
import "../assets/css/style.css"; // Main template CSS
import logo from "../assets/img/icon.png"; // Import the logo image
import CONFIG from "../config";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleRegisterFunc = (e) => {
    e.preventDefault();
    if (!name || !email || !username || !password) {
      toast.error("Please fill out all fields");
      return;
    }

    axios
      .post(CONFIG.baseURL + "/api/auth/signup", {
        name,
        email,
        username,
        password,
      })
      .then((response) => {
        console.log("Registration successful:", response.data);
        toast.success("Account created successfully. Please verify your account.");
      })
      .catch((error) => {
        console.error("Registration error:", error);
        toast.error("An error occurred during registration.");
      });
  };

  return (
    <main style={{ backgroundColor: "#2C3442", color: "white" }}>
      <ToastContainer />
      <div className="container" style={{ backgroundColor: "#2C3442", color: "white" }}>
        <section
          className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4"
          style={{ backgroundColor: "#2C3442", color: "white" }}
        >
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
                      <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                      <p className="text-center small">Enter your personal details to create an account</p>
                    </div>

                    <form className="row g-3 needs-validation" noValidate onSubmit={handleRegisterFunc}>
                      {/* Name Field */}
                      <div className="col-12">
                        <label htmlFor="yourName" className="form-label">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="yourName"
                          required
                          onChange={(e) => setName(e.target.value)}
                        />
                        <div className="invalid-feedback">Please, enter your name!</div>
                      </div>

                      {/* Username Field */}
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">Username</label>
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
                          <div className="invalid-feedback">Please choose a username.</div>
                        </div>
                      </div>

                      {/* Email Field with Icon */}
                      <div className="col-12">
                        <label htmlFor="yourEmail" className="form-label">Your Email</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="inputGroupPrepend2" style={{ color: "red" }}>
                            <i className="bi bi-envelope"></i>
                          </span>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="yourEmail"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            style={{backgroundColor:'white',color:'black'}}
                          />
                          <div className="invalid-feedback">Please enter a valid email address!</div>
                        </div>
                      </div>

                      {/* Password Field with Eye Toggle */}
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">Password</label>
                        <div className="input-group has-validation">
                          <input
                            type={passwordVisible ? "text" : "password"}
                            name="password"
                            className="form-control"
                            id="yourPassword"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            style={{backgroundColor:'white',color:'black'}}
                          />
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend3"
                            style={{ cursor: "pointer", color: "red" }}
                            onClick={() => setPasswordVisible(!passwordVisible)}
                          >
                            <i style={{color:'red'}} className={`bi ${passwordVisible ?"bi-eye" :"bi-eye-slash"  }`}></i>
                          </span>
                        </div>
                        <div className="invalid-feedback">Please enter your password!</div>
                      </div>

                      {/* Terms and Conditions */}
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            name="terms"
                            type="checkbox"
                            id="acceptTerms"
                            required
                          />
                          <label className="form-check-label" htmlFor="acceptTerms">
                            I agree and accept the{" "}
                            <a href="TermsOfUse" style={{ color: "red" }}>terms and conditions</a>
                          </label>
                          <div className="invalid-feedback">You must agree before submitting.</div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="col-12">
                        <button className="btn btn-danger w-100" type="submit">Create Account</button>
                      </div>

                      {/* Login Link */}
                      <div className="col-12">
                        <p className="small mb-0">
                          Already have an account?{" "}
                          <a href="Login" style={{ color: "red" }}>Log in</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="credits">
                  {/* Optional credits or footer information */}
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

export default Register;




