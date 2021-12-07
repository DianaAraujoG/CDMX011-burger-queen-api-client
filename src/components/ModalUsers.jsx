import React, { Fragment } from 'react'

const ModalUsers = ({show, user}) => {
    if(!show){
        return null
    }
    /* const [id, setID] = useState(null); */

    /* useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []); */
    return (
        <Fragment>            
            <main className='modalUsers'>
                <form>
                    <h1> Editar usuario </h1>
                    <label htmlFor= 'formUsername'> Nombre: </label>
                    <input
                    type='text'
                    placeholder='Ejemplo'
                    id= 'formUsername'></input>
                </form>           

            </main>
        </Fragment>
        
    )
}

export default ModalUsers