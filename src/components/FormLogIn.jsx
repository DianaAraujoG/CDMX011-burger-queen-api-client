import React, { useState } from 'react';


const FormLogIn = ({saveData}) =>{

const [loginMail, setLoginMail] = useState('');
const [loginPassword, setLoginPassword] = useState('');

    return(
        <form>
            <h1 className ='h1Form'>Iniciar sesión</h1>
            <label htmlFor= 'username-mail'> Correo Electrónico: </label>
            <input
             id ='username-mail'
             type='email'
             placeholder='ejemplo@ejemplo.com'
             aria-label="mail"
             onChange={(event) => {
                setLoginMail(event.target.value);
              }}></input>
             <label htmlFor= 'username-password'> Contraseña: </label>
             <input
             id= 'username-password'
             type='password'
             placeholder='Ingrese su contraseña'
             onChange={(event) => {
                setLoginPassword(event.target.value);
              }}></input>
             <button 
             className= 'buttonForm'
             type='submit'
             onClick={(event) => {event.preventDefault();
             saveData(loginMail,loginPassword)}}>Enviar</button>
        </form>
    )
};

export default FormLogIn