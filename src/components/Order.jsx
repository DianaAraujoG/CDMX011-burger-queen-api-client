import React from 'react';
import './style/Style.css';

function OrderData({orderProducts , removeProduct, lessProduct, handleChange}) {  

    return (
        <div id="OrderData">
            <header>
                <h2> Comanda </h2>            
            </header>
            <div className= 'clientData'> 
                <label htmlFor= 'clientName'>Cliente: </label>
                <input 
                id= 'client-name'
                type='text'
                name = 'client'
                placeholder='Escribe el nombre del cliente'
                onChange= {handleChange}
                required
                ></input>
                <label htmlFor= 'tableName'>Mesa: </label>
                <select 
                id = 'table-name'
                autoComplete= 'off'
                name= 'table'
                onChange = {handleChange}
                required
                >
                    <option disabled> Selecciona la mesa del cliente</option>
                    <option value= '01'>01</option>
                    <option value= '02'>02</option>
                    <option value= '03'>03</option>
                    <option value= '04'>04</option>
                    <option value= '05'>05</option>
                    <option value= '06'>06</option>
                    <option value= '07'>07</option>
                    <option value= '08'>08</option>
                </select>
            </div>
            <table className="tableOrder">
            <tbody>
            <tr className= 'orderTitles'>
                <th>Producto</th>
                <th>Cant.</th>
                <th>Precio</th>
            </tr>
                {orderProducts.map(elem => (
                    <tr key= {elem.id}>
                        <td><button onClick= {() => removeProduct(elem)} className="btnRemove"> 
                            <img alt='borrar todo'
                            src= 'https://raw.githubusercontent.com/DianaAraujoG/La-Magia-de-Mexico/main/img-Burger-Queen/contenedor-de-basura.png'></img>
                        </button>                       
                        {elem.name} 
                        </td>
                        <td>
                        <button onClick = {() => lessProduct(elem)} className="btnLess">
                            <img alt= 'reducir cantidad de producto'
                            src= 'https://raw.githubusercontent.com/DianaAraujoG/La-Magia-de-Mexico/main/img-Burger-Queen/flecha-hacia-abajo.png'></img>
                        </button>                        
                        <span>{elem.qty} </span>
                        </td>
                        <td className="price">${elem.price * elem.qty}</td>
                    </tr>
                )) }
                </tbody>
            </table>
            
            <div className= 'totalOrder'>
                <h3>Total</h3>
                {<h3> ${orderProducts.reduce((previousValue, currentValue) => previousValue + (currentValue.price * currentValue.qty), 0)}</h3>}
            </div>
        </div>
    )
}

export default OrderData