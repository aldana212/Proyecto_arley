import React from 'react'
import { Link } from "react-router-dom"
import Style from '../cssComponents/header.module.css';
import userImg from '../img/userImage.jpg';


export function Header({logOut}){
  return (
    <>
      <header className={Style.cont_header}>
          <div className={Style.nav} id={Style.container}>
              <Link to='/' href="" className={Style.logo}><i className='bx bxs-train'></i>Train Station</Link>
              <div className={Style.navbar}>
              <Link to='/' className={Style.user} onClick={logOut}><i class='bx bxs-user'></i>Cerrar1</Link>
              <img className={Style.imgUser} src={userImg} alt="Image User" />
              </div>
          </div>
    </header>
    </>
  )
}
