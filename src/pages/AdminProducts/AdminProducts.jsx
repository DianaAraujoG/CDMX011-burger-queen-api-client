import React, { Fragment } from 'react';
import { Link} from 'react-router-dom';
import Header from '../../components/Header';
import '../../components/style/Style.css'

function AdminProducts (){
    return(
        <Fragment>
            <Header>
              <div className="btnsHeader">
                <Link to = '/register' className='changeRoute'>
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
        </Fragment>
    )
}

export default AdminProducts;