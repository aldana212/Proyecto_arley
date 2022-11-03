import React from 'react'
import Style from '../cssComponents/register.module.css'

export function Register({click1, clicked1}) {
    return (
        <div>
            {click1 &&
            <form  className={Style.formRegister} id="formulario">

                <div onClick={() =>clicked1(false)} className={Style.close} id="close">
                    <img  className={Style.imgClose}  alt="Cancel" />
                </div>

                <h2 className={Style.titles}>REGISTRO</h2>

                <input type="text" name="" className={Style.txt} placeholder="Ingrese su cedula" />
                <input type="text" name=""  className={Style.txt} placeholder="Ingrese su nombre" />        
                <input type="text" name=""  className={Style.txt} placeholder="Ingrese su correo" />        

                {/* <h2 className="titles">Ingresa tu contraseña</h2> */}
                <button type="submit" className= {Style.btnEnviar} id="btnEnviar">CONFIRMAR</button>

            </form>
              }
        </div>
    )
}
