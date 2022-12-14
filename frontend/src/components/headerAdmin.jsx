import React from 'react'
import { Link } from "react-router-dom"
import Style from '../cssComponents/header.module.css';

export function HeaderAdmin({ logOut, Avatar }) {
  return (
    <>
      <header className={Style.cont_header}>
          <div className={Style.nav} id={Style.container}>
              <Link to='/' href="" className={Style.logo}><i className='bx bxs-train'></i>Train Station</Link>
              <div className={Style.navbar}>
              <Link to='/AdminUser' className={Style.user}><i class='bx bxs-user' ></i>Home Users</Link>
              <Link to='/HomeAdmin' className={Style.user}><i class='bx bxs-train'></i>Home Trains</Link>
              <Link to='/' className={Style.user} onClick={logOut}><i class='bx bxs-user'></i>Cerrar</Link>
              {/* <Link to='/InfoUser' className={Style.btn}><i class='bx bxs-user' ></i> My acount</Link> */}
              <Link to='/InfoUser'><img className={Style.imgUser} src={Avatar} alt="Image User" /></Link>
              </div>
          </div>
    </header>
    </>
  )
}
