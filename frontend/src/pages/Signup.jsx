import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (user.name === "" || user.email === "" || user.password === "") {
      setMessage("Please complete all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "https://smart-it-equipment-advisor-2.onrender.com/users/signup",
        user,
      );

      alert(response.data.message);

      navigate("/login");
    } catch (error) {
      setMessage(error.response?.data?.message || "Unable to create account.");
    }
  };

  return (
    <div className="signupContainer">
      <div className="signupCard">
        <h1>Create Account</h1>

        {message && <p className="signupMessage">{message}</p>}

        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
