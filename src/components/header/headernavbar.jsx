import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './headernavbar.css';

class HeaderNavbar extends Component {
  // Define navigation links
  navLinks = [
    { path: '/', text: 'Dashboard' },
    { path: '/about', text: 'About' },
    { path: '/login', text: 'Login' },
  ];

  // Function to render navigation links
  renderNavLinks() {
    return this.navLinks.map((link, index) => (
      <li key={index}>
        <NavLink exact to={link.path} activeclassname="active">
          {link.text}
        </NavLink>
      </li>
    ));
  }

  render() {
    return (
      <div className="navbar">
        <nav>
          <ul>
            {this.renderNavLinks()} {/* Render navigation links */}
          </ul>
        </nav>
      </div>
    );
  }
}

export default HeaderNavbar;
