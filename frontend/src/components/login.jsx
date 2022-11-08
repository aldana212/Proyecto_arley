import React from 'react'
import Style from '../cssComponents/register.module.css'


export function Login({click, clicked}) {
    return (
        <>
          {click &&
            <form className={Style.form__register}>
            <h2 className={Style.form_title}>LOGIN</h2>

            <div onClick={() =>clicked(false)} className={Style.imgClose}>
                <i class='bx bx-x-circle' ></i>
            </div>

            <div className={Style.form_container}>
                <div className={Style.form_group}>
                    <input type="text" className={Style.form_input} name="Cedula" placeholder=" " />
                    <label for="Cedula" className={Style.form_label}>Cedula</label>
                </div>
                <div className={Style.form_group}>
                    <input type="password"  className={Style.form_input} name="contraseña" id="Contraseña" placeholder=" " />
                    <label for="" className={Style.form_label}>Contraseña</label>
                </div>
                <button type='submit' className={Style.btnEnviar}>Enviar</button>
            </div> 
            </form>
          }
        </>
    )
}
