import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Registrate con nosotros hoy! Crea tu cuenta llenando la
          siguiente información.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Usuario</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Ingresa tu username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Ingresa tu Email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Contraseña</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Ingresa tu contraseña'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirmar Contraseña</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirma tu contraseña'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Registrarse
        </button>
        <span className='form-input-login'>
          Ya tienes una cuenta? Inicia Sesión <a href='#'>aquí</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;