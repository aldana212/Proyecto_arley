import React from "react";
import Style from "../cssComponents/infoUser.module.css";
import { Header } from "../components/header";
import { HeaderAdmin } from '../components/headerAdmin'
import { FooterUser } from '../components/FooterUser';
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

  useEffect(() => {
    veryToken()
    getReser()
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
      console.log(data1);
      setDatos(data1)
      setAvatar(Avatar);
      if (!data.status) {
        removeCookie('jwt')
        navigate("/")
      } else {
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

  const [CarRes, setCarRes] = useState([])

  const getReser = async () => {
    const cedula = datos.cedula;
    console.log(cedula);
    const { data } = await axios.get(`http://localhost:3009/user/UserCard/${cedula}`)
    console.log(data);
    setCarRes(data.responde)
  }

  return (
    <>
      {
        datos.id_rol1 === 1 ?
          <>
            <HeaderAdmin logOut={logOut} Avatar={avatar} />
          </> :
          <>
            <Header logOut={logOut} Avatar={avatar} />
          </>
      }
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

        <div className="container">
          <div className="crud shadow-lg p-3  bg-body rounded mt-5">
            <div className="row">
              <div className="table-responsive " >
              {/* <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" id={Style.title}><h2><b>My Bookings</b></h2></div> */}
                <h3 className={Style.title}>My Bookings</h3>
                <Table className="table table-striped table-hover table-bordered ">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>img</th>
                      <th>Origen</th>
                      <th>Destino</th>
                      <th>Fecha de Reserva</th>
                      <th>Precio</th>
                      <th>Cupos</th>
                      <th>Fecha de Salida</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CarRes.map((card) => (
                      <tr>
                        <td>{card.codigo_servicio}</td>
                        <td><img src={card.url_image} style={{ height: '70px', width: '70px', marginLeft: '20px' }} /></td>
                        <td>{card.origen}</td>
                        <td>{card.destino}</td>
                        <td>{card.fecha_salidad}</td>
                        <td>{card.precio}</td>
                        <td>{card.cupos}</td>
                        <td>{card.hora_salidad}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

              </div>
            </div>

          </div>
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
      <FooterUser />
    </>
  )
}
