import '../components/style/Style.css';

const GetProducts = ({products, addProduct}) => {
    return (
        <div className= "products-menu">
            {(products.map((elem) => {
                return (
                    <button 
                    className= 'product'
                    key = { elem.id }
                    onClick = {() => addProduct(elem)}
                    >
                        <span className = 'image'>
                            <img src= { elem.image } alt = { elem.name }></img>
                         </span>
                        <span className = 'price'>
                            <span>{elem.name}</span>
                            <span>{'$ ' + elem.price}</span>
                        </span>
                    </button>
                    )
                    //} else {
                        // return (
                        //     <div 
                        //     className= 'product'                            
                        //     >
                        //         <span className = 'image'>
                        //             <img src= { elem.image } alt = { elem.name }></img>
                        //          </span>
                        //         <span className = 'price'>
                        //             <span>{elem.name}</span>
                        //             <button key = { elem.id } ></button>
                        //             <button ></button>
                        //             <span>{'$ ' + elem.price}</span>
                        //         </span>
                        //     </div> 
                        // )
                //     }
            }
            ))
            }
        </div>
    )
}

export default GetProducts