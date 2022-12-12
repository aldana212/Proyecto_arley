import React from 'react'
import { Link } from "react-router-dom"
import Style from '../cssComponents/header.module.css';


export function Header({ logOut }) {
  return (
    <>
      <header className={Style.cont_header}>
        <div className={Style.nav} id={Style.container}>
          <Link to='/' href="" className={Style.logo}><i className='bx bxs-train'></i>Train Station</Link>
          <div classNameName={Style.navbar}>
            <Link to='/' className={Style.user} onClick={logOut}><i className='bx bxs-user'></i>Cerrar Sesion</Link>
            <button className={Style.btn}><i className='bx bxs-user' ></i> My acount</button>
          </div>
        </div>
      </header>
    </>
  )
}
