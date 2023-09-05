import PropTypes from 'prop-types';
import Button from '../button/Button';

const Ticket = ({order, changeStatus, showButton, text}) => {
  const formatoFecha = (dateEntry) => {
    const orderDate = new Date(dateEntry);

    const opciones = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    };
    
    const formatoFecha = orderDate.toLocaleDateString("es-ES", opciones);
    return formatoFecha;
  }

  const getTiempoPreparacion = () => {
    if (order.dateEntry && order.dataExit) {
      const fechaA = new Date(order.dateEntry);
      const fechaB = new Date(order.dataExit);
      const diferenciaEnMilisegundos = fechaB.getTime() - fechaA.getTime();
      const minutosDePreparacion = Math.round(diferenciaEnMilisegundos / 1000 / 60);
      return minutosDePreparacion;
    }
    return null;
  };

  return(
    <>
    <div className="ticket-order">
      <div className="order-client">Cliente: {order.client}</div>
      <div className="order-list">
      <table>
        <thead>
          <tr>
            <th>Cant</th>
            <th>Producto</th>
          </tr>
        </thead>
        <tbody>
        {console.log("ticket",order.dateEntry)}
          {order.products.map((item, index) => (
            <tr key={index}>
              <td>{item.qty}</td>
              <td>{item.product.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className='container-orderdate-orderstatus'>
        <div className='order-status'>Estado: {order.status}</div>
        <div className='order-date'>A cocina: {formatoFecha(order.dateEntry)}</div>
        {order.dataExit !== null && <div className='order-date-exit'> T.Preparación: {getTiempoPreparacion()} minutos</div>}
      </div>
      <div className="container-btn-add">
        {showButton &&
        <Button className ="btn-order-ready" text={text}  onClick= {() => changeStatus(order)}/>
        }
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
}
export default Ticket