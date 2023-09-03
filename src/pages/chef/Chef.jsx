import './chef.css';
import Ticket from '../../components/ticket/Tickets';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Chef = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    function getOrders() {
      fetch('http://localhost:8080/orders', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
        .then((resp) => {
          if (!resp.ok) {
            throw new Error('Network response was not ok');
          }
          return resp.json();
        })
        .then((dataOrders) => {
          console.log(dataOrders);
          setOrders(dataOrders);
        })
        .catch(error => {
          console.log(error);
        });
    }

    getOrders();
    const intervalId = setInterval(getOrders, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [token]);

  const changeStatus = (order) => {
    const dataEntry = order.dataEntry;
    const newDataExit = new Date(Date.now()).toLocaleTimeString();
    const entryTime = new Date(`01/01/2000 ${dataEntry}`);
    const exitTime = new Date(`01/01/2000 ${newDataExit}`);
    const minutesDifference = (exitTime - entryTime) / 60000;

    const dataOrder = {
      status: 'delivery',
      dataExit: minutesDifference,
    };

    fetch(`http://localhost:8080/orders/${order.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(dataOrder),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        return resp.json();
      })
      .then((updatedOrder) => {
        updateOrderStatus(updatedOrder.id, updatedOrder.status, minutesDifference);
      })
      .catch(error => console.log(error));
  };

  const updateOrderStatus = (orderId, newStatus, minutesDifference) => {
    setOrders(prevOrders => {
      return prevOrders.map(order => {
        if (order.id === orderId) {
          return { ...order, status: newStatus, dataExit: minutesDifference };
        }
        return order;
      });
    });
  };

  return (
    <div className='body'>
      <section className='title-chef-orders'>
        <h1 className='title-orders'>Ordenes</h1>
      </section>
      <section className='container-cooking'>
        <div className='container-order-ticket'>
          {orders
            .filter(order => order.status === 'pending')
            .map(order => (<Ticket key={order.id} order={order} changeStatus={changeStatus} showButton={true} />))}
        </div>
        <div className='container-delivery'>
          {orders
            .filter(order => order.status === 'delivery')
            .map(order => (<Ticket key={order.id} order={order} showButton={false} />))}
        </div>
        <Link to="/">
          <img src="/src/assets/flechas.png" alt="" className="botton-back-chef" />
        </Link>
        <div>
        </div>
      </section>
      <img src="/src/assets/waiter.png" className='chef' alt="Chef" />
    </div>
  );
};

export default Chef;
