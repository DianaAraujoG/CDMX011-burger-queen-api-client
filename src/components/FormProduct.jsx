import React, { Fragment, useState, useEffect } from 'react';
import './style/Style.css';
// import Swal from 'sweetalert2';

function FormProduct ({saveData, product, editProduct}) {

    const [createPrice, setcreatePrice] = useState('');
    const [createImg, setcreateImg] = useState('');
    const [createName, setcreateName] = useState('');
    const [createType, setcreateType] = useState('');
    console.log(Object.entries(product).length);

    // const [id, setID] = useState(null);

  useEffect(() => {
    if(product){
      setcreatePrice(product.price)
      setcreateImg(product.image)
      setcreateName(product.name)
      setcreateType(product.type)
    }
         
 }, [product]);
    
    return (
        <Fragment>
          <main className="formRegister">
             <form id='formSignUp'>
                <h1 className ='h1Form'>{Object.entries(product).length === 0 ? 'Registra un nuevo producto' : 'Editar'}</h1>
                <label htmlFor= 'formName'> Nombre: </label>
                 <input
                 type='text'
                 placeholder='Ejemplo'
                 id= 'formName'
                 onChange={(event) => {
                    setcreateName(event.target.value);
                  }}
                  value={createName}></input>
                 <label htmlFor= 'formPrice'> Precio: </label>
                 <input
                 type='number'
                 placeholder='10'
                 id= 'formPrice'
                 onChange={(event) => {
                    setcreatePrice(event.target.value);
                  }}
                  value={createPrice}></input>
                 <label htmlFor= 'formImage'> URL imagen: </label>
                 <input
                 type='url'
                 placeholder='https://example.com'
                 pattern='https://.*'
                 id= 'formImage'
                 className= 'formImage'
                 onChange={(event) => {
                    setcreateImg(event.target.value);
                  }}
                  value={createImg}></input>  
                  <label htmlFor= 'formType'> Tipo: </label>
                  <select 
                  name = 'formType' 
                  id='formType'
                  className='formType'
                  onChange= {(event) => {
                    setcreateType(event.target.value);
                  }}
                  value={createType}>
                      <option disabled> Selecciona el tipo de producto</option>
                      <option value= 'desayuno'>Desayuno</option>
                      <option value= 'almuerzo'>Almuerzo</option>
                  </select>
                 {Object.entries(product).length === 0 ? <button 
                  className= 'buttonForm'
                  type='button'
                  onClick={() => {saveData(createName,createPrice, createImg, createType)}}>
                    Registrar</button> : <button 
                  className= 'buttonForm'
                  type='button'
                  onClick={() => {editProduct(createName,createPrice, createImg, createType, product) }}
                  >Editar</button>
                  }                            
             </form>
          </main>          
        </Fragment>
    )
}

export default FormProduct