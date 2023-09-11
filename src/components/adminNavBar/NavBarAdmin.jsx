/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from "react-router-dom";
import './NavBarAdmin.css';
import AdminImage from "../../../img/admin.png";
import LogoOut from "../../assets/logout.png";

const NavBarAdmin = () => {
  const navigate = useNavigate();

    function signOut() {
        navigate('/');
    }
  return (
    <nav className="navbar">
      <div className='nav'>
        <div className="user-navBar">
          <img src={AdminImage} alt="Admin" className="user-nav"/> {/* Usamos la imagen importada */}
        </div>
        <div className="signout-admin" onClick={signOut}>
                    <img src={LogoOut} alt="Icon for sign out" className="icon" />
                </div>
        
      </div>
    </nav>
  );
};

export default NavBarAdmin;
