/* eslint-disable no-unused-vars */
import react from 'react';
import './formLogin.css'

const FormLogin = () => {

  return (
    <>
    <section className='sectionLogin'>
        <div className='nameLogin'>
            <h2>LOGIN</h2>
        </div>
        <div className='user'>
            <img src="/img/usuario.png" alt="" />
        </div>

        <div id='formLogin' className='formLogin'>
                <input type="text" className='email' placeholder='Email' />
                <br />
                <input type="password" className='password' placeholder='Contraseña' />
        </div>
        <div> 
            <button id= 'buttonLogin' className='buttonLogin'>Iniciar sesión</button>
        </div>
        </section>
    </>
  );
}

export default FormLogin;