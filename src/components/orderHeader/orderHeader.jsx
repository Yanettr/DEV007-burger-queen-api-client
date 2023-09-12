/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './WaiterHeader.css';
import Title from '../title/Title';

function OrderHeader({ title }) { 

  return (
    <header className="header">
      <div className='title-header'>
        <Title title={title} />
      </div>
    </header>
  );
}

OrderHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default OrderHeader;
