/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './AdminHeader.css';
import Title from '../title/Title';
import NavBarAdmin from '../adminNavBar/NavBarAdmin';


function AdminHeader({title}) {
  return (
    <header className="header">
      <NavBarAdmin />
      <div className='title-header'>
      <Title title={title} />
      </div>
    </header>
  );
}
AdminHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
export default AdminHeader;