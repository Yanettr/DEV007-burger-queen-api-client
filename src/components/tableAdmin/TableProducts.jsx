import { TableContainer, Table, TableHead, TableBody, TableRow } from '@mui/material'
import { PropTypes } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../button/Button';
import './TableProducts.css'


const iconAddProduct = <FontAwesomeIcon icon={faSquarePlus} size="xl" style={{ color: "#FFFF", }} />
const iconEditProduct = <FontAwesomeIcon icon={faPenToSquare} size="2xl" style={{ color: "#1E3050", }} />
const iconDeleteProduct = <FontAwesomeIcon icon={faRectangleXmark} size="2xl" style={{ color: "#D11515", }} />

const TableProducts = ({ setShowEditForm, products, handleAddProduct, handleDeleteProduct, handleEditProduct, workersView }) => {

  
  return (
    <>
      <div className='new-container'>
        <div className="container-table">
          <div className='new-container-btn-add'>
            <Button className='btn-add-product' text={'AGREGAR PRODUCTO'} dataTestid={'Testidbtn-ololo'} icon={iconAddProduct} onClick={() => { setShowEditForm(false); handleAddProduct(); }} >
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
                    <td className='container-edit-icon' onClick={() => { setShowEditForm(true); handleEditProduct(product) }}><i>{iconEditProduct}</i></td>
                    <td className='container-delete-icon' onClick={() => handleDeleteProduct(product)}><i>{iconDeleteProduct}</i></td>
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
export default TableProducts