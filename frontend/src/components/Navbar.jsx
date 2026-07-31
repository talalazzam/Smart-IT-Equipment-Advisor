import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  const userName = localStorage.getItem("userName");
  const isLoggedIn = userName !== null;
  const isAdmin = role === "admin";

  const logout = () => {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");

    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/equipment">Equipment</Link>
        </li>

        <li>
          <Link to="/recommendations">Recommendations</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        {!isLoggedIn ? (
          <>
            <li>
              <Link className="loginButton" to="/login">
                Login
              </Link>
            </li>

            <li>
              <Link className="signupButton" to="/signup">
                Sign Up
              </Link>
            </li>
          </>
        ) : (
          <>
            {isAdmin && (
              <li>
                <Link className="adminButton" to="/admin">
                  Admin Panel
                </Link>
              </li>
            )}

            <li>
              <button className="logoutButton" onClick={logout}>
                Logout of {userName}
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
