import React, { Fragment, useState, useEffect } from 'react';
import './style/Style.css';
// import Swal from 'sweetalert2';

function SignUp ({saveData, user, editUser}) {

    const [signMail, setsignMail] = useState('');
    const [signPassword, setsignPassword] = useState('');
    const [signUsername, setsignUsername] = useState('');
    const [signRole, setsignRole] = useState('');
    console.log(Object.entries(user).length);

    // const [id, setID] = useState(null);

  useEffect(() => {
    if(user){
      setsignMail(user.email)
      setsignPassword(user.password)
      setsignUsername(user.name)
      setsignRole(user.role)
    }
         
 }, [user]);
    
    return (
        <Fragment>
          <main className="formRegister">
             <form id='formSignUp'>
                <h1 className ='h1Form'>{Object.entries(user).length === 0 ? 'Registra a un empleado' : 'Editar'}</h1>
                <label htmlFor= 'formUsername'> Nombre: </label>
                 <input
                 type='text'
                 placeholder='Ejemplo'
                 id= 'formUsername'
                 onChange={(event) => {
                    setsignUsername(event.target.value);
                  }}
                  value={signUsername}></input>
                 <label htmlFor= 'formEmail'> Correo Electrónico: </label>
                 <input
                 type='email'
                 placeholder='ejemplo@ejemplo.com'
                 id= 'formEmail'
                 onChange={(event) => {
                    setsignMail(event.target.value);
                  }}
                  value={signMail}></input>
                 <label htmlFor= 'formPassword'> Contraseña: </label>
                 <input
                 type='password'
                 placeholder='Minimo 6 caracteres'
                 id= 'formPassword'
                 className= 'formInput'
                 onChange={(event) => {
                    setsignPassword(event.target.value);
                  }}
                  value={signPassword}></input>  
                  <label htmlFor= 'userRole'> Rol: </label>
                  <select 
                  name = 'userRole' 
                  id='userRole'
                  className='userRole'
                  onChange= {(event) => {
                    setsignRole(event.target.value);
                  }}
                  value={signRole}>
                      <option disabled> Selecciona el rol del empleado</option>
                      <option value= 'chef'>Chef</option>
                      <option value= 'mesero'>Mesero</option>
                      <option value= 'admin'>Administrador</option>
                  </select>
                 {Object.entries(user).length === 0 ? <button 
                  className= 'buttonForm'
                  type='button'
                  onClick={() => {saveData(signMail,signPassword, signUsername, signRole)}}>
                    Registrar</button> : <button 
                  className= 'buttonForm'
                  type='button'
                  onClick={() => {editUser(signMail,signPassword, signUsername, signRole, user) }}
                  >Editar</button>
                  }                            
             </form>
          </main>          
        </Fragment>
    )
}

export default SignUp