/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import './DeleteButton.css';

const DeleteButton = ({ onClick }) => {
  return (
    <button className='DeleteButton' onClick={onClick}></button>
  );
};

// Agrega la validación PropTypes para la prop onClick
DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
