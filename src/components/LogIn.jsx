import React, { Fragment, useState} from 'react';
import logo from '../assets/Burger-Queen-logo.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseConfig';
import { Link , useNavigate } from 'react-router-dom';
import './style/Style.css';
import Swal from 'sweetalert2';
// import Errors from './errors';

function LogIn (){
    const [loginMail, setLoginMail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigate = useNavigate();

    const logInPromise = async (event) =>{
        event.preventDefault();
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginMail,
                loginPassword
            );
            console.log(user);
            if(user){
               navigate("/menu");
            }
              
        }catch(error){
            Swal.fire(error.code);
        }
    }

    return(
        <Fragment>
          <main>
          <div className= 'container'><img src={logo} className="App-logo" alt="logo" /></div>
            <form>
                <h1 className ='h1Form'>Iniciar sesión</h1>
                <label> Correo Electrónico: </label>
                <input
                 type='email'
                 placeholder='Ingresa tu email'
                 onChange={(event) => {
                    setLoginMail(event.target.value);
                  }}></input>
                 <label> Contraseña: </label>
                 <input
                 type='password'
                 placeholder='Ingrese su contraseña'
                 onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}></input>
                 <button 
                 className= 'buttonForm'
                 type='submit'
                 onClick={logInPromise}>Enviar</button>
            </form>
            
          </main>
          <div className='link'><Link to = '/register' className='changeRoute'>Registrate</Link></div>
        </Fragment>    
    )
}

export default LogIn