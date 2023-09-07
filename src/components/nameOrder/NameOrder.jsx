/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './NameOrder.css'

const NameOrder = ({ customerName, onCustomerNameChange }) => {
  return (
    <div className='customer-input'>
      <label htmlFor='customerName'>Datos del Cliente:</label>
      <input
      className='inputName'
        type='text'
        id='customerName'
        placeholder='Ej: Luisa Mesa 2'
        value={customerName}
        onChange={(e) => onCustomerNameChange(e.target.value)}
      />
    </div>
  );
};

NameOrder.propTypes = {
    customerName: PropTypes.string.isRequired,
    onCustomerNameChange: PropTypes.func.isRequired,
  };

export default NameOrder