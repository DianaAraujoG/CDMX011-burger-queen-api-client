import React, { Fragment } from 'react';
import '../components/style/Style.css';
//import FormRegister from '../components/FormRegister'

const GetProducts = ({Products, deleteProducts, setData}) => {
    return(
        <Fragment>
            { Products.map((product) => (
                <div key={product.id} className='productCard'>
                    <div className='productImg'> <img src={product.image} alt={product.name}></img></div>
                    <h1>{product.name}</h1>
                    <h2>{product.type}</h2>
                    <h2>Precio: ${product.price}</h2>
                    <div className='btnsProducts'>
                        <button onClick= {() => deleteProducts(product)}>Eliminar</button>
                        <button onClick= {() => setData(product)}>Editar</button>
                    </div>
                    <div className='footerProducts'>
                        <h3>Desde: {product.dataEntry}</h3>
                    </div>
                </div>
            ))
            }
        </Fragment>
    )
}

export default GetProducts;