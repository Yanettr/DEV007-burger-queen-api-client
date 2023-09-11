/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './ChefNavBar.css';

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

  
  if (!userRole) {
    return null; 
  }

  return (
    <nav className="navbar">
      <div className='nav'>
        <div className="user-navBar">
          <img src={getUserImageSrc()} alt="Chef" className="chef-nav" />
        </div>
      </div>
    </nav>
  );
};

export default ChefNavBar;
