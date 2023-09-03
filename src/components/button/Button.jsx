/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'; 
import './Button.css';

const Button = (props) => {
  return (
    <button type="button" className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired, 
  children: PropTypes.node.isRequired, 
};

export default Button;
