// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Waiter.css';
import Swal from 'sweetalert2';
import ProductsOrder from '../../components/productsOrder/ProductsOrder';
import Header from '../../components/header/Header';
import ButtonViewsWaiter from '../../components/buttonViewsWaiter/ButtonViewsWaiter';
import NameOrder from '../../components/nameOrder/NameOrder';
import OptionsProductsMenu from '../../components/optionProductsMenu/optionProductsMenu';
import {createOrder} from '../../utils/apiFunctions';



const Waiter = () => {
  const [order, setOrder] = useState([]);
  const [selectedProductType, setSelectedProductType] = useState('Desayuno'); 
  const [customerName, setCustomerName] = useState(''); 
  const handleAddToOrder = (product) => {
    const existingProductIndex = order.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedOrder = [...order];
      updatedOrder[existingProductIndex].quantity += 1;
      setOrder(updatedOrder);
    } else {
      setOrder(prevOrder => [...prevOrder, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromOrder = (product) => {
    const existingProductIndex = order.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedOrder = [...order];
      if (updatedOrder[existingProductIndex].quantity > 1) {
        updatedOrder[existingProductIndex].quantity -= 1;
        setOrder(updatedOrder);
      }
    }
  };

  const handleDeleteFromOrder = (product) => {
    const updatedOrder = order.filter(item => item.id !== product.id);
    setOrder(updatedOrder);
  };

  const handleCustomerNameChange = (name) => {
    setCustomerName(name);
  };

  const handleGenerateOrder = () => {
    if (order.length === 0 || customerName === '') {
      Swal.fire({
        title: 'Error!',
        text: 'Por Favor agrega productos y nombre de cliente',
        icon: 'error',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#760909'
      });
      return;
    } else{
        
      const orderObject = {
        client: customerName,
        products: order.map(product => ({
          qty: product.quantity,
          product: {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            type: product.type,
            dateEntry: product.dateEntry,
          },
        })),
        status: 'pending',
        dateEntry: new Date().toISOString(),
      };

      createOrder(orderObject).then((response) => {  

        Swal.fire({
          title: 'Perfecto',
          text: 'Tu Orden fue generada con exito',
          icon: 'success',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#760909'
        });

        console.log('Orden generada:', orderObject);
        console.log('Orden api:', response);
  
      })
      .catch((error) => { 
console.log(error)
       })
    }

    setOrder([]);

    setCustomerName('');

  };

  return (
    <div className='body'>
      <Header title='MENU' />
      <div>
        <ButtonViewsWaiter
          Text1={'Desayuno'}
          Text2={'Almuerzo'}
          Text3={'Ordenes'}
          onClickButton1={() => setSelectedProductType('Desayuno')}
          onClickButton2={() => setSelectedProductType('Almuerzo')}
          onClickButton3={() => setSelectedProductType('Ordenes')}
        />
      </div>
      <div className='container1'>
        <div className='extra1'>
          <OptionsProductsMenu
            onAddToOrder={handleAddToOrder}
            productType={selectedProductType}
          />
        </div>
        <div className='order'>
        <NameOrder 
  customerName={customerName}
  onCustomerNameChange={handleCustomerNameChange}
/>
          <ProductsOrder 
          order={order} 
          onAddToOrder={handleAddToOrder} 
          onRemoveFromOrder={handleRemoveFromOrder} 
          onDeleteFromOrder={handleDeleteFromOrder}/>
          <div>
        <button onClick={handleGenerateOrder} className='buttonGenerarOrder'>Generar orden</button>
        </div>

        </div>
      </div>
    </div>
    
  );
};

export default Waiter;