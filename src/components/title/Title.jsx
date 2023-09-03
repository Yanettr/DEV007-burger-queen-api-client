/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes
import "./title.css"; 
import Logo from '../logo/logo';

function Title({ title }) {
  return (
    <div className='title'>
      <h1>{title}</h1>
      <div className='logo-title'>
        <Logo />
      </div>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired, 
};

export default Title;
