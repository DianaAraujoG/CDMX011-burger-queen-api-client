import React, { Fragment } from 'react';
import logo from '../../assets/Burger-Queen-logo.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../FirebaseConfig';
import { Link , useNavigate } from 'react-router-dom';
import FormLogIn  from './FormLogIn'
import '../style/Style.css';

// import Errors from './errors';

function LogIn (){
    
    const navigate = useNavigate();

    const logInPromise = async (loginMail, loginPassword) =>{
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
            console.log(error.code);
        }
    }

    return(
        <Fragment>
          <main>
          <div className= 'container'><img src={logo} className="App-logo" alt="logo" /></div>
            <FormLogIn saveData={logInPromise}></FormLogIn>
          </main>
          <div className='link'><Link to = '/register' className='changeRoute'>Registrate</Link></div>
        </Fragment>    
    )
}

export default LogIn