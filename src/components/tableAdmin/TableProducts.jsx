/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, TableContainer, Table, TableHead, TableBody, TableRow } from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';
import './TableProducts.css';

const iconAddProduct = <Add sx={{ fontSize: '1.5rem', color: "#FFFF" }} />;
const iconEditProduct = <Edit sx={{ fontSize: '2rem', color: "#1E3050" }} />;
const iconDeleteProduct = <Delete sx={{ fontSize: '2rem', color: "#760909 " }} />;

const TableProducts = ({ setShowEditForm, products, handleAddProduct, handleDeleteProduct, handleEditProduct, workersView }) => {
  return (
    <>
      <div className='new-container'>
        <div className="container-table">
          <div className='new-container-btn-add'>
            <Button
              className='btn-add-product'
              variant="contained"
              color="primary"
              startIcon={iconAddProduct}
              onClick={() => { setShowEditForm(false); handleAddProduct(); }}
            >
              AGREGAR PRODUCTO
            </Button>
          </div>
          <TableContainer className='container-table-workers'>
            <Table className='table-dashboard-workers'>
              <TableHead>
                <TableRow className='table-subtitles'>
                  <th>Nº</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Tipo</th>
                  <th>Imagen</th>
                  <th>Editar</th>
                  <th>Eliminar</th>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray && products.map((product, index) => (
                  <TableRow key={index}>
                    <td className='dashboard-table-row'>{index + 1}</td>
                    <td className='dashboard-table-row'>{product.name}</td>
                    <td className='dashboard-table-row'>${product.price}</td>
                    <td className='dashboard-table-row'>{product.type}</td>
                    <td className='dashboard-table-row'>
                      <img className='dashboard-products-image' src={product.image} alt="products-image" />
                    </td>
                    <td className='container-edit-icon' onClick={() => { setShowEditForm(true); handleEditProduct(product) }}>{iconEditProduct}</td>
                    <td className='container-delete-icon' onClick={() => handleDeleteProduct(product)}>{iconDeleteProduct}</td>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  )
};

TableProducts.propTypes = {
  setShowEditForm: PropTypes.func,
  products: PropTypes.array,
  handleAddProduct: PropTypes.func,
  handleDeleteProduct: PropTypes.func,
  handleEditProduct: PropTypes.func,
  workersView: PropTypes.func
}

export default TableProducts;
