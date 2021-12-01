import React, { Fragment, useState } from 'react';
import './style/Style.css';
// import Swal from 'sweetalert2';

function SignUp ({saveUser}) {

    const [signMail, setsignMail] = useState('');
    const [signPassword, setsignPassword] = useState('');
    const [signUsername, setsignUsername] = useState('');
    const [signRole, setsignRole] = useState('');
    
    return (
        <Fragment>
          <main className="formRegister">
             <form id='formSignUp'onSubmit={(event) => {event.preventDefault();
             saveUser(signMail,signPassword, signUsername, signRole); event.target.reset()}}>
                <h1 className ='h1Form'>Registra a un empleado</h1>
                <label htmlFor= 'formUsername'> Nombre: </label>
                 <input
                 type='text'
                 placeholder='Ejemplo'
                 id= 'formUsername'
                 onChange={(event) => {
                    setsignUsername(event.target.value);
                  }}></input>
                 <label htmlFor= 'formEmail'> Correo Electrónico: </label>
                 <input
                 type='email'
                 placeholder='ejemplo@ejemplo.com'
                 id= 'formEmail'
                 onChange={(event) => {
                    setsignMail(event.target.value);
                  }}></input>
                 <label htmlFor= 'formPassword'> Contraseña: </label>
                 <input
                 type='password'
                 placeholder='Minimo 6 caracteres'
                 id= 'formPassword'
                 className= 'formInput'
                 onChange={(event) => {
                    setsignPassword(event.target.value);
                  }}></input>  
                  <label htmlFor= 'userRole'> Rol: </label>
                  <select 
                  name = 'userRole' 
                  id='userRole'
                  className='userRole'
                  onChange= {(event) => {
                    setsignRole(event.target.value);
                  }}>
                      <option disabled> Selecciona el rol del empleado</option>
                      <option value= 'chef'>Chef</option>
                      <option value= 'mesero'>Mesero</option>
                      <option value= 'admin'>Administrador</option>
                  </select>
                  <button 
                  className= 'buttonForm'
                  type='submit'>Registrar</button>              
             </form>
          </main>          
        </Fragment>
    )
}

export default SignUp