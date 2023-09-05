import Button from "../button/Button" 
import PropTypes from 'prop-types';

const Ticket = ({ order, changeStatus, showButton, text, handleModalMessage }) => {
  return (
    <>
      <div className="ticket-order">
        <div>
          <div className="order-client">{order.client}</div>
          <div className="order-list">
            <table>
              <thead>
                <tr>
                  <th>Cant</th>
                  <th>Producto</th>
                </tr>
              </thead>
              <tbody>
                {order.products.map((item, index) => (
                  <tr key={index}>
                    <td>{item.quantity}</td>
                    <td>{item.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='container-orderdate-orderstatus'>
          <div className='order-status'>Estado: {order.status}</div>
          <div className='order-date'>A cocina: {order.dataEntry}</div>
          {order.dataExit !== null &&
            <div className='order-date-exit'> T.Preparación: {order.dataExit} min</div>
          }
          <div className="container-btn-add">
            {showButton &&
              <Button className="btn-order-ready all" text={text} showButton={true} onClick={() => {changeStatus(order), handleModalMessage()}} />
            }
          </div>
        </div>

      </div>
    </>
  )
};
Ticket.propTypes = {
  order: PropTypes.object,
  changeStatus: PropTypes.func,
  showButton: PropTypes.bool,
  text: PropTypes.string,
  handleModalMessage: PropTypes.func
}
export default Ticket
