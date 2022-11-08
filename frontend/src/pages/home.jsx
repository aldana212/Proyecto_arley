import React from 'react'
import Style from '../cssComponents/home.module.css'
// import { Footer } from '../components/footer';
import logo from "../img/logo.jpg";
import train from "../img/Train-amico.png";
import { useState} from "react";
import { Register } from '../components/register';
import { Login} from '../components/login';


export function Home() {
    const [clickLogin, setClickLogin] = useState(false);
    const [clickRegis, setClickRegis] = useState(false);

  return(
    <>
      <header className={Style.header}>
        <a href="#" className={Style.logo}><img src={logo} alt="" /></a>
        <ul className={Style.navbar}>
         <li><button onClick={() =>setClickLogin(!clickLogin)}>Iniciar Sesion</button></li>
         <li><button onClick={() =>setClickRegis(!clickRegis)}>Registrarme</button></li>
        </ul>
      </header>

    <Register click1={clickRegis} clicked1={setClickRegis}/>
    <Login click={clickLogin} clicked={setClickLogin}/>

    <section className={Style.container}>
      <div className={Style.text}>
        <div className={Style.slide}>
            <span className={Style.one}>hello</span>
        </div>
        <h1>daniel</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem amet animi molestiae beatae 
        perspiciatis consectetur vel quisquam sapiente corrupti, quae fuga minima, pariatur, nulla tempore unde facilis aliquid ut qui!</p>
        <div className={Style.button}>
            <a href="#" className={Style.btn}>button</a>
        </div>
      </div>
      <div className={Style.logo1}>
        <img src={train} alt="" />
      </div>
    </section>

    <div className={Style.social}>
        <ul>
            <li><a href="#"><i class='bx bxl-facebook' id={Style.facebook}></i></a></li>
            <li><a href="#"><i class='bx bxl-whatsapp' id={Style.whatsapp}></i></a></li>
            <li><a href="#"><i class='bx bxl-instagram' id={Style.instagram}></i></a></li>
        </ul>
    </div>
    </>
  );
}
