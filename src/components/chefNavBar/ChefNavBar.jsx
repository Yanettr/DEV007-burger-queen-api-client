/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../components/navBar/NavBar.css';

const NavLinks = () => (
  <div className="menus-container">
    <NavLink to="/" className="nav-links">Cerrar Sesión</NavLink>
    <NavLink to="/Order" className="nav-links">Órdenes</NavLink>
  </div>
);

const ChefNavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userRole = localStorage.getItem('userRole');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getUserImageSrc = () => {
    switch (userRole) {
      case 'admin':
        return '/img/admin.png';
      case 'chef':
        return '/img/chef.png';
      case 'waiter':
        return '/img/waiter.png';
      default:
        return '/img/usuario.png';
    }
  };

  return (
    <nav className="navbar">
      <div className='nav'>
        <div className="user-navBar">
          <img src={getUserImageSrc()} alt="User" className="user-nav" />
        </div>
      </div>
    </nav>
  );
};

export default ChefNavBar;
