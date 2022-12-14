import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import { HeaderAdmin } from '../components/headerAdmin'
import { useState, useEffect } from "react";
import axios from 'axios';
import swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Spiner } from "../components/Spiner";
import { useCookies } from 'react-cookie';
import { CreateTrainsFormAd, EditTrainsFormAd } from "../components/TrainsFormAd";
import { FooterUser } from '../components/FooterUser';


export function Adm_tren() {

    const [values, setValues] = useState({
        aforo: '',
        origen: '',
        destino: '',
        precio: '',
        estado: '',
        numero_tren: '',
        hora: '',

    });

    const [avatar, setAvatar] = useState([])

    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies([])


    //utilizo para guardar y cambiar los datos de editar
    const [RowData, SetRowData] = useState({
        aforo: '',
        origen: '',
        destino: '',
        estado: '',
        numero_tren: '',
        hora_salidad: '',
    })

    const [id, setId] = useState("");

    const [isLoding, setisLoding] = useState(true);

    const [trains, setTrains] = useState([])

    useEffect(() => {
        veryToken()
        setisLoding(true)
        getTrains()

    }, [])


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


    const getTrains = async () => {
        const { data } = await axios.get("http://localhost:3009/Trains/GetTrains")
        setTrains(data.result)
        setisLoding(false)
    }

    const handleInput = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        setValues({
            // reinicia los valores y creo una copia
            ...values,
            [name]: value,
        });
    }

    const handleInputEdit = (event) => {
        const { name, value } = event.target;
        SetRowData({
            // reinicia los valores y creo una copia
            ...RowData,
            [name]: value,
        });
    }

    const handleForm = async (e) => {
        e.preventDefault()
        const dataNueva = { values , image: productImg }
        console.log(dataNueva);
        await axios.post("http://localhost:3009/Trains/PostTrains", dataNueva)
            .then(({ data }) => {
                console.log("hola");
                toast.success(data.result, {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                getTrains()
                handleClose()
                setValues({
                    aforo: '',
                    origen: '',
                    destino: '',
                    estado: '',
                    numero_tren: '',
                    hora: '',
                })
            }).catch(err => {
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

    const deleteUsers = async (id) => {
        console.log(id);
        swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`http://localhost:3009/Trains/${id}`)
                    .then(e => {
                        swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        getTrains()
                    })
            }
        })
    }

    const handleFormUpdate = async (e) => {
        e.preventDefault()
        const dataNueva = { RowData, image: productImg }
        axios.put(`http://localhost:3009/Trains/${id}`, dataNueva)
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
                getTrains()
                handleClose()
            }).catch((err) => {
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
                console.log(err.response.data.error);
            })
    }
    //estados para mostrar las modal de registro y activo
    const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState(false);

    const ShowModelInser = () => setModalShow(true);

    const ShowModelInser1 = () => setShow(true);

    const handleClose = () => {
        setShow(false)
        setModalShow(false)
    };

    if (isLoding) {
        return <div><Spiner /></div>
    }

    return (
        <>
            <HeaderAdmin logOut={logOut} Avatar={avatar} />
            <div className="container">
                <div className="crud shadow-lg p-3  bg-body rounded mt-5">
                    <div className="row ">
                        <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"><h2><b>Trains Details</b></h2></div>
                        <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
                            <Button variant="primary" onClick={ShowModelInser}>
                                Add New Student
                            </Button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="table-responsive " >
                            <table className="table table-striped table-hover table-bordered ">
                                <thead>
                                    <tr>
                                        <th>codigo_servicio</th>
                                        <th>Imagen</th>
                                        <th>hora_salidad </th>
                                        <th>aforo</th>
                                        <th>destino</th>
                                        <th>origen</th>
                                        <th>precio</th>
                                        <th>Estado</th>
                                        <th>numero_tren</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {trains.map((trenes) => (
                                        <tr key={trenes.codigo_servicio}>
                                            <td> {trenes.codigo_servicio} </td>
                                            <td><img src={trenes.url_image} style={{ height: '70px', width: '70px', marginLeft: '20px' }} /></td>
                                            <td>{trenes.hora_salidad}</td>
                                            <td>{trenes.aforo}</td>
                                            <td>{trenes.destino}</td>
                                            <td>{trenes.origen}</td>
                                            <td>{trenes.precio}</td>
                                            <td>{trenes.estado}</td>
                                            <td>{trenes.numero_tren}</td>
                                            <td>
                                                <Button variant="danger" onClick={() => { ShowModelInser1(SetRowData(trenes), setId(trenes.codigo_servicio)) }}>
                                                    Actualizar
                                                </Button>
                                                {/* <Button variant="danger" onClick={() => { deleteUsers(trenes.codigo_servicio) }}>
                                                    eliminar
                                                </Button> */}
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <CreateTrainsFormAd modalShow={modalShow}
                        handleClose={handleClose}
                        handleForm={handleForm}
                        handleProductImageUpload={handleProductImageUpload}
                        handleInput={handleInput}
                        productImg={productImg}
                        values={values}
                        RowData={RowData}
                    />
                    <EditTrainsFormAd show={show}
                        handleClose={handleClose}
                        handleFormUpdate={handleFormUpdate}
                        handleInputEdit={handleInputEdit}
                        RowData={RowData}
                        handleProductImageUpload={handleProductImageUpload}
                        productImg={productImg}
                    />
                </div>
            </div>
            <FooterUser/>
        </>
    )
}
