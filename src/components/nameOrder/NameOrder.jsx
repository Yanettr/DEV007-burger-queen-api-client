/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NameOrder.css';

const NameOrder = ({ customerName, onCustomerNameChange, tableNumber, onTableNumberChange }) => {
  return (
    <div className='customer-input'>
      <label htmlFor='customerName'>
        Datos del Cliente:
      </label>
      <input
        className='inputName'
        type='text'
        id='customerName'
        placeholder={`Ej: Luisa`}
        value={customerName}
        onChange={(e) => onCustomerNameChange(e.target.value)}
      />
      <label htmlFor='tableNumber'>
        Número de Mesa:
      </label>
      <input
        className='inputName'
        type='number'
        id='tableNumber'
        value={tableNumber}
        onChange={(e) => onTableNumberChange(e.target.value)}
      />
    </div>
  );
};

NameOrder.propTypes = {
  customerName: PropTypes.string.isRequired,
  onCustomerNameChange: PropTypes.func.isRequired,
  tableNumber: PropTypes.number.isRequired,
  onTableNumberChange: PropTypes.func.isRequired,
};

export default NameOrder;

