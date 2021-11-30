import React, { Fragment, useEffect, useState } from "react";
// import { signOut } from "firebase/auth";
// import { auth } from '../../FirebaseConfig';
// import { useNavigate } from 'react-router-dom';
import '../../components/style/Style.css';
import GetProducts from "../../components/products";
import HeaderWaitress from "../../components/HeaderWaitress";
import OrderData from "../../components/Order";
import SendButton from '../../components/SendButton';

//import { auth } from '../../FirebaseConfig';

function Menu (){

    const [products, setData] = useState(null);    
    const [currentMenu, setcurrentMenu] = useState('desayuno');
    const [orderProducts, setOrderProducts] = useState([]);
    const [orderClient, setOrderClient] = useState({client: '', table: ''})

    useEffect(() => {
        fetch('https://burger-queen-fake-server-app.herokuapp.com/products')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data);                
            })            
    }, []);

    const menuSelector = () =>{
        return products.filter(data => data.type === currentMenu)
    }
    
    const addProduct = (product) => {
        const exist = orderProducts.find((elem) => elem.id === product.id);

        if(exist){
            setOrderProducts(
                orderProducts.map((elem) => 
                    elem.id === product.id ? { ...exist, qty: exist.qty + 1 } : elem
                )
            );
        }else {
            setOrderProducts(
                [...orderProducts, { ...product,  qty: 1}]
            )
        }
    }
    const removeProduct = (product) => {
        const exist = orderProducts.find((elem) => elem.id === product.id);

        if(exist){
            setOrderProducts(
                orderProducts.filter( elem => elem.id !== product.id)
            )
        }
    }
    const lessProduct = (product) => {
        const exist = orderProducts.find((elem) => elem.id === product.id);
        
        if(exist && exist.qty > 1){
            setOrderProducts(
                orderProducts.map((elem) => 
                    elem.id === product.id ? { ...exist, qty: exist.qty - 1 } : elem
                )
            )
        }
        if (exist && exist.qty === 1) {
            setOrderProducts(
                orderProducts.filter( elem => elem.id !== product.id)
            )
          }
    }
    const handleChange = (event) => {
        return setOrderClient(() => {
            const dataValues = { ...orderClient };
            dataValues[event.target.name] = event.target.value;
            console.log(dataValues)
            return dataValues     
        })
    }

    return(
        <Fragment>
            <div className='menuHeader'>
                <HeaderWaitress></HeaderWaitress>
            </div>
            <div className="menu">
                <div className="menuBtns">
                    <button className="menuBtn" onClick={() => setcurrentMenu('desayuno') }>Desayuno</button>
                    <button className="menuBtn" onClick={() => setcurrentMenu('almuerzo')}>Almuerzo y Cena</button> 
                </div>
                <div className="menuElements">
                    <div id="listProduct">
                        { products && <GetProducts products= { menuSelector() } addProduct= { addProduct } /> }
                    </div>
                    <div className='billElements'>
                        <div className="billMenu">
                            { <OrderData orderProducts = { orderProducts } removeProduct = { removeProduct } 
                            lessProduct = { lessProduct } handleChange= { handleChange }></OrderData> }                        
                         <br/>  
                         </div>                      
                        { <SendButton client = {orderClient.client} table = {orderClient.table} products = {orderProducts} 
                        setProducts= {setOrderProducts} setClient={setOrderClient}></SendButton>}     
                    </div>                   
                </div>
            </div>    
        </Fragment>
    )
}

export default Menu;