

import React, { useState } from "react";
import "./Login.css"; // Ensure this file exists

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    console.log("User Logged In:", credentials);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <input type="text" name="email" placeholder="Email" onChange={handleChange} />
      <button onClick={handleLogin}>Login</button> {/* ✅ No error now */}
    </div>
  );
};

export default Login;