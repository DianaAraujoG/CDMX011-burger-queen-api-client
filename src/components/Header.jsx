import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import logo from "../assets/Burger-Queen-logo.png";
import Cookies from 'universal-cookie/es6';
//import { Fragment } from 'react';
import './style/Style.css';

function Header ({ children }){
    
    const navigate = useNavigate();
    const cookies = new Cookies();
    const logOut = () => {
        cookies.remove('id',  {path: "/"});
        cookies.remove('name',  {path: "/"});
        cookies.remove('email', {path: "/"});
        cookies.remove('role', {path: "/"});
        navigate('/');
    }
    
    useEffect(() => {
        if(!cookies.get('name')){
            navigate('/');
        }
    })

    return (
        <div className='header'>
            <div className= 'logoheader'><img src= {logo} alt= 'logo BurgerQueen'></img></div>
            <div>{children}</div>
            <button className='btnlogOut' onClick={logOut}>Salir</button>
        </div>
    )
}
export default Header