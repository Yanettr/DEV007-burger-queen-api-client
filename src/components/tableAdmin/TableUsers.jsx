
import { TableContainer, Table, TableHead, TableBody, TableRow } from '@mui/material';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen, faUserXmark, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../button/Button';
import './TableUsers.css'


const iconAddWorker = <FontAwesomeIcon icon={faUserPlus} size="lg" style={{ color: "#FFFF" }} />;
const iconEditWorker = <FontAwesomeIcon icon={faUserPen} size="2x" style={{ color: "#1E3050" }} />;
const iconDeleteWorker = <FontAwesomeIcon icon={faUserXmark} size="2x" style={{ color: "#D11515" }} />;

const TableUsers = ({ setShowEditForm, workers, handleAddWorker, handleBorrar, handleEditar }) => {

  return (
    <div className='new-container'>
      <div className="container-table">
        <div className='new-container-btn-add'>
          <Button className='btn-add-user' text={'AGREGAR USUARIO'} dataTestid={'Testidbtn'} icon={iconAddWorker} onClick={() => { setShowEditForm(false); handleAddWorker(); }} />
        </div>
        <TableContainer className='container-table-workers'>
          <Table className='table-dashboard-workers'>
            <TableHead>
              <TableRow className='table-subtitles'>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>ROL</th>
                <th>CORREO</th>
                <th>EDITAR</th>
                <th>ELIMINAR</th>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(workers) && workers.map((worker, index) => (
                <TableRow key={index}>
                  <td className='dashboard-table-row'>{index + 1}</td>
                  <td className='dashboard-table-row'>{worker.nombre}</td>
                  <td className='dashboard-table-row'>{worker.role}</td>
                  <td className='dashboard-table-row'>{worker.email}</td>
                  <td className='container-edit-icon' onClick={() => { setShowEditForm(true); handleEditar(worker) }}>{iconEditWorker}</td>
                  <td className='container-delete-icon' onClick={() => handleBorrar(worker)}>{iconDeleteWorker}</td>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

TableUsers.propTypes = {
  setShowEditForm: PropTypes.func,
  workers: PropTypes.array,
  handleAddWorker: PropTypes.func,
  handleBorrar: PropTypes.func,
  handleEditar: PropTypes.func,
};

export default TableUsers;

