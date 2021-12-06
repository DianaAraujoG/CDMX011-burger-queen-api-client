import React, { Fragment, useState, useEffect} from 'react';
import logo from '../../assets/Burger-Queen-logo.png';
import { useNavigate } from 'react-router-dom';
import FormLogIn  from '../../components/FormLogIn'
import Cookies from 'universal-cookie/es6';


// import Errors from './errors';
const cookies = new Cookies(); 

function LogIn (){    
    
    const [users, setUsers] = useState([])
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch('https://burger-queen-fake-server-app.herokuapp.com/users/')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setUsers(data);                
            })            
    }, []);


    const logInPromise = (loginMail, loginPassword) =>{
        if(loginMail !== '' && loginPassword !== ''){
            console.log(users);
             // eslint-disable-next-line array-callback-return
            const existUser = users.filter((elem) => { if( loginMail === elem.email && loginPassword === elem.password) return elem});
            if(existUser.length > 0){
                const actualUser = existUser[0];
                fetch('https://burger-queen-fake-server-app.herokuapp.com/users/' + actualUser.id)
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    cookies.set('id', response.id, {path: "/"});
                    cookies.set('name', response.name, {path: "/"});
                    cookies.set('email', response.email, {path: "/"});
                    cookies.set('role', response.role, {path: "/"});
                    alert(`Bienvenido ${response.name}`);
                    
                    if(response.role === 'mesero'){
                        navigate("/menu");
                    } else if (response.role === 'chef'){
                        navigate("/kitchen");
                    } else{
                        navigate("/register");
                    }
                }
                )
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        } else {            
            alert('Ingresa todos los datos necesarios')
        }  
    }

    return(
        <Fragment>
          <main>
          <div className= 'container'><img src={logo} className="App-logo" alt="logo" /></div>
            <FormLogIn saveData={logInPromise}></FormLogIn>
          </main>          
        </Fragment>    
    )
}

export default LogIn