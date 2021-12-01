import React, { Fragment } from 'react';
import { auth } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, updateProfile, updateCurrentUser } from 'firebase/auth';
import { Link} from 'react-router-dom';
import Header from '../../components/Header';
import FormRegister from '../../components/FormRegister';
import '../../components/style/Style.css'

function Register (){   
    
    const signPromise = async (signMail,signPassword, signUsername, signRole) => { 
        let originalUser = auth.currentUser; 
        console.log( "PRIMERO",originalUser);
        if(signMail !== '' && signPassword !== ''  && signUsername !== ''  && signRole !== ''){
            try{
                const user = await createUserWithEmailAndPassword(
                    auth,
                    signMail,
                    signPassword
                );
                await updateProfile(auth.currentUser,{
                    displayName: signUsername
                });                
                console.log(user);
                if(user){
                    saveUserInfo(signMail,signPassword, signUsername, signRole);
                    await updateCurrentUser(originalUser);
                    console.log(auth.currentUser);
                }                              
            } catch (error){
                // Swal.fire
                console.log(error.code);
            }
        } else {
            console.log(signMail,signPassword, signUsername, signRole)
            alert('Ingresa todos los datos necesarios')
        }        
    }

    const saveUserInfo = (signMail,signPassword, signUsername, signRole ) => {
        fetch('https://burger-queen-fake-server-app.herokuapp.com/users', {
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