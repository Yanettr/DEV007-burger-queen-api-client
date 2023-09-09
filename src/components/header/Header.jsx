/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import Title from '../title/Title';
import NavBar from '../NavBar/NavBar';


function Header({title}) {

  return (
    <header className="header">
      <NavBar />
      <div className='title-header'>
      <Title title={title} />
      </div>
    </header>
  );
}


Header.propTypes = {
  title: PropTypes.string.isRequired, 
};

export default Header;

