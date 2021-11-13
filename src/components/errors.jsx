
function Errors (error){
    const firebaseErrors = [
        {
            'english': 'auth/wrong-password',
            'spanish': 'Contraseña incorrecta'
        },
        {
            'english': 'auth/too-many-requests',
            'spanish': 'Mucho request'
        }
    ]
    
    return firebaseErrors.forEach((elem)=>{
        if(error === elem.english){
            return elem.spanish;
        }
    })
}

export default Errors