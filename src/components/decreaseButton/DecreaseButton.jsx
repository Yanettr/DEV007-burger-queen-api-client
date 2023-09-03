/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'; 
import './DecreaseButton.css';

const DecreaseButton = ({ onClick }) => {
  return (
    <button className='ButtonDecrease-Increase' onClick={onClick}>-</button>
  );
};


DecreaseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DecreaseButton;
