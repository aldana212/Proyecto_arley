import React from 'react'
import Style from '../cssComponents/register.module.css'
import { useState} from "react";
import axios from "axios";
import swal from 'sweetalert2'



export function Register({click1, clicked1}) {
    
    const [cedula, setCedula] = useState('');
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [contraseña, setContraseña] = useState('');

    const store = async(e) =>{
      e.preventDefault()
      await axios.post('http://localhost:3009/user/register', {cedula: cedula, name:name, mail: mail, contraseña: contraseña})
      .then(res =>{
        swal.fire({
         icon: 'success',
         title: 'Exito',
         text: res.data.data,
        })
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

    return (
        <div>
            {click1 &&
            <form className={Style.form__register} onSubmit={store}>
            <h2 className={Style.form_title}>REGISTRO</h2>

            <div onClick={() =>clicked1(false)} className={Style.imgClose}>
                <i class='bx bx-x-circle' ></i>
            </div>

            <div className={Style.form_container}>
                <div className={Style.form_group}>
                    <input type="text" onChange={(e) => setCedula(e.target.value)} value={cedula} className={Style.form_input} name="Cedula" placeholder=" " />
                    <label for="Cedula" className={Style.form_label}>Cedula</label>
                </div>
                <div className={Style.form_group}>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} className={Style.form_input}  name="apellido" id="Apellido" placeholder=" " />
                    <label for="" className={Style.form_label}>Nombre</label>
                </div>
                <div className={Style.form_group}>
                    <input type="email" onChange={(e) => setMail(e.target.value)} value={mail} className={Style.form_input}  name="correo" id="Correo" placeholder=" " />
                    <label for="" className={Style.form_label}>Correo</label>
                </div>
                <div className={Style.form_group}>
                    <input type="password" onChange={(e) => setContraseña(e.target.value)} value={contraseña} className={Style.form_input} name="contraseña" id="Contraseña" placeholder=" " />
                    <label for="" className={Style.form_label}>Contraseña</label>
                </div>
                <button type='submit' className={Style.btnEnviar}>Enviar</button>
            </div> 
            </form>
              }
        </div>
    )
}
