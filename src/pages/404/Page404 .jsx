// eslint-disable-next-line no-unused-vars
import React from 'react';
import './page404.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import Button from '../../components/button/Button';

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <section className="container-error">
      <h1 className="h1">Oops, ¡Esta página no existe!</h1>
      <div className='Logo404'>
        <Logo />
      </div>
        <Button className='button-error' onClick={() => navigate('/')} variant='danger'>Volver al inicio</Button>
    </section>
  );
}

export default Page404;
