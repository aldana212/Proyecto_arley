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

export function Adm_Users() {
  //se utilizo para la navegacion
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies([])

  useEffect(() => {
    veryToken()
    setisLoding(true);
    getUsers()
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
      if (!data.status) {
        removeCookie('jwt')
        navigate("/")
      } else {
        console.log(data);
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

    await axios.put(`http://localhost:3009/user/${id}`, RowData)
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
    await axios.post('http://localhost:3009/user/CreateUsers', values)
      .then(res => {
        console.log(res)
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

  //funcion para mostrar las modal
  const ShowModelInser = () => setModalShow(true);
  const ShowModelInser1 = () => {
    setShow(true)
  };

  //funcion para mostrar las modal
  const handleClose = () => {
    setShow(false)
    setModalShow(false)
  };

  if (isLoding) {
    return <div><Spiner /></div>
  }

  return (
    <>
      <Header logOut={logOut} />
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
                      <td> {user.name} </td>
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

          <div className="model_box">
            <Modal
              show={modalShow}
              className="mt-5"
            >
              <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title>Add Record</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={handleForm}>

                  <div className="form-group">
                    <input type="text" name='cedula' onChange={handleInputInsert} value={values.cedula} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Cedula" />
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" name='name' onChange={handleInputInsert} value={values.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                  </div>
                  <div className="form-group mt-3">
                    <input type="email" name='mail' onChange={handleInputInsert} value={values.mail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
                  </div>
                  <div className="form-group mt-3">
                    <input type="password" name='contraseña' onChange={handleInputInsert} value={values.contraseña} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter City" />
                  </div>
                  {/* <div className="form-group mt-3">
                          <input type="text" name="id_rol1" onChange={handleInput} value={values.id_rol1} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter City"/>
                          <select class="form-select" aria-label="Default select example">
                                <option selected value="1" name="id_rol1">administrador</option>
                                <option value="2" name="id_rol1">usuario</option>
                                <option value="3" name="id_rol1">empleado</option>
                          </select>
                          </div> */}
                  <button type="submit" className="btn btn-primary mt-4">Añadir</button>
                </form>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>

              </Modal.Footer>
            </Modal>
          </div>

          <div classNameName="model_box">
            <Modal
              show={show}
            >
              <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title>Edit</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={handleFormUpdate}>
                  <div className="form-group">
                    <input type="hidden" name='cedula' value={RowData.cedula} onChange={handleInputEdit} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Cedula" />
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" name='name' value={RowData.name} onChange={handleInputEdit} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                  </div>
                  <div className="form-group mt-3">
                    <input type="mail" name='mail' value={RowData.mail} onChange={handleInputEdit} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
                  </div>
                  {/* <div className="form-group mt-3">
                                  <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                  </select>
                                  </div> */}
                  <button type="submit" className="btn btn-primary mt-4">Add Record</button>
                </form>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>

              </Modal.Footer>
            </Modal>

          </div>
        </div>
      </div>

    </>
  )
}
