import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import { Header } from '../components/header'
import { useState, useEffect } from "react";
import axios from 'axios';
import swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Spiner } from "../components/Spiner";
import { useCookies } from 'react-cookie';


export function Adm_tren() {

    const [values, setValues] = useState({
        aforo: '',
        origen: '',
        destino: '',
        estado: '',
        numero_tren: '',
        hora: '',

    });

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

    const handleForm = async (event) => {
        event.preventDefault();
        console.log(values);
        await axios.post("http://localhost:3009/Trains/PostTrains", values)
            .then(({ data }) => {
                console.log(data);
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
        axios.put(`http://localhost:3009/Trains/${id}`, RowData)
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


    //estados para mostrar las modal de registro y actu

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
            <Header logOut={logOut} />
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
                            <table className="table table-striped table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>codigo_servicio</th>
                                        <th>hora_salidad </th>
                                        <th>aforo</th>
                                        <th>destino</th>
                                        <th>numero_tren</th>
                                        <th>origen</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {trains.map((trenes) => (
                                        <tr key={trenes.codigo_servicio}>
                                            <td> {trenes.codigo_servicio} </td>
                                            <td>{trenes.hora_salidad}</td>
                                            <td>{trenes.aforo}</td>
                                            <td>{trenes.destino}</td>
                                            <td>{trenes.numero_tren}</td>
                                            <td>{trenes.origen}</td>
                                            <td>
                                                <Button variant="danger" onClick={() => { ShowModelInser1(SetRowData(trenes), setId(trenes.codigo_servicio)) }}>
                                                    Actualizar
                                                </Button>
                                                <Button variant="danger" onClick={() => { deleteUsers(trenes.codigo_servicio) }}>
                                                    eliminar
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="model_box mb-5">
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
                                        <input type="text" name='aforo' onChange={handleInput} value={values.aforo} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter aforo" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name='origen' onChange={handleInput} value={values.origen} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter origen" />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" name='destino' onChange={handleInput} value={values.destino} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter destino" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name='estado' onChange={handleInput} value={values.estado} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter estado" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name='numero_tren' onChange={handleInput} value={values.numero_tren} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter numero_tren" />
                                    </div>
                                    <div className="form-group">
                                        <input type="time" name='hora' onChange={handleInput} value={values.hora} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter cupos" />
                                    </div>
                                    <button type="submit" onClick={handleClose} className="btn btn-success mt-4">Añadir</button>
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
                                        <input type="text" name='aforo' onChange={handleInputEdit} value={RowData.aforo} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter aforo" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name='origen' onChange={handleInputEdit} value={RowData.origen} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter origen" />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" name='destino' onChange={handleInputEdit} value={RowData.destino} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter destino" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name='estado' onChange={handleInputEdit} value={RowData.estado} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter estado" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name='numero_tren' onChange={handleInputEdit} value={RowData.numero_tren} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter numero_tren" />
                                    </div>
                                    <div className="form-group">
                                        <input type="time" name='hora_salidad' onChange={handleInputEdit} value={RowData.hora_salidad} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter cupos" />
                                    </div>

                                    <button type="submit" className="btn btn-success mt-4">Add Record</button>
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
