/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material'; 
import './TableUsers.css';

const iconAddWorker = <Add sx={{ fontSize: '1.5rem', color: "white" }} />;
const iconEditWorker = <Edit sx={{ fontSize: '2rem', color: "#1E3050" }} />;
const iconDeleteWorker = <Delete sx={{ fontSize: '2rem', color: "#760909" }} />;

const TableUsers = ({ setShowEditForm, workers, handleAddWorker, handleBorrar, handleEditar }) => {

  return (
    <div className='new-container'>
      <div className="container-table">
        <div className='new-container-btn-add'>
          <Button
            className='btn-add-user'
            variant="contained"
            color="primary"
            startIcon={iconAddWorker}
            onClick={() => { setShowEditForm(false); handleAddWorker(); }}
          >
            AGREGAR USUARIO
          </Button>
        </div>
        <table className='table-dashboard-workers'>
          <thead>
            <tr className='table-subtitles'>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>ROL</th>
              <th>CORREO</th>
              <th>EDITAR</th>
              <th>ELIMINAR</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(workers) && workers.map((worker, index) => (
              <tr key={index}>
                <td className='dashboard-table-row'>{index + 1}</td>
                <td className='dashboard-table-row'>{worker.nombre || ''}</td>
                <td className='dashboard-table-row'>{worker.role}</td>
                <td className='dashboard-table-row'>{worker.email}</td>
                <td className='container-edit-icon' onClick={() => { setShowEditForm(true); handleEditar(worker) }}>{iconEditWorker}</td>
                <td className='container-delete-icon' onClick={() => handleBorrar(worker)}>{iconDeleteWorker}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
