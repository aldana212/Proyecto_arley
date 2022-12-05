import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import { Header } from '../components/header'
import { useState, useEffect } from "react";
import axios from 'axios';
// import swal from 'sweetalert2'
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { Spiner } from "../components/Spiner";

export function Adm_tren() {

    const [values, setValues] = useState({
        aforo: '',
        hora_salidad: '',
        origen: '',
        destino: '',
        estado: '',
        numero_tren: '',
        cupos: '',
        fecha_salidad: '',

    });


    const [trains, setTrains] = useState([])

    useEffect(() => {
        getTrains()
    }, [])


    const getTrains = async () => {
        const { data } = await axios.get("http://localhost:3009/Trains/GetTrains")
        setTrains(data.result)
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

    const handleForm = (event) => {
        event.preventDefault();
        console.log(values);
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

    return (
        <>
            <Header />
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
                                                <Button variant="danger" onClick={ShowModelInser1}>
                                                    Actualizar
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
                                        <input type="text" name='hora_salidad' onChange={handleInput} value={values.hora_salidad} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter	hora_salidad" />
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
                                        <input type="text" name='cupos' onChange={handleInput} value={values.cupos} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter cupos" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name='fecha_salidad' onChange={handleInput} value={values.fecha_salidad} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter fecha_salidad" />
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
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Country" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter City" />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Country" />
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
