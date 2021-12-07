import React, { Fragment, useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import Header from '../../components/Header';
import FormRegister from '../../components/FormRegister';
import GetUsers from '../../components/GetUsers';
// import ModalUsers from '../../components/ModalUsers';
import Swal from 'sweetalert2';
import '../../components/style/Style.css';


function AdminUsers (){ 
    
    const [users, setUsers] = useState([]);
    const [data, setData] =useState({})
   
     const getUsers = () => {
        fetch('https://burger-queen-fake-server-app.herokuapp.com/users')
        .then(res => {
            return res.json();
        })
        .then(users => {
            setUsers(users);                
        })
        .catch(error => {
            alert(error);
        })
     }

    useEffect(() => {
        getUsers()
    }, []);
    
    const signPromise = (signMail,signPassword, signUsername, signRole) => {                 
        if(signMail !== '' && signPassword !== ''  && signUsername !== ''  && signRole !== ''){
            // eslint-disable-next-line array-callback-return
            const existUser = users.map((elem) => { if( signMail === elem.email) return elem.email})
            existUser.includes(signMail) ? alert('Este correo ya esta registrado') :
            saveUserInfo(signMail,signPassword, signUsername, signRole);
        } else {            
            Swal.fire('Ingresa todos los datos necesarios')
        }        
    }

    const saveUserInfo = (signMail,signPassword, signUsername, signRole ) => {
        fetch('https://burger-queen-fake-server-app.herokuapp.com/users', {
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: signMail,
                password: signPassword,
                name: signUsername,
                role: signRole,
                dateEntry: new Date(),               
            })
        }).then(response => response.json())
        .then(Swal.fire('usuario creado exitosamente'))         
    }
 
    const deleteUser = (user) => {
        Swal.fire({
            title: 'Eliminar empleado',
            text: '¿Deseas eleminar este empleado? Al confirmar, no podrás revertir el cambio',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('https://burger-queen-fake-server-app.herokuapp.com/users/' + user.id, {
                method: 'DELETE'
                }).then(Swal.fire('Empleado eliminado'))
                .then(() => getUsers())
            }})
    }

    

    

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
            <div className="AdminUsers">   
                {data ? (data && <FormRegister saveUser={signPromise} user={data}></FormRegister> ):
                <FormRegister saveUser={signPromise} ></FormRegister>}
                <div className='usersData'>
                    {users && <GetUsers Users={users} deleteUser={deleteUser} setData={setData}></GetUsers>}
                    {console.log(data)}
                </div>
                {/* <ModalUsers show= {show}></ModalUsers> */}
            </div>

        </Fragment>
    )
}

export default AdminUsers;