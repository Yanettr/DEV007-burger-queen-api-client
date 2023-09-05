/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getProduct, getOrder } from '../../utils/apiFunctions';
import './OptionProductsMenu.css';
import IncreaseButton from '../IncreaseButton/IncreaseButton';

const OptionsProductsMenu = ({ onAddToOrder, productType }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (productType === 'Pedidos') {
      // Si el tipo de producto es "Pedidos," obtén los pedidos en lugar de productos.
      getOrder()
        .then((data) => {
          // Aquí debes procesar los datos de los pedidos y establecerlos en el estado.
          // Supongamos que los datos están en un formato similar al de productos.
          setProducts(data);
        })
        .catch((error) => {
          console.error('Error fetching orders:', error);
        });
    } else {
      // Si el tipo de producto no es "Pedidos," obtén productos como antes.
      getProduct()
        .then((data) => {
          const filteredProducts = data.filter((product) => product.type === productType);
          setProducts(filteredProducts);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    }
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
