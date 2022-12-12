import React from 'react'
import Style from '../cssComponents/footerUser.module.css'

export function FooterUser() {
    return (
        <>
        <footer>
            <div className={Style.footerContent}>
                <h3>Train Station</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi aliquam maiores reiciendis iusto vitae magni cumque obcaecati dolorum quas, nulla suscipit nisi fugiat consequatur sint voluptas, doloremque dolores vero?</p>
                <ul className={Style.socials}>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Instagram</a></li>
                </ul>
            </div>
            <div className={Style.footerBottom}>
                <p>Copyright &copy;2022 TrainStation. Designed by <span>Cristofert, Daniel, Harold</span></p>
            </div>  
        </footer>
        </>
    )
}
