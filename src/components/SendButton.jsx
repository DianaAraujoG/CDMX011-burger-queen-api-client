import React from 'react';
import { auth } from '../FirebaseConfig';
import './style/Style.css';
import Swal from 'sweetalert2'

function SendButton ({client, table, products, setProducts,setClient}){
    
    const saveOrder = () => {
        const order ={
           'userId' : auth.currentUser.email,                       
            'client': client,
            'table': table,
            'products': products,
            'status': 'pending',
            'dateEntry': new Date(),
            'deliveringTime': 0
        }
        
        if(client === '' || table === '' || Object.keys(products).length === 0) {
            Swal.fire('Inserta los datos necesarios')
        } else {
            fetch('https://burger-queen-fake-server-app.herokuapp.com/orders', {
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        }).then(
            Swal.fire('La orden se envió con éxito a la cocina'),
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