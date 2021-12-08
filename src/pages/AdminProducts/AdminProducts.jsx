import React, { Fragment, useState, useEffect} from 'react';
import { Link} from 'react-router-dom';
import Header from '../../components/Header';
import '../../components/style/Style.css';
import GetProducts from '../../components/GetProducts';
import FormProduct from '../../components/FormProduct';
import Swal from 'sweetalert2';

   
function AdminProducts (){

    const [products, setProducts] = useState([]);
    const [data, setData] =useState({})
   
     const getProducts = () => {
        fetch('https://burger-queen-fake-server-app.herokuapp.com/products')
        .then(res => {
            return res.json();
        })
        .then(products => {
            setProducts(products);                
        })
        .catch(error => {
            alert(error);
        })
     }

    useEffect(() => {
        getProducts()
    }, []);


    const signPromise = (createName,createPrice, createImg, createType) => {
        if(createName !== '' && createPrice !== ''  && createImg !== ''  && createType !== ''){
            // eslint-disable-next-line array-callback-return
            const existUser = products.map((elem) => { if( createName === elem.name) return elem.name})
            existUser.includes(createName) ? alert('Este producto ya esta registrado') :
            saveProductInfo(createName,createPrice, createImg, createType);
        } else {            
            Swal.fire('Ingresa todos los datos necesarios')
        }        
    }

    const saveProductInfo = (createName,createPrice, createImg, createType ) => {
        fetch('https://burger-queen-fake-server-app.herokuapp.com/products', {
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": createName,
                "price": createPrice,
                "image": createImg,
                "type": createType ,
                "dataEntry": new Date()             
            })
        }).then(response => response.json())
        .then(Swal.fire('usuario creado exitosamente'))
        .then(() => getProducts())
    }
    
    const deleteProduct= (product) => {
        Swal.fire({
            title: 'Eliminar producto',
            text: '¿Deseas eleminar este producto? Al confirmar, no podrás revertir el cambio',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://burger-queen-fake-server-app.herokuapp.com/products/' + product.id, {
                method: 'DELETE'
                }).then(Swal.fire('Empleado eliminado'))
                .then(() => getProducts())
            }})
    }

    const editProduct = (Name, Price,  Img,  Type, product ) => {
        
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( { ...product,
                "name":  Name,
                "price":  Price,
                "image":  Img,
                "type":  Type ,
            } )
        };
        fetch('https://burger-queen-fake-server-app.herokuapp.com/products/' + product.id, requestOptions)
            .then(response => response.json())
            .then(Swal.fire('Producto editado :)'))
            .then(() => getProducts())
    }

    return(
        <Fragment>
            <Header>
              <div className="btnsHeader">
                <Link to = '/adminUsers' className='changeRoute'>
                    <button className='btnRegister'>
                        <img src="https://i.ibb.co/J77T75M/usuario-Button.png" alt="usuario-Button"></img>
                    </button>
                </Link>
                <Link to = '/adminProducts' className='changeRoute'>
                    <button className='btnAdminProducts'>
                        <img src="https://i.ibb.co/zH0DFNN/new-product-Button.png" alt="new-product-Button"></img>
                    </button>              
                </Link>
              </div>
            </Header>
            <div className="AdminProducts">
                {Object.entries(data).length === 0 ?  (data && <FormProduct  product={data} saveData={signPromise} ></FormProduct>): 
                (data && <FormProduct product={data} editProduct={editProduct} ></FormProduct> )}
                <div className='productsData'>
                   { products && <GetProducts Products={products}  deleteProducts= {deleteProduct} setData={setData}></GetProducts>}
                </div>
            </div>
        </Fragment>
    )
}

export default AdminProducts;