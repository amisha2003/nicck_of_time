import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
 import mainImage from "./logo.webp";
import { Link } from "react-router-dom";

function Navbar(props) {
  console.log(props);

  function handleClick(event) {
    props.onSet(null);
    window.localStorage.clear();
    console.log("working");
  }

  const links = MenuItems.map((item, index) => {
    return (
      <li
        className="nav-item"
        key={index}
        onClick={index === 3 ? handleClick : null}
      >
        <Link
          className={
            props.isUser
              ? index === 4 || index === 5
                ? "hidden-button"
                : item.cName
              : index === 1 || index === 3 || index === 2 || index === 0
              ? "hidden-button"
              : item.cName
          }
          to={item.url}
        >
          {item.title}
        </Link>
      </li>
    );
  });

  console.log(props.isUser);
  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="navbar-logo">
          <img  src={mainImage} alt="fireSpot" height="42" width="42" />
            Nick Of Time
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">{links}</ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
