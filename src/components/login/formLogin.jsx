/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import '../../pages/login/Login.css';
import ButtonSubmit from '../buttonSubmit/ButtonSubmit';

const FormLogin = ({onFormSubmit}) => {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(values);
    console.log(onFormSubmit);
  }
  
  const { email, password } = values;
  
    return (
    <section className='sectionLogin'>
        <div className='nameLogin'>
            <h2>LOGIN</h2>
        </div>
        <div className='user'>
            <img src="/img/usuario.png" alt="" />
        </div>
         <form onSubmit={handleSubmit} className='formLogin' >
          <div>
              <input 
               type='email' 
                name='email'
                className='email' 
                placeholder='Email'
                value={email} 
                onChange={handleChange}
                required
              />
          </div>
          
          <div>
              <input 
                type='password'
                name='password'
                className='password' 
                placeholder='Contraseña'
                value={password} 
                onChange={handleChange}
                required
              />
          </div>
          
          <ButtonSubmit type="submit" className='buttonLogin'>Iniciar sesión</ButtonSubmit>
        </form>
     </section>
    )
}


FormLogin.propTypes = {
    onFormSubmit: PropTypes.func.isRequired, 
  };
  
  export default FormLogin;