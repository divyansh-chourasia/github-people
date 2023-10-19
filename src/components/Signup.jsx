import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <main className="main-container">
        <h1 className="logo">LOGO</h1>

        <div className="main-content">
          <div className="board">Board.</div>
          <div className="auth-container">
            <h1>Sign Up</h1>
            <p>Sign up to your acount</p>
            {error && <p className="error-msg">{error}</p>}

            <form onSubmit={handleSubmit} className="form-contaier">
              <div className="form-input-container">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-input-container">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-input"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <p className="forgot-password">
                Already have an account?
                <Link to="/">Log In </Link>
              </p>

              <button type="submit" className="button">
                Sign up
              </button>
            </form>
          </div>
        </div>

        <div className="social-links">
          <AiFillGithub />
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <IoLogoDiscord />
        </div>
      </main>
    </>
  );
};

export default Signup;
