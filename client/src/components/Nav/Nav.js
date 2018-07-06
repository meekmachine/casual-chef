import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg bg-primary">
    <a className="navbar-brand" href="/">
      Home
    </a>

    <a className="navbar-brand" href="/recipes">
      Browse Recipes
    </a>

    <a className="navbar-brand" href="/saved">
      Dinner Ideas
    </a>

     <a className="navbar-brand" href="/list">
      Grocery List
    </a>

  </nav>
);

export default Nav;
