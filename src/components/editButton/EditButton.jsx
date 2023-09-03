/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import './EditButton.css';

const EditButton = ({ onClick }) => {
  return (
    <button className='EditButton' onClick={onClick}></button>
  );
};

// Agrega la validación PropTypes para la prop onClick
EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default EditButton;
