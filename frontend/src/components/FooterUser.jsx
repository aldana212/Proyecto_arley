import React from 'react'
import Style from '../cssComponents/footerUser.module.css'
import { Link } from 'react-router-dom';

export function FooterUser() {
    return (
        <>
        <footer>
            <div className={Style.footerContent}>
                <h3>Train Station</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi aliquam maiores reiciendis iusto vitae magni cumque obcaecati dolorum quas, nulla suscipit nisi fugiat consequatur sint voluptas, doloremque dolores vero?</p>
                <ul className={Style.socials}>
                    <li><Link href='#'><i className='bx bxl-facebook'></i></Link></li>
                    <li><Link href='#'><i className='bx bxl-whatsapp'></i></Link></li>
                    <li><Link href='#'><i className='bx bxl-instagram'></i></Link></li>
                </ul>
            </div>
            <div className={Style.footerBottom}>
                <p>Copyright &copy;2022 TrainStation. Designed by <span>Cristofert, Daniel, Harold.</span></p>
            </div>  
        </footer>
        </>
    )
}
