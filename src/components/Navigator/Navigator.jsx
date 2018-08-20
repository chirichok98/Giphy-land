import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigator.css";

const Navigator = () => {
  return (
    <ul>
      <li>
        <NavLink activeClassName="active" exact to="/">
          Trending Now
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/random">
          Random
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigator;
