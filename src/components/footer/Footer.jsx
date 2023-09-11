/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import backButton from '../../assets/backBtn.png'
import logoutButton from '../../assets/logout.png'

function Footer() {
  return (
    <footer>
      <div className='footer-button'>
        <Link to='/'>
          <img src={backButton} alt='Regresar' /> 
        </Link>
      </div>
      <div className='footer-button'>
        <Link to='/logout'>
          <img src={logoutButton} alt='Salir' /> 
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
