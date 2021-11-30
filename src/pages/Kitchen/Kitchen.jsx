import React, { Fragment, useState, useEffect } from 'react';
import '../../components/style/Style.css';
import Header from '../../components/Header';
import GetOrders from '../../components/GetOrder';
import Swal from 'sweetalert2';

function Kitchen(){
    const [orders, setOrders] = useState([])
    // const [orderStatus, setOrderStatus] = useState('pending')
    
    
    const ordersList = () => {
        fetch('https://burger-queen-fake-server-app.herokuapp.com/orders')
            .then(res => {
                return res.json();
            })
            .then(data => {  
                const pendingOrders = data.filter((order) => order.status === 'pending')             
                setOrders(pendingOrders);                
            })            
    };

    useEffect(() => {
        ordersList()
    }, [])

    const changeStatus = (order) =>{
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( { ...order, "status": 'delivering', "deliveringTime":new Date()} )
        };
        fetch('https://burger-queen-fake-server-app.herokuapp.com/orders/' + order.id, requestOptions)
            .then(response => response.json())
            .then(() => ordersList())
            .then(() => {
                let diff = Math.abs(new Date(order.dateEntry) - new Date())/1000;
                const days = Math.floor(diff / 86400);
                diff -= days * 86400;
                const hours = Math.floor(diff / 3600) % 24;
                diff -= hours * 3600;
                var minutes = Math.floor(diff / 60) % 60;
                diff -= minutes * 60;
                const seconds = Math.floor(diff) % 60
                Swal.fire('La orden paso ' + days + 'días ' + hours + 'hrs ' + minutes + 'min ' + seconds +  "seg , en cocina")})
        //const minutes = Math.floor((diff/1000)/60);
        //Swal.fire('La orden paso ' + minutes + "min, en cocina")
       /*  const horas =  Math.abs(new Date().getHours() - new Date(order.dateEntry).getHours());
        const minutos = Math.abs(new Date().getMinutes() - new Date(order.dateEntry).getMinutes());  
        const segundos = Math.abs(new Date().getSeconds() - new Date(order.dateEntry).getSeconds()); 
        
        Swal.fire('La orden paso ' + horas + 'hrs ' + minutos + 'min ' + segundos +  "seg , en cocina") */; 
                        
    }

    // const filterOrders = () => {
    //     return orders.filter((order) => order.status === orderStatus)
    // }

    return(
        <Fragment>
            <div className='kitchenHeader'>
                <Header>
                    <h1> COCINA </h1>
                </Header>
            </div>
            <div className= "kitchenOrders">
                { orders && <GetOrders orders ={orders} changeStatus= {changeStatus}/>}
            </div>
        </Fragment>
    )
}

export default Kitchen