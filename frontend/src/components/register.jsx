import React from 'react'
import Style from '../cssComponents/register.module.css'

export function Register({click1, clicked1}) {
    return (
        <div>
            {click1 &&
            <form className={Style.form__register}>
            <h2 className={Style.form_title}>REGISTRO</h2>

            <div onClick={() =>clicked1(false)} className={Style.imgClose}>
                <i class='bx bx-x-circle' ></i>
            </div>

            <div className={Style.form_container}>
                <div className={Style.form_group}>
                    <input type="text" className={Style.form_input} name="Cedula" placeholder=" " />
                    <label for="Cedula" className={Style.form_label}>Cedula</label>
                </div>
                <div className={Style.form_group}>
                    <input type="text"  className={Style.form_input}  name="apellido" id="Apellido" placeholder=" " />
                    <label for="" className={Style.form_label}>Nombre</label>
                </div>
                <div className={Style.form_group}>
                    <input type="email"  className={Style.form_input}  name="correo" id="Correo" placeholder=" " />
                    <label for="" className={Style.form_label}>Correo</label>
                </div>
                <div className={Style.form_group}>
                    <input type="password"  className={Style.form_input} name="contraseña" id="Contraseña" placeholder=" " />
                    <label for="" className={Style.form_label}>Contraseña</label>
                </div>
                <button type='submit' className={Style.btnEnviar}>Enviar</button>
            </div> 
            </form>
              }
        </div>
    )
}
