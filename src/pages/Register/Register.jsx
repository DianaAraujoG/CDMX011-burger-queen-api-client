import React, { Fragment, useState } from 'react';
//import { auth } from '../../FirebaseConfig';
//import { createUserWithEmailAndPassword, updateProfile, updateCurrentUser } from 'firebase/auth';
import { Link} from 'react-router-dom';
import Header from '../../components/Header';
import FormRegister from '../../components/FormRegister';
import '../../components/style/Style.css';
//import Cookies from 'universal-cookie/es6';

function Register (){ 
    
    const [users, setUsers] = useState([])
    
    fetch('http://localhost:8000/users')
        .then(res => {
            return res.json();
        })
        .then(users => {
            setUsers(users);                
        })

    
    const signPromise = (signMail,signPassword, signUsername, signRole) => {                 
        if(signMail !== '' && signPassword !== ''  && signUsername !== ''  && signRole !== ''){
            // eslint-disable-next-line array-callback-return
            const existUser = users.map((elem) => { if( signMail === elem.email) return elem.email})
            existUser.includes(signMail) ? alert('Este correo ya esta registrado') :
            saveUserInfo(signMail,signPassword, signUsername, signRole);
        } else {            
            alert('Ingresa todos los datos necesarios')
        }        
    }

    const saveUserInfo = (signMail,signPassword, signUsername, signRole ) => {
        fetch('http://localhost:8000/users', {
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: signMail,
                password: signPassword,
                name: signUsername,
                role: signRole,                
            })
        }).then(response => response.json())
        .then(alert('usuario creado exitosamente'))         
    }

    return(
        <Fragment>
            <Header>
              <div className="btnsHeader">
                <Link to = '/register' className='changeRoute'>
                    <button className='btnRegister'>
                        <img src="https://i.ibb.co/J77T75M/usuario-Button.png" alt="usuario-Button"></img>
                    </button>
                </Link>                
                <Link to = '/adminProducts' className='changeRoute'>
                    <button className='btnAdminProducts'>
                        <img src="https://i.ibb.co/zH0DFNN/new-product-Button.png" alt="new-product-Button"></img>
                    </button>              
                </Link>
              </div>
            </Header>
            <div className="Register">            
                <div className='form'></div>
                <FormRegister saveUser={signPromise}></FormRegister>
            </div>
        </Fragment>
    )
}

export default Register;