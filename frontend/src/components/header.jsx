import React from 'react'
import { Link } from "react-router-dom"
import Style from '../cssComponents/header.module.css';


export function Header(){
  return (
    <>
      <header className={Style.cont_header}>
          <div className={Style.nav} id={Style.container}>
              <Link to='/' href="" className={Style.logo}><i className='bx bxs-train'></i>Train Station</Link>
              <div className={Style.navbar}>
              <Link to='/' className={Style.user}><i class='bx bxs-user'></i>Cerrar</Link>
              <button className={Style.btn}><i class='bx bxs-user' ></i> My acount</button>
              </div>
              
          </div>
    </header>
    </>
  )
}
