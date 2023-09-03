/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getProduct } from '../../utils/apiFunctions';
import './OptionProductsMenu.css';
import IncreaseButton from '../Button/Decrease-Increase/IncreaseButton';

const OptionsProductsMenu = ({ onAddToOrder, productType }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct()
      .then((data) => {
        if (Array.isArray(data)) { // Verifica si data es una matriz
          const filteredProducts = data.filter((product) => product.type === productType);
          setProducts(filteredProducts);
        } else {
          console.error('Error fetching products: data is not an array');
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [productType]);

  const handleAddToOrder = (product) => {
    onAddToOrder(product);
  };

  return (
    <div className='optionProducts'>
      {products.map((product) => (
        <div key={product.id} className='product-item'>
          <div className='ImgProducts'>
            <img src={product.image} alt={product.name} className='product-image' />
          </div>
          <div className='descriptionProducts'>
            <h5>{product.name}</h5>
            <h6>Precio: ${product.price}</h6>
          </div>
          <div className='buttonmas'>
            <IncreaseButton onClick={() => handleAddToOrder(product)} />
          </div>
        </div>
      ))}
    </div>
  );
};

OptionsProductsMenu.propTypes = {
  onAddToOrder: PropTypes.func.isRequired,
  productType: PropTypes.string.isRequired,
};

export default OptionsProductsMenu;
