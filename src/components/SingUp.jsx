import React, { Fragment, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import logo from '../assets/Burger-Queen-logo.png';
import { auth } from '../FirebaseConfig';
import { Link } from 'react-router-dom';
import './style/Style.css';

function SignUp () {

    const [signMail, setsignMail] = useState('');
    const [signPassword, setsignPassword] = useState('');
    const [signUsername, setsignUsername] = useState('');
    
    const signPromise = async (event) => {  
        event.preventDefault();      
        try{
            const user = await createUserWithEmailAndPassword(
                auth,
                signMail,
                signPassword
            );
            
            await updateProfile(auth.currentUser,{
                displayName: signUsername
            })
            console.log(user);
        } catch (error){
            console.log(error.message)
        }
    }
    
    return (
        <Fragment>
          <main>
             <div className= 'container'><img src={logo} className="App-logo" alt="logo" /></div>
             <form onSubmit={signPromise}>
                <h1 className ='h1Form'>Regístrate</h1>
                <label> Nombre: </label>
                 <input
                 type='text'
                 placeholder='Ingresa tu numbre'
                 id= 'formUsername'
                 onChange={(event) => {
                    setsignUsername(event.target.value);
                  }}></input>
                 <label> Correo Electrónico: </label>
                 <input
                 type='email'
                 placeholder='Ingresa tu email'
                 id= 'formEmail'
                 onChange={(event) => {
                    setsignMail(event.target.value);
                  }}></input>
                 <label> Contraseña: </label>
                 <input
                 type='password'
                 placeholder='Ingresa una contraseña válida'
                 id= 'formPassword'
                 className= 'formInput'
                 onChange={(event) => {
                    setsignPassword(event.target.value);
                  }}></input>
                 <button 
                 className= 'buttonForm'
                 type='submit'>Registrarse</button>                 
             </form>
          </main>
          <div className='link'><Link to = '/' className='changeRoute'> Inicia Sesión </Link> </div>
        </Fragment>
    )
}

export default SignUp