import React from 'react'
import Style from '../cssComponents/home.module.css'
import { Footer } from '../components/footer';
import logo from "../img/logo.jpg";
import { useState} from "react";
import { Register } from '../components/register';
import { Login} from '../components/login';


export function Home() {
    const [clickLogin, setClickLogin] = useState(false);
    const [clickRegis, setClickRegis] = useState(false);

  return (
    <>
      <header className={Style.header}>
         <img className={Style.logo} src={logo} alt="Logo"></img>
           <nav>
              <ul className={Style.links_container}>
                 <li>
                 <button onClick={() =>setClickLogin(!clickLogin)} id="btnInicioSesion" className={Style.links}>Iniciar Sesion</button>
                 </li>
                 <li>
                 <button onClick={() =>setClickRegis(!clickRegis)} id="btnRegistro" className={Style.links}>Registrarme</button>
                 </li>
              </ul>
           </nav>
      </header>
      <main className={Style.article}>
        <p className={Style.parrafo}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo atque
            voluptatem natus suscipit quia! Magnam commodi eius ducimus amet quae
            nostrum corporis? Cumque autem blanditiis dicta, repudiandae numquam
            suscipit ipsa?
        </p>
        <Register click1={clickRegis} clicked1={setClickRegis}/>
        <Login click={clickLogin} clicked={setClickLogin}/>
     </main>
     <Footer />
    </>
  )
}
