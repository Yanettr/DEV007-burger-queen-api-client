/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ButtonViewsWaiter.css';
import { useNavigate } from 'react-router-dom'; 

function ButtonViewsWaiter({ Text1, Text2, Text3, onClickButton1, onClickButton2, onClickButton3 }) {
  const [clickedButton, setClickedButton] = useState(1);
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleButtonClick = (buttonNumber) => {
    setClickedButton(buttonNumber);
  };

  const handleOrderButtonClick = () => {
 
    navigate('/order');
  };

  return (
    <div className="button-views">
      <button
        className={`button-view ${clickedButton === 1 ? 'active' : ''}`}
        onClick={() => {
          handleButtonClick(1);
          onClickButton1(); 
        }}
      >
        {Text1}
      </button>
      <button
        className={`button-view ${clickedButton === 2 ? 'active' : ''}`}
        onClick={() => {
          handleButtonClick(2);
          onClickButton2(); 
        }}
      >
        {Text2}
      </button>
      <button
        className={`button-view ${clickedButton === 3 ? 'active' : ''}`}
        onClick={() => {
          handleButtonClick(3);
          handleOrderButtonClick(); 
        }}
      >
        {Text3}
      </button>
    </div>
  );
}

ButtonViewsWaiter.propTypes = {
  Text1: PropTypes.string.isRequired,
  Text2: PropTypes.string.isRequired,
  Text3: PropTypes.string.isRequired,
  onClickButton1: PropTypes.func.isRequired,
  onClickButton2: PropTypes.func.isRequired,
  onClickButton3: PropTypes.func.isRequired,
};

export default ButtonViewsWaiter;
