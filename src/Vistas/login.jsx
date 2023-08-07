// eslint-disable-next-line no-unused-vars
import React from 'react'
import Logo from '../components/logo/logo';
import FormLogin from '../components/login/formLogin';
import './login.css'

const Login = () =>  {
  return (
    <>
    <section className='loginTotal'>
    <div className='formLogin'>
    <FormLogin />
    </div>
    <div className='logoLogin'>
    <Logo/>
    </div>
    </section>
    </>
  );
}

export default Login;