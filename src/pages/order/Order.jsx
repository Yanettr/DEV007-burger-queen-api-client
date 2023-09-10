
import './Order.css';
import Ticket from '../../components/ticket/Tickets';
import { useState, useEffect } from 'react';
import Header from "../../components/header/Header";
import Modal from "../../components/modal/Modal";
import {editOrder} from '../../utils/apiFunctions';
import { Link } from 'react-router-dom';
import backButton from '../../assets/backBtn.png';
import logoutButton from '../../assets/logout.png';

const Order = () => {

  const [orders, setOrders] = useState([]);

  const changeStatusDelivered = (order) => {
    // console.log('Cambiando status a entregado');
    const token = localStorage.getItem('accessToken');
    const dataOrder = { status: 'delivered' };
    editOrder(token,order.id,dataOrder).then((resp) => resp.json())
      .then((updatedOrder) => {
        updateOrderStatus(updatedOrder.id, updatedOrder.status);
        // console.log(updatedOrder.status);
      })
      .catch(error => console.log(error))
  }

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prevOrders => {
      return prevOrders.map(order => {
        if (order.id === orderId) {
          return { ...order, status: newStatus };
        }
        return order;
      });
    });
  };
  const token = localStorage.getItem('accessToken');
  useEffect(() => {
    function getOrdersReady() {
      fetch('http://localhost:8080/orders', {

        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`,
        }
      })
        .then((resp) => resp.json())
        .then((dataOrders) => {
          console.log(dataOrders)
          setOrders(dataOrders)
        })
        .catch(error => console.log(error))
    }

    getOrdersReady();
    const intervalId = setInterval(getOrdersReady, 10000)
    //este retorno es opcional del useEffect, evita que se ejecute cuando estoy en otra pantalla o que se pueda duplicar
    return () => {
      clearInterval(intervalId)
    };

  }, [token])

  //funciones que abren y cierran el modal
  const [modalMessageIsOpen, setModalMessageIsOpenId] = useState(false)
  const [modalMessageSettings, setModalMessageSettings] = useState({
    modalText: '',
  });
  //función abre el modal
  const openModalMessage = () => {
    setModalMessageIsOpenId(true)
  }
  //fn que cierra el modal
  const closeModalMessage = () => {
    setModalMessageIsOpenId(false)
  }

  const handleModalMessage = () => {
    setModalMessageSettings({
      modalText: 'El pedido ha sido entregado al cliente',
    });
    openModalMessage();
  };

  return (
    <>
      <div className='body'>
      <Header title='MENU' />
      <section className='title-chef-orders'>
        <h1 className='title-status-chef'>Listas para servir</h1>
      </section>
      <section className='container-order-status'>
        <div className='container-order-ticket-status'>
          {orders
            .filter(order => order.status === 'delivery')
            .map(order => (<Ticket key={order.id} order={order} changeStatus={changeStatusDelivered} showButton={true} handleModalMessage={handleModalMessage} text="Entregado" />))}
          <Modal
            isOpen={modalMessageIsOpen}
            onRequestClose={closeModalMessage}
            text={modalMessageSettings.modalText}
          />
        </div>
      </section>
        </div>
        <footer>
          <div className='footer-button'>
            <Link to='/'>
              <img src={backButton} alt='Regresar' /> 
            </Link>
          </div>
          <div className='footer-button'>
            <Link to='/logout'>
              <img src={logoutButton} alt='Salir' /> 
            </Link>
          </div>
        </footer>
    </>
  );
};

export default Order

