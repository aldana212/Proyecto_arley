import React from 'react'
import Style from '../cssComponents/register.module.css'
// import { Link } from 'react-router-dom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';


export function Login({ click, clicked }) {

    const navigate = useNavigate()

    const [values, setValues] = useState({
        cedula: '',
        contraseña: ''
    })


    const handleInput = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:3009/user/login", values, {
            withCredentials: true,
        })
            .then((data) => {
                console.log(data);
                toast.success(data, {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(() => {
                    navigate('/AdminUser')
                }, 3000);
            }).catch(err => {
                console.log(err);
                toast.error(err.response.data.error, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }

    return (
        <>
            {click &&
                <div className={Style.container_form}>
                    <form className={Style.form} onSubmit={handleSubmit}>
                        <div onClick={() => clicked(false)} className={Style.imgClose}>
                            <i className='bx bx-x-circle' ></i>
                        </div>
                        <h1 className={Style.form_title}>Inicio sesion</h1>
                        {/* <p className={Style.form_paragraph}>¿Aun no tienes una cuenta?<Link href="" className="form_link">Entra aqui</Link></p> */}

                        <div className={Style.form__container}>
                            <div className={Style.form__group}>
                                <input
                                    type="text"
                                    name='cedula'
                                    id="Cedula"
                                    className={Style.form__input}
                                    placeholder=" "
                                    onChange={handleInput}
                                    value={values.cedula}
                                />
                                <label for="Cedula" className={Style.form__label}>Cedula:</label>
                                <span className={Style.form__line}></span>
                            </div>


                            <div className={Style.form__group}>
                                <input
                                    type="password"
                                    name='contraseña'
                                    id="contraseña"
                                    className={Style.form__input}
                                    placeholder=" "
                                    onChange={handleInput}
                                    value={values.contraseña}
                                />
                                <label for="contraseña" className={Style.form__label}>Contraseña:</label>
                                <span className={Style.form__line}></span>
                            </div>

                            <button type="submit" className={Style.form__submit}>Entrar</button>
                        </div>
                    </form>
                </div>
            }
        </>
    )
}
