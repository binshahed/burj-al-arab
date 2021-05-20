import React from "react";
import { FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="menu">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/login">
          Login
        </Link>
        <Link className="link" to="/book">
          Book
        </Link>
      </div>
      <div className="title-container">
        <h1> Burj Al Arab</h1>
        <h2>A global icon of Arabian luxury</h2>
      </div>
    </div>
  );
};

export default Header;
