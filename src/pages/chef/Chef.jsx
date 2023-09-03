import './chef.css';
import Ticket from '../../components/ticket/Tickets';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {editOrder} from '../../utils/apiFunctions';

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

  const getProductsList = (products) => {
    return products.map((item) => `${item.qty} ${item.product.name}`).join(', ');
  };

  const getTotalOrder = (prices) => {
    return prices.reduce(
      (total, item) => total + item.qty * item.product.price,
      0
    );
  };

  return (
    <div className='body'>
      <section className='title-chef-orders'>
        <h1 className='title-orders'>Ordenes</h1>
      </section>
      <section className='container-cooking'>
        <div className='container-orders-table'>
          <table className='orders-table'>
              <thead>
                <tr>
                  <th className="tableHeader">MESA</th>
                  <th className="tableHeader">CLIENTE</th>
                  <th className="tableHeader">PEDIDO</th>
                  <th className="tableHeader">ESTATUS</th>
                  <th className="tableHeader">FECHA</th>
                  <th className="tableHeader">TOTAL</th>
                  <th className="tableHeader">ENTREGAR</th>
                </tr>
              </thead>
              <tbody>
                {orders.sort((a, b) => {
                    const fechaA = new Date(a.dateEntry);
                    const fechaB = new Date(b.dateEntry);
                    
                    return fechaB - fechaA;
                  }).map((order) => (
                  <tr key={order.id}>
                    <td>
                      #{order.table}
                    </td>
                    <td>
                      {order.client}
                    </td>
                    <td>
                      {getProductsList(order.products)}
                    </td>
                    <td>
                      {order.status}
                    </td>
                    <td>
                      {order.dateEntry}
                    </td>
                    <td>
                      ${getTotalOrder(order.products)},00
                    </td>
                    <td className='buttonsTable'>
                    {order.status == 'pending' && ( //condicional para solo mostrar el boton de actualizar al chef
                      <button
                        className="btnEstado"
                        onClick={() => editOrder(token, order.id, "delivered")}
                      >
                        ACTUALIZAR
                      </button>
                    )}

                    </td>
                  </tr>
                ))}
              </tbody>
          </table> 
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