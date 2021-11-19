import React, { Fragment } from "react";
import { signOut } from "firebase/auth";
import { auth } from '../FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import './style/Style.css';

function Menu (){
    const navigate = useNavigate();
    const logOut = async () => {
        try {
            await signOut(auth);
            console.log('LogOut');
            navigate("/");    
        } catch (error) {
            console.log(error.code);
        }
    }

    return(
        <Fragment>
            <h1>Pedidos</h1>
            <button onClick={logOut}>Cerrar Sesion</button>
        </Fragment>
    )
}

export default Menu;