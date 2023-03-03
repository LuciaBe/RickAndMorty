import style from './Form.module.css';
import { useState } from 'react';
import validation from '../F-validation.js';

const Form = ({login}) => { // en el RENDER de form en app.js pasamos por props {login}
                           // ahora debemos recibir la fc LOGIN en componente form
                           // IMPORTANTE //ES DECIR: por props paso cuando creo componente, y cuando lo renderizo

    const [userData, setUserData] = useState({
         username: '',
         password: '' });

    const [errors, setErrors] = useState({
        username: '',
        password:''
    })

    const handleInputChange = (event)=> {
        setUserData({
            ...userData, //hago copia del estado porq no cambio los dos juntos, sino uno a la vez
            [event.target.name]: event.target.value //username primero, password despues
        })
        setErrors(validation({
            ...userData, // copia de estado con name y passw
            [event.target.name]: event.target.value // modifico la propiedad dependiendo en donde este escribiendo el us, y lo q este escribiendo
            }))
    }
    const handleSubmit= (event) => {
        event.preventDefault();
        login(userData);
    }            


        return(  //CONDICIONAL EN ERRORS: si tengo algo en errors.username, mostrame <p>
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.formContainer} >
                <div className={style.item}> 
                <label htmlFor="username" className={style.label}>Username: </label>
                <input type='text' name='username' value={userData.username} 
                onChange={handleInputChange} className={style.input}></input>
                {errors.username && <p style={{color:'red'}}>{errors.username} </p>}
               <br/><br/>
                             
                <label htmlFor="password" className={style.label}>Password:     </label>
                <input type='text' name='password' value={userData.password} 
                onChange={handleInputChange} className={style.input}></input>
                {errors.password && <p style={{color:'red'}}>{errors.password} </p>}
                </div>



                <div className={style.login}> 
                <button className={style.button}>LOGIN</button>
                </div>
               
               
                
                <div className={style.invitado}>              
                    <p className={style.parrafo}>
                    Para ingresar como invitado: <br/>
                    Username: lubellardi@gmail.com <br/>
                    Password: 123abcd
                    </p>                    
                </div>
                
            </form>
            <img className={style.imagen} src='FOTO3.png' alt='imagen'></img>
            </div>
            
        )
    }


export default Form;