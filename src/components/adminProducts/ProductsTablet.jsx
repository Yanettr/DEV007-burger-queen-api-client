/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

export default function ProductsTablet(props) {
  const { products } = props;

  return (
    <table className='table-admin'>
      <thead>
        <tr>
          <th>PRODUCTO</th>
          <th>IMAGEN</th>
          <th>PRECIO</th>
          <th>TIPO</th>
          <th>ACCIONES</th>
        </tr>
      </thead>
      <tbody>
        {props.products.length > 0 ? (
          props.products.map((product, index) => (
            <tr key={index}>
              <td>{product.producto}</td>
              <td>{product.imagen}</td>
              <td>{product.precio}</td>
              <td>{product.tipo}</td>
              <td>
                <button onClick={() => props.editRow(product)}>Editar</button>
                <button onClick={() => props.deleteProduct(product.id, product)}>Eliminar</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>No existen productos</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

ProductsTablet.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    producto: PropTypes.string,
    imagen: PropTypes.string,
    precio: PropTypes.number,
    tipo: PropTypes.string,
    id: PropTypes.number
  })).isRequired,
  editRow: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};
