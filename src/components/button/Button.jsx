/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'; 
import './Button.css';

const Button = (props) => {
  return (
    <button type="button" className="button" onClick={props.onClick}>
      {props.children}{props.icon && <span className="button-icon">{props.icon}</span>}{props.text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired, 
  children: PropTypes.node, 
  text: PropTypes.string,
  icon: PropTypes.element,
  dataTestid: PropTypes.string,
};

export default Button;
