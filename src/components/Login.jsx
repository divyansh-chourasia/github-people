import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { PiAppleLogoDuotone } from "react-icons/pi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className="main-container">
      <h1 className="logo">LOGO</h1>

      <div className="main-content">
        <div className="board">Board.</div>
        <div className="auth-container">
          <h1>Sign In</h1>
          <p>Sign in to your acount</p>

          {error && <p className="error-msg">{error}</p>}

          <div className="auth-social">
            <p onClick={handleGoogleSignIn} className="google">
              {" "}
              <FcGoogle />
              Sign in with Google
            </p>
            <p onClick={handleGoogleSignIn} className="google">
              <PiAppleLogoDuotone />
              Sign in with Apple
            </p>
          </div>

          <form onSubmit={handleSubmit} className="form-contaier">
            {/* <div > */}
            <div className="form-input-container">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name=""
                id=""
                className="form-input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-input-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name=""
                id=""
                className="form-input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* </div> */}

            <p className="forgot-password"> Forgot Password?</p>

            <button type="submit" className="button">
              Sign In
            </button>
          </form>

          <div className="dont-account">
            Don't have an account? <Link to="/signup">Register here</Link>
          </div>
        </div>
      </div>

      <div className="social-links">
        <AiFillGithub />
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <IoLogoDiscord />
      </div>
    </main>
  );
};

export default Login;
