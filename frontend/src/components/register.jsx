import React from 'react'
import Style from '../cssComponents/register.module.css'
// import { Link } from 'react-router-dom';

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import noprofil from "../img/noprofil.jpg";


export function Register({ click1, clicked1 }) {

  const [productImg, setProductImg] = useState("");

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFileData(file);
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();
    if (file) {
      // readAsDataURL es usado para leer el contenido del especificado Blob o File.
      reader.readAsDataURL(file);
      // onLoadEnd se utiliza para llamar a una función cuando las cargas de imagen de la red se realizan correctamente o fallan. 
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };


  const [values, setValues] = useState({
    cedula: '',
    name: '',
    mail: '',
    contraseña: '',
  })


  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    const dataNueva = { values, image: productImg }
    await axios.post('http://localhost:3009/user/register', dataNueva)
      .then(({ data }) => {
        console.log(data);
        toast.success(data.responde, {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        clicked1(false)
        setValues('')
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
    <div>
      {click1 &&
        <div className={Style.container_form}>
          <form className={Style.form} onSubmit={handleSubmit}>
            <div onClick={() => clicked1(false)} className={Style.imgClose}>
              <i className='bx bx-x-circle' ></i>
            </div>
            <h1 className={Style.form_title}>Registrate</h1>
            {/* <p className={Style.form_paragraph}>¿Aun no tienes una cuenta?<Link href="" className="form_link">Entra aqui</Link></p> */}
            <div className={Style.form__container}>
              <div class={Style.upload}>
                {productImg ? <>
                  <img src={productImg} alt="image!" />
                </> :
                  <img src={noprofil} alt="image!" />
                  }
                <div class={Style.round}>
                <input
                  type="file"
                  name='image'
                  id="image"
                  className={Style.form__input}
                  placeholder=" "
                  onChange={handleProductImageUpload}
                />
                  <i class='bx bxs-camera-plus'></i>
                </div>
              </div>
              <div className={Style.form__group}>
              </div>
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
                  type="text"
                  name='name'
                  id="name"
                  className={Style.form__input}
                  placeholder=" "
                  onChange={handleInput}
                  value={values.name}
                />
                <label for="name" className={Style.form__label}>Name:</label>
                <span className={Style.form__line}></span>
              </div>

              <div className={Style.form__group}>
                <input
                  type="text"
                  name='mail'
                  id="mail"
                  className={Style.form__input}
                  placeholder=" "
                  onChange={handleInput}
                  value={values.mail}
                />
                <label for="email" className={Style.form__label}>Email:</label>
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
        </div >
      }
    </div >
  )
}
