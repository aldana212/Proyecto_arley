import React from 'react'
import Style from '../cssComponents/register.module.css'
import logo from "../img/logo.jpg";


export function Login({click, clicked}) {
    return (
        <>
          {click &&
          <form  className={Style.form} id="form">
          <div onClick={() => clicked(false)} className={Style.close} id="close">
            <img className={Style.imgClose} img={logo} alt="" />
          </div>
          <h2 className={Style.h2}>INICIAR SESION</h2>
          <input className={Style.txtCedulaIniciar} type="text" id="txtCedulaIniciar" placeholder="Ingresa tu cedula" />
          <input className={Style.txtCedulaIniciar} type="text" id="txtCedulaIniciar" placeholder="Ingresa tu " />
         </form>
         }
        </>
    )
}
