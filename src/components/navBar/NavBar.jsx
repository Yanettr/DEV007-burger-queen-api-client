/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';



const NavLinks = () => (
  <div className="menus-container">
    <NavLink to="/" className="nav-links">Cerrar Sesión</NavLink>
    <NavLink to="/Waiter" className="nav-links">Crear Pedido</NavLink>
    <NavLink to="/Order" className="nav-links">Órdenes</NavLink>
  </div>
);

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userRole = localStorage.getItem('userRole');
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  let userImageSrc = '/img/usuario.png'; 
  if (userRole === 'admin') {
    userImageSrc = '/img/admin.png';
  } else if (userRole === 'chef') {
    userImageSrc = '/img/chef.png';
  } else if (userRole === 'waiter') {
    userImageSrc = '/img/waiter.png';
  }

  return (
    <nav className="navbar">
      <div className='nav'>
      <div className="user-navBar">
        <img src={userImageSrc} alt="Logo" className="user-nav" />
      </div>
      <button onClick={toggleDropdown} className="dropdown-button">
      </button>
      </div>
      <div className='navDesplegable'>
      {isDropdownOpen && <NavLinks />}
      </div>
    </nav>
  );
};

export default NavBar;
