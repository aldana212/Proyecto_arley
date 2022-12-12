import React from 'react'
import { Button, Modal, Row } from 'react-bootstrap';
import { Header } from '../components/header'
import { useState, useEffect } from "react";
import axios from 'axios';
import swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Spiner } from "../components/Spiner";
import { useCookies } from 'react-cookie';
import { CreateUserFormAd, EditUserFormAd } from "../components/UserFormAd";

export function Adm_Users() {

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

  const handleInputEdit = (e) => {
    const { name, value } = e.target
    SetRowData({
      ...RowData,
      [name]: value,
    })
  }

  //se utilizo para la navegacion
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies([])

  useEffect(() => {
    veryToken()
    setisLoding(true);
    getUsers()
  }, [])

  const [avatar, setAvatar] = useState([])

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
      setAvatar(Avatar);
      if (!data.status) {
        removeCookie('jwt')
        navigate("/")
      } else if (data.data.id_rol1 === 2) {
        navigate('/')
        toast.error("kakak", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
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

  const [isLoding, setisLoding] = useState(true);

  //  utilizo para obtener los datos de la base de datos users y cambiar el estado
  const [users, setUsers] = useState([])

  //utilizo para guardar y cambiar los datos de editar
  const [RowData, SetRowData] = useState({
    cedula: '',
    name: '',
    mail: '',
  })

  //utilice para guardar y cambiar el valor de los input del fomu crear Users
  const [values, setValues] = useState({
    cedula: '',
    name: '',
    mail: '',
    contraseña: '',
    // id_rol1: '',	
  });

  //utilice para almacenar el id del usuario que voy a editar
  const [id, setId] = useState("");

  //utilice para las ventanas modal cambiar los estados
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);

  //funcion para traer todos los Users
  const getUsers = async () => {
    const { data } = await axios.get('http://localhost:3009/user/Users/')
    setUsers(data.data)
    setisLoding(false);
  }

  //funcion para eliminar 1 Users
  const deleteUsers = async (id) => {
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3009/user/${id}`)
          .then(e => {
            console.log(e);
            swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            getUsers()
          })
      }
    })
  }

  //funcion para controlar los el valor de los input
  const handleInputInsert = (e) => {
    const { name, value } = e.target
    setValues({
      // reinicia los valores y creo una copia
      ...values,
      [name]: value,
    })
  }

  //funcion para update un Users
  const handleFormUpdate = async (e) => {
    e.preventDefault();
    const dataNueva = { RowData, image: productImg }
    await axios.put(`http://localhost:3009/user/${id}`, dataNueva)
      .then((e) => {
        console.log(e)
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
        getUsers()
        handleClose()
      }).catch((err) => {
        console.log(err)
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

  //funcion para crear un users
  const handleForm = async (e) => {
    e.preventDefault()
    console.log(values);
    await axios.post('http://localhost:3009/user/CreateUsers', values)
      .then(res => {
        console.log("res")
        toast.success(res.data.responde + '👌', {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate('/AdminUser')
        getUsers()
        handleClose()
        setValues({
          cedula: '',
          name: '',
          mail: '',
          contraseña: '',
        })

      }).catch(err => {
        console.log("err");
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
  //funcion para mostrar las modal
  const ShowModelInser = () => setModalShow(true);
  const ShowModelInser1 = () => {
    setShow(true)
  };

  //funcion para mostrar las modal
  const handleClose = () => {
    setShow(false)
    setModalShow(false)
    setProductImg("");
  };

  if (isLoding) {
    return <div><Spiner /></div>
  }

  return (
    <>
      <Header logOut={logOut} Avatar={avatar} />
      <div className="container">
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded ">
          <div className="row ">
            <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"><h2><b>Trains Details</b></h2></div>
            <div className="col-sm-3 offset-sm-1 mt-5 ">
              <Button className="btn-primary" onClick={ShowModelInser}>
                Add New Student
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="table-responsive vw-25">
              <table className="table table-striped table-hover table-bordered ">
                <thead className="table-dark ml-4">
                  <tr>
                    <th># cedula</th>
                    <th>Name </th>
                    <th>Mail</th>
                    <th>Id_rol</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.cedula}>
                      <td> {user.cedula} </td>
                      <td ><img src={user.url_image} style={{ height: '70px', width: '70px', marginRight: '10px' }} />{user.name}</td>
                      <td> {user.mail} </td>
                      <td> {user.id_rol1} </td>
                      <td>
                        {/* <Button className='btn-primary mx-1' onClick={() => ShowUser(user.cedula)}>Actualizar</Button> */}
                        <Button className='btn-primary mx-1' onClick={() => { ShowModelInser1(SetRowData(user), setId(user.cedula)) }}>Actualizar</Button>
                        <Button className='btn-danger' onClick={() => deleteUsers(user.cedula)}>Eliminar</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <CreateUserFormAd modalShow={modalShow}
            handleClose={handleClose}
            handleForm={handleForm}
            handleInputInsert={handleInputInsert}
            values={values}
          />
          <EditUserFormAd show={show}
            handleClose={handleClose}
            handleFormUpdate={handleFormUpdate}
            handleProductImageUpload={handleProductImageUpload}
            handleInputEdit={handleInputEdit}
            RowData={RowData}
            productImg={productImg}
          />
        </div>
      </div>
    </>
  )
}
