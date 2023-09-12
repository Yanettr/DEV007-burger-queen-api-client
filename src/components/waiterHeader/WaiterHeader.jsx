/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './WaiterHeader.css';
import Title from '../title/Title';
import WaiterNavBar from '../waiterNavBar/waiterNavBar';



function WaiterHeader({title}) {

  return (
    <header className="header">
      <WaiterNavBar/>
      <div className='title-header'>
      <Title title={title} />
      </div>
    </header>
  );
}


WaiterHeader.propTypes = {
  title: PropTypes.string.isRequired, 
};

export default WaiterHeader;

