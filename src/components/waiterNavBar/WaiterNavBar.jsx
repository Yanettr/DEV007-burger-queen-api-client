/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from "react-router-dom";
import './WaiterNavBar.css';
import AdminImage from "../../../img/admin.png";
import LogoOut from "../../assets/logout.png";

const WaiterNavBar = () => {
  const navigate = useNavigate();

    function signOut() {
        navigate('/');
    }
  return (
    <nav className="navbar">
      <div className='nav'>
        <div className="waiter-navBar">
          <img src={AdminImage} alt="waiter" className="waiter-nav"/> {/* Usamos la imagen importada */}
        </div>
        <div className="signout-waiter" onClick={signOut}>
                    <img src={LogoOut} alt="Icon for sign out" className="icon-waiter" />
                </div>
        
      </div>
    </nav>
  );
};

export default WaiterNavBar;
