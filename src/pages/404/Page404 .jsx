// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from 'react-bootstrap/Button';
import './page404.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/logo/logo';

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <section className="container-error">
      <h1 className="h1">Oops, ¡Esta página no existe!</h1>
      <div className='Logo404'>
        <Logo />
      </div>

      <div className='button-error'>
        <Button onClick={() => navigate('/')} variant='danger'>Volver al inicio</Button>
      </div>
    </section>
  );
}

export default Page404;
