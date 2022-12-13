import React from "react";
import Style from "../cssComponents/infoUser.module.css";
import { Header } from "../components/header";
import { FooterUser } from '../components/FooterUser';
import imgUser from "../img/userImage.jpg";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { EditUserFormAd } from "../components/UserFormAd";
import Table from 'react-bootstrap/Table';


export function InfoUser() {

  const navigate = useNavigate();
  const [avatar, setAvatar] = useState([])
  const [cookies, setCookie, removeCookie] = useCookies([])
  const [datos, setDatos] = useState([])
  const [RowData, SetRowData] = useState({
    cedula: '',
    name: '',
    mail: '',
  })
  const [id, setId] = useState("");
  const [productImg, setProductImg] = useState("");

  const [show, setShow] = useState(false);

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

  const handleInputEdit = (e) => {
    const { name, value } = e.target
    SetRowData({
      ...RowData,
      [name]: value,
    })
  }

  //funcion para update un Users
  const handleFormUpdate = async (e) => {
    e.preventDefault();
    const dataNueva = { RowData, image: productImg }
    await axios.put(`http://localhost:3009/user/${id}`, dataNueva)
      .then((e) => {
        toast.success(e.data.responde, {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        handleClose()
      }).catch((err) => {
        toast.error("dasdsa", {
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

  const ShowModelInser1 = () => {
    setShow(true)
  };

  //funcion para mostrar las modal
  const handleClose = () => {
    setShow(false)
    setProductImg("");
  };

  useEffect(() => {
    veryToken()
  }, [])

  const veryToken = async () => {
    if (!cookies.jwt) {
      toast.error("error")
      navigate("/")
    } else {
      const { data } = await axios.get(
        'http://localhost:3009/user/Admin',
        {
          withCredentials: true,
        })
      const Avatar = data.data.url_image
      const data1 = data.data
      // console.log(data.data.);
      setDatos(data1)
      setAvatar(Avatar);
      console.log(avatar);
      console.log(datos);
      if (!data.status) {
        removeCookie('jwt')
        navigate("/")
      }else {
        toast.success(`Bienvenido ${data.data.name}`, {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  }

  const logOut = () => {
    removeCookie('jwt')
    navigate("/")
  }

  return (
    <>
      <Header logOut={logOut} Avatar={avatar} />
      <section className={Style.seccionPerfilUsuario}>
        <div className={Style.perfilUsuarioPortada}>
          <div className={Style.perfilUsuarioAvatar}>
            <img src={avatar} alt="img-avatar" />
          </div>
        </div>
        <div className={Style.perfilUsuarioBody}>
          <div className={Style.perfilUsuarioBio}>
            <h3 className={Style.titulo}>{datos.name}</h3>
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
              <li><i className="icono fas fa-map-marker-alt"></i> {datos.cedula}</li>
              <li><i className="icono fas fa-calendar-alt"></i> {datos.mail}</li>
              <li><i className="icono fas fa-user-check"></i> {datos.id_rol1}</li>
            </ul>
          </div>
          <button className={Style.btnUpdate} onClick={() => { ShowModelInser1(SetRowData(datos), setId(datos.cedula)) }} role="button">UPDATE MY INFORMATION</button>
        </div>

      <div className={Style.container}>
        <h3 className={Style.title}>My Bookings</h3>

        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

        </div>
      </section>
      <EditUserFormAd show={show}
        handleClose={handleClose}
        handleFormUpdate={handleFormUpdate}
        handleProductImageUpload={handleProductImageUpload}
        handleInputEdit={handleInputEdit}
        RowData={RowData}
        productImg={productImg}
      />
            <FooterUser/>
    </>
  )
}
