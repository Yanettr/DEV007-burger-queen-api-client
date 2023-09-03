/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';



const NavLinks = () => (
  <div className="menu-container">
    <NavLink to="/" className="nav-link">Cerrar Sesión</NavLink>
    <NavLink to="/OrderReady" className="nav-link">Órdenes</NavLink>
  </div>
);

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userRole = localStorage.getItem('userRole');
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Definir el nombre de archivo de imagen basado en el rol
  let userImageSrc = '/img/usuario.png'; // Imagen por defecto
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
