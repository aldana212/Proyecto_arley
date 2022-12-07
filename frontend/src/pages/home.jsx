import React from 'react'
import Style from '../cssComponents/home.module.css'
import { useState} from "react";
import { Register } from '../components/register';
import { Login} from '../components/login';
import { Link } from 'react-router-dom';


export function Home() {
  
    const [clickLogin, setClickLogin] = useState(false);
    const [clickRegis, setClickRegis] = useState(false);

    return(
      <>
        <Register click1={clickRegis} clicked1={setClickRegis}/>
        <Login click={clickLogin} clicked={setClickLogin}/>
      <header className={Style.cont_header}>
        <div className={Style.nav} id={Style.container}>
            <Link href="" className={Style.logo}><i className='bx bxs-train'></i>Train Station</Link>
            <ul className={Style.navbar}>
                <li><Link  to='/HomeUsers'>Home</Link></li>
                <li><Link to='/HomeAdmin'>Trains</Link></li>
                <li><Link to='/AdminUser'>Users</Link></li>
                <li><Link >porperti</Link></li>
            </ul>

            <button onClick={() =>setClickLogin(!clickLogin)} className={Style.btn}><i class='bx bxs-user' ></i> Sing in</button>
        </div>
    </header>

  

    <section className={Style.home}>
      <div className={Style.text}>
        <div className={Style.slide}>
            <span className={Style.one}>hello</span>
            <h1>daniel</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem amet animi molestiae beatae 
        perspiciatis consectetur vel quisquam sapiente corrupti, quae fuga minima, pariatur, nulla tempore unde facilis aliquid ut qui!</p>
        <div className={Style.button}>
        <li><button onClick={() =>setClickRegis(!clickRegis)} className={Style.btn1}>sing up</button></li>
        </div>
        </div>
        {/* <div className={Style.logo1}>
            <img src="./logo.jpg" alt="" />
          </div>  */}
      </div>
    </section>

    <div className={Style.social}>
        <ul>
            <li><Link href="#"><i className='bx bxl-facebook' id={Style.facebook}></i></Link></li>
            <li><Link href="#"><i className='bx bxl-whatsapp' id={Style.whatsapp}></i></Link></li>
            <li><Link href="#"><i className='bx bxl-instagram' id={Style.instagram}></i></Link></li>
        </ul>
    </div>
  
    </>
  );
}
