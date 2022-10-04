import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "" && password === "") {
      alert("Please enter username and password to login");
    } else if (userName === "") {
      alert("Please Enter UserName");
    } else if (password === "") {
      alert("Please Enter Password");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="mainLog">
      <h1>Login</h1>
      <div className="login">
        <form>
          <label>
            <span>username</span>
          </label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
          />
          <br />
          <label>
            <span>Password</span>
          </label>
          <br />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <br />
          <button type="submit" className="SignIn" onClick={handleSubmit}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
