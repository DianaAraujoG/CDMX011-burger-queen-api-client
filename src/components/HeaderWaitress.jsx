import { Link } from 'react-router-dom';
//import { auth } from '../FirebaseConfig';
//import logo from "../assets/Burger-Queen-logo.png";
//import { signOut } from "firebase/auth";
import { Fragment } from 'react';
import './style/Style.css';
import Header from './Header'

const HeaderWaitress = () => {
    //const navigate = useNavigate();
    /* const logOut = async () => {
        try {
            await signOut(auth);
            console.log('LogOut');
            navigate("/");    
        } catch (error) {
            console.log(error.code);
        }
    } */
    return (
        <Fragment>
            <div className="headerW">
                {/* <div className= 'logoheader'><img src= {logo} alt= 'logo BurgerQueen'></img></div> */}
                <Header> 
                <div className="btnsHeader">
                    <Link to = '/menu' className='changeRoute'>
                        <button className='btnMenu'>
                            <img src="https://raw.githubusercontent.com/DianaAraujoG/La-Magia-de-Mexico/main/img-Burger-Queen/menu_button.png" alt ='btnMenu'></img>
                        </button>
                    </Link>
                    <Link to = '/orderToDeliver' className='changeRoute'>
                        <button className='btnReady'>
                            <img alt='btnReady' src="https://raw.githubusercontent.com/DianaAraujoG/La-Magia-de-Mexico/main/img-Burger-Queen/listo_button.png"></img>
                        </button>
                    </Link>
                </div>  
                </Header>              
                {/* <button className='btnlogOut' onClick={logOut}>Salir</button> */}
            </div>
        </Fragment>        
    )
}

export default HeaderWaitress