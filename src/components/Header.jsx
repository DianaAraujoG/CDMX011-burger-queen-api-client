import { useNavigate } from 'react-router-dom';
import { auth } from '../FirebaseConfig';
import logo from "../assets/Burger-Queen-logo.png";
import { signOut } from "firebase/auth";
import { Fragment } from 'react';
import './style/Style.css';

function Header ({ children }){
    
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

    return (
        <Fragment>
            <div className= 'logoheader'><img src= {logo} alt= 'logo BurgerQueen'></img></div>
            <div>{children}</div>
            <button className='btnlogOut' onClick={logOut}>Salir</button>
        </Fragment>
    )
}
export default Header