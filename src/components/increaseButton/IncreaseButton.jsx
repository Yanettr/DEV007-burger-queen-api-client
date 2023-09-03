/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import './IncreaseButton.css';

const IncreaseButton = ({ onClick }) => {
  return (
    <button className='ButtonDecrease-Increase' onClick={onClick}>+</button>
  );
};

// Agrega la validación PropTypes para la prop onClick
IncreaseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default IncreaseButton;
