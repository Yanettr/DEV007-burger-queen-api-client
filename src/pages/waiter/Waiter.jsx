// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Waiter.css';
import Swal from 'sweetalert2';
import OptionsProductsMenu from '../../components/menu/OptionProductsMenu';
import ProductsOrder from '../../components/productsOrder/ProductsOrder';
import Header from '../../components/header/Header';
import ButtonViews from '../../components/buttonView/ButtonView';
import NameOrder from '../../components/nameOrder/NameOrder';

const Waiter = () => {
  const [order, setOrder] = useState([]);
  const [selectedProductType, setSelectedProductType] = useState('Desayuno'); // Estado para el tipo de producto seleccionado
  const [customerName, setCustomerName] = useState(''); // Estado para el nombre del cliente


  const handleAddToOrder = (product) => {
    const existingProductIndex = order.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Si el producto ya existe en la orden, incrementa su cantidad
      const updatedOrder = [...order];
      updatedOrder[existingProductIndex].quantity += 1;
      setOrder(updatedOrder);
    } else {
      // Si el producto no existe en la orden, agrégalo con cantidad 1
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
    }

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
// Restablece la orden a un estado inicial vacío
setOrder([]);

// Restablece el nombre del cliente a un estado inicial vacío
setCustomerName('');

Swal.fire({
  title: 'Perfecto',
  text: 'Tu Orden fue generada con exito',
  icon: 'success',
  confirmButtonText: 'Ok',
  confirmButtonColor: '#760909'
});
    // Aqui va lo que queremos en la API
    console.log('Orden generada:', orderObject);
  };

  return (
    <div className='body'>
      <Header title='MENU' />
      <div>
        {/* Actualiza el botón para que cambie el tipo de producto */}
        <ButtonViews
          Text1={'Desayuno'}
          Text2={'Almuerzo'}
          onClickButton1={() => setSelectedProductType('Desayuno')}
          onClickButton2={() => setSelectedProductType('Almuerzo')}
        />
      </div>
      <div className='container1'>
        <div className='extra1'>
          {/* Pasa el tipo de producto seleccionado al componente OptionsProductsMenu */}
          <OptionsProductsMenu
            onAddToOrder={handleAddToOrder}
            productType={selectedProductType}
          />
        </div>
        <div className='order'>
        <NameOrder customerName={customerName} onCustomerNameChange={handleCustomerNameChange} />
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