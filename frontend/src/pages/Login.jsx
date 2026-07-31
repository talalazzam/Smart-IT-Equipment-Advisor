import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Admin.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const response = await axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("userName", response.data.user.name);

        if (response.data.role === "admin") {
          localStorage.setItem("isAdmin", "true");
          navigate("/admin");
        } else {
          localStorage.setItem("isAdmin", "false");
          navigate("/");
        }

        window.location.reload();
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.log(err);
      setError("Unable to connect to the server.");
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginCard">
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
