import React from 'react'
import Style from '../cssComponents/register.module.css'
// import { Link } from 'react-router-dom';

import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import swal from 'sweetalert2'



export function Register({click1, clicked1}) {

  const [values, setValues ] = useState({
    cedula: '',
    name: '',
    mail: '',
    contraseña: '',
  })


  const handleInput = (e) =>{
    const {name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

    const navigate = useNavigate();
  const handleSubmit = async(e) =>{
    console.log(values);
    e.preventDefault()
      await axios.post('http://localhost:3009/user/register', values)
      .then(res =>{
        swal.fire({
         icon: 'success',
         title: 'Exito',
         text: res.data.data,
        })
        
        setTimeout(() => {
           navigate('/HomeAdmin')
        }, 2000);

       }).catch(err =>{
         if(err.response.data.error){
           swal.fire({
             icon: 'error',
             title: "error",
             text: err.response.data.error,
           })
         }else{
           swal.fire({
             icon: 'error',
             title: 'error',
             text: err.response.data.data,
           })
         }
       })
  }


    
    // const [cedula, setCedula] = useState('');
    // const [name, setName] = useState('');
    // const [mail, setMail] = useState('');
    // const [contraseña, setContraseña] = useState('');


    // const navigate = useNavigate();
    // const store = async(e) =>{
    //   e.preventDefault()
    //   await axios.post('http://localhost:3009/user/register', {cedula: cedula, name:name, mail: mail, contraseña: contraseña})
    //   .then(res =>{
    //     swal.fire({
    //      icon: 'success',
    //      title: 'Exito',
    //      text: res.data.data,
    //     })
        
    //     setTimeout(() => {
    //        navigate('/HomeAdmin')
    //     }, 2000);

    //    }).catch(err =>{
    //      if(err.response.data.error){
    //        swal.fire({
    //          icon: 'error',
    //          title: "error",
    //          text: err.response.data.error,
    //        })
    //      }else{
    //        swal.fire({
    //          icon: 'error',
    //          title: 'error',
    //          text: err.response.data.data,
    //        })
    //      }
    //    })
    // }

    return (
      <div>
          {click1 &&
            <div className={Style.container_form}>
                <form className={Style.form} onSubmit={handleSubmit}>
                <div onClick={() =>clicked1(false)} className={Style.imgClose}>
                        <i className='bx bx-x-circle' ></i>
                      </div>
                    <h1 className={Style.form_title}>Registrate</h1>
                    {/* <p className={Style.form_paragraph}>¿Aun no tienes una cuenta?<Link href="" className="form_link">Entra aqui</Link></p> */}
                      
            
                    <div className={Style.form__container}>
                        <div className={Style.form__group}>
                            <input 
                            type="text" 
                            name='cedula' 
                            id="Cedula" 
                            className={Style.form__input} 
                            placeholder=" "
                            onChange={handleInput}
                            value={values.cedula}
                            />
                            <label for="Cedula" className={Style.form__label}>Cedula:</label>
                            <span className={Style.form__line}></span>
                        </div>
            
                        <div className={Style.form__group}>
                            <input 
                            type="text" 
                            name='name' 
                            id="name" 
                            className={Style.form__input} 
                            placeholder=" "
                            onChange={handleInput}  
                            value={values.name}
                            />
                            <label for="name" className={Style.form__label}>Name:</label>
                            <span className={Style.form__line}></span>
                        </div>
            
                        <div className={Style.form__group}>
                            <input 
                            type="text"
                             name='mail' 
                             id="mail" 
                             className={Style.form__input} 
                             placeholder=" "
                             onChange={handleInput}
                             value={values.mail}
                             />
                            <label for="email" className={Style.form__label}>Email:</label>
                            <span className={Style.form__line}></span>
                        </div>
            
                        <div className={Style.form__group}>
                            <input 
                            type="password" 
                            name='contraseña' 
                            id="contraseña" 
                            className={Style.form__input} 
                            placeholder=" "
                            onChange={handleInput}
                            value={values.contraseña}
                            />
                            <label for="contraseña" className={Style.form__label}>Contraseña:</label>
                            <span className={Style.form__line}></span>
                        </div>
            
                        <button type="submit" className={Style.form__submit}>Entrar</button>
                    </div>
                </form>
    </div>
            }
      </div>
  )
}
