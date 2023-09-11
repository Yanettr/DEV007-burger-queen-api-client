/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from "react-select";
import { useForm } from 'react-hook-form';
import './FormUsers.css'

const FormUsers = ({ isEditForm, handleAddEdit, newUserData, setNewUserData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const newUserEmailValue = (event) => {
    setNewUserData({ ...newUserData, email: event.target.value })
  };

  const newUserPasswordValue = (event) => {
    setNewUserData({ ...newUserData, password: event.target.value })
  };

  const newUserNameValue = (event) => {
    setNewUserData({ ...newUserData, name: event.target.value });
  };

  const newUserRoleValue = (selectedOption) => {
    setNewUserData({ ...newUserData, role: selectedOption.value })
  };

  const options = [
    { value: 'waiter', label: 'Mesera(o)' },
    { value: 'chef', label: 'Chef' },
    { value: 'admin', label: 'Admin' },
  ];

  return (
    <form className='container-form' onSubmit={handleSubmit((data) => {
      console.log('form submit data', data);
      handleAddEdit(newUserData);
    })}>
      <input type='text' {...register('name', { required: true })} value={newUserData.name} onChange={newUserNameValue} placeholder='Nombre' />
      {errors.name && <p>Nombre requerido</p>}
      <input type='email' {...register('email', { required: true })} value={newUserData.email} onChange={newUserEmailValue} placeholder='Correo electrónico' />
      {errors.email && <p>Email requerido</p>}
      <input type='password' {...register('password', { required: true })} value={newUserData.password} onChange={newUserPasswordValue} placeholder='Contraseña' />
      {errors.password && <p>Contraseña requerida</p>}
      <Select
        onChange={newUserRoleValue}
        options={options}
        value={newUserData.role ? { value: newUserData.role, label: newUserData.role } : null}
      />
      <input className='btn-form-submit-accept' type="submit" value={isEditForm ? 'Editar' : 'Agregar'} />
    </form>
  );
}

FormUsers.propTypes = {
  isEditForm: PropTypes.bool,
  handleAddEdit: PropTypes.func,
  newUserData: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    role: PropTypes.string,
    name: PropTypes.string, 
  }),
  setNewUserData: PropTypes.func
}

export default FormUsers;
