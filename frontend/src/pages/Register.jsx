import React, { useState } from "react";
import "./Register.css";


const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRegister = () => {
    console.log("User Registered:", user);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};
  
export default Register;