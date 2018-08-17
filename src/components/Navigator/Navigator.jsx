import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";

import './Navigator.css';

const Navigator = () => {
  return (
    <Router>
      <ul>
        <li>
          <NavLink
            activeClassName='active'
            exact to='/'>Trending Now</NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='active'
            to='/random'>Random</NavLink>
        </li>
      </ul>
    </Router>
  );
}

export default Navigator;
