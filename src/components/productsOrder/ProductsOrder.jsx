/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import "./ProductsOrder.css"; 
import IncreaseButton from '../IncreaseButton/IncreaseButton';
import DecreaseButton from '../decreaseButton/DecreaseButton';
import DeleteButton from '../deleteButton/DeleteButton';

const ProductsOrder = ({ order, onAddToOrder, onRemoveFromOrder, onDeleteFromOrder }) => { // Agrega la prop "onRemoveFromOrder"
  
  const total = order.reduce((acc, product) => acc + product.price * product.quantity, 0);

  
  return (
    <div className='Container-Order'>
      <ul className='Products-OrderCss'>
        {order.map((product, index) => (
          <li key={index} className='product-Order'>
            <div className='increase-decrease'>
             <div className='buttonmas-small'>
              <IncreaseButton onClick={() => onAddToOrder(product)} />
            </div>
            <h5>{product.quantity}</h5>
            <div className='buttonmenos-small'>
              <DecreaseButton onClick={() => onRemoveFromOrder(product)} />
            </div>
            </div>
             <h5>{product.name}</h5>{" "}
             <div className='Price-Delete'>
            <h5>${product.price * product.quantity}</h5>
            <div className='buttonEliminar'>
              <DeleteButton onClick={() => onDeleteFromOrder(product)} />
            </div>
            </div>
          </li>
        ))}
      </ul>
      <div className='total'>
        <h3>Total del Pedido: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

ProductsOrder.propTypes = {
    order: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
      })
    ).isRequired,
    onAddToOrder: PropTypes.func.isRequired,
    onRemoveFromOrder: PropTypes.func.isRequired,
    onDeleteFromOrder: PropTypes.func.isRequired,
  };
  

export default ProductsOrder;