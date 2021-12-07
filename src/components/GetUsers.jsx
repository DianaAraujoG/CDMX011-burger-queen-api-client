import React, { Fragment } from 'react';
import '../components/style/Style.css';
//import FormRegister from '../components/FormRegister'

const GetUsers = ({Users, deleteUser, setData}) => {
    return(
        <Fragment>
            { Users.map((user) => (
                <div key={user.id} className='userCard'>
                    { user.role === 'chef' ? 
                    <div className='imgUser'>
                    <img src='https://i.ibb.co/ZmHdLPF/Fotito-chef.png' alt ='chefUser'/>
                    </div> 
                    : user.role === 'admin' ? 
                    <div className='imgUser'>
                        <img src='https://i.ibb.co/yfCBr32/Fotito-admin.png' alt ='adminUser'/>
                    </div> 
                    : <div className='imgUser'>
                        <img src='https://i.ibb.co/WcXTyzJ/Fotito-mesero.png' alt ='waitressUser'/>
                    </div>
                    }
                    <h1>{user.name}</h1>
                    <h2>{user.role}</h2>
                    <h2>{user.email}</h2>
                    <div className='btnsUsers'>
                        <button onClick= {() => deleteUser(user)}>Eliminar</button>
                        <button onClick= {() => setData(user)}>Editar</button>
                    </div>
                    <div className='footerUser'>
                        <h3>Empleado desde: {user.dateEntry}</h3>
                    </div>
                </div>
            ))

            }
        </Fragment>
    )
}

export default GetUsers;