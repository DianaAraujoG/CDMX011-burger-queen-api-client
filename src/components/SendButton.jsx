import React from 'react';
import { auth } from '../FirebaseConfig';
import './style/Style.css';

function SendButton ({client, table, products, setProducts,setClient}){
    
    const saveOrder = () => {
        const order ={
           'userId' : auth.currentUser.email,                       
            'client': client,
            'table': table,
            'products': products,
            'status': 'pending',
            'dateEntry': new Date()
        }
        
        if(client === '' || table === '' || Object.keys(products).length === 0) {
            alert('inserta los datos necesarios')
        } else {
            fetch('http://localhost:8000/orders', {
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        }).then(
            alert('La orden se envió con éxito a la cocina'),
            setProducts([]),
            setClient({client: '', table: ''})
        )
        }
    } 
    const cancelOrder = () => {
        setProducts([]);
        setClient({client: '', table: ''})
    }

 return (
    <div className='orderBtns'>
        <button  className="btnSubmitOrder" onClick={ saveOrder }>
        Enviar a cocina
        </button>
        <button className="btnCancelOrder" onClick={ cancelOrder }>
            Cancelar
        </button>
    </div>
    
    )
}

export default SendButton;