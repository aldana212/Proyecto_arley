import React from 'react'
import { Link } from "react-router-dom"
import Style from '../cssComponents/header.module.css';
import logo from "../img/logo.jpg";


export function Header(){
  return (
    <>
        <header>
        <Link href="#" className={Style.logo}><img src={logo} alt="" /></Link>
        <h1>TRAIN STATION</h1>
        <div className={Style.main}>
            <Link className={Style.user}><i class='bx bxs-user'></i>Cerrar</Link>
            <Link className={Style.user}><i class='bx bxs-exit'></i>Crear</Link>
        </div>
        </header>
    </>
  )
}
