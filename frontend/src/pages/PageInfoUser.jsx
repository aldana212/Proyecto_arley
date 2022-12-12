import React from "react";
import Style from "../cssComponents/infoUser.module.css";
import { Header } from "../components/header";
import imgUser  from "../img/userImage.jpg";

export function InfoUser() {
    return (
  <>
    <Header />

    <section className={Style.seccionPerfilUsuario}>
            <div className={Style.perfilUsuarioPortada}>
                <div className={Style.perfilUsuarioAvatar}>
                    <img src={imgUser} alt="img-avatar" />
                </div>
            </div>
        <div className={Style.perfilUsuarioBody}>
            <div className={Style.perfilUsuarioBio}>
                <h3 className={Style.titulo}>Maria Alejandra De la Cruz</h3>
                <p className={Style.texto}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={Style.perfilUsuarioFooter}>
                <ul className={Style.listaDatos}>
                    <li><i className="icono fas fa-map-signs"></i> Id:</li>
                    <li><i className="icono fas fa-phone-alt"></i> Email:</li>
                    <li><i className="icono fas fa-briefcase"></i> Type User</li>
                </ul>
                <ul className={Style.listaDatos}>
                    <li><i className="icono fas fa-map-marker-alt"></i> 1082545189</li>
                    <li><i className="icono fas fa-calendar-alt"></i> cris2001@gmail.com</li>
                    <li><i className="icono fas fa-user-check"></i> Cliente</li>
                </ul>
            </div>
                <button className={Style.btnUpdate} role="button">UPDATE MY INFORMATION</button>
        </div>
    </section>
  </>
    )
}
