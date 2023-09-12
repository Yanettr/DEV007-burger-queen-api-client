/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './WaiterNavBar.css';
import AdminImage from "../../../img/admin.png";
import LogoOut from "../../assets/logout.png";
import { useNavigate } from "react-router-dom";

const WaiterNavBar = () => {
  const navigate = useNavigate();

  const userRole = localStorage.getItem('userRole');

  let userImageSrc = '/img/usuario.png'; 
  if (userRole === 'admin') {
    userImageSrc = '/img/admin.png';
  } else if (userRole === 'chef') {
    userImageSrc = '/img/chef.png';
  } else if (userRole === 'waiter') {
    userImageSrc = '/img/waiter.png';
  }

  function signOut() {
    localStorage.removeItem('userRole');
    navigate('/');
  }

  return (
    <nav className="navbar">
      <div className='nav'>
        <div className="waiter-navBar">
          <img src={AdminImage} alt="waiter" className="waiter-nav"/> 
        </div>
        <div className="signout-waiter" onClick={signOut}>
          <img src={LogoOut} alt="Icon for sign out" className="icon-waiter" />
        </div>
      </div>
    </nav>
  );
};

export default WaiterNavBar;
