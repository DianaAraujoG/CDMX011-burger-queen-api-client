import React, { Fragment, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import logo from '../assets/Burger-Queen-logo.png';
import { auth } from '../FirebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import './style/Style.css';
// import Swal from 'sweetalert2';

function SignUp () {

    const [signMail, setsignMail] = useState('');
    const [signPassword, setsignPassword] = useState('');
    const [signUsername, setsignUsername] = useState('');
    const navigate = useNavigate();
    
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
            if(user){
                navigate("/menu");
            }
        } catch (error){
            // Swal.fire
            console.log(error.code);
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
                 placeholder='Ejemplo'
                 id= 'formUsername'
                 onChange={(event) => {
                    setsignUsername(event.target.value);
                  }}></input>
                 <label> Correo Electrónico: </label>
                 <input
                 type='email'
                 placeholder='ejemplo@ejemplo.com'
                 id= 'formEmail'
                 onChange={(event) => {
                    setsignMail(event.target.value);
                  }}></input>
                 <label> Contraseña: </label>
                 <input
                 type='password'
                 placeholder='Minimo 6 caracteres'
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