import React from 'react'
import { Header } from '../components/header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import img from '../img/estacion.jpg';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Modal } from 'react-bootstrap';

export function Home_Users() {

    const [cards, setCards] = useState([])

    useEffect(() => {
        getCards()
    }, [])

    const getCards = async () => {
        const { data } = await axios.get("http://localhost:3009/Trains/GetTrains")
        setCards(data.result)
    }

    // const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState(false);

    // const ShowModelInser = () => setModalShow(true);

    const ShowModelInser1 = () => setShow(true);

    const handleClose = () => {
        setShow(false)
        // setModalShow(false)
    };

    return (
        <div>
            <Header />
            <div className="container shadow-lg p-3 bg-body rounded d-flex justify-content-center align-items-center mt-5">
                <div class='row m-4  '>
                    {cards.map((card) => (
                        <div className='col-sm-12 col-md-4 col-lg-4 py-3 ml-5'>
                            <Card style={{ width: '18rem' }} className='card shadow-lg '>
                                <div>
                                    <Card.Img variant="top" src={img}></Card.Img>
                                    <Card.Body>
                                        {/* <Card.Title>Card Title</Card.Title> */}
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item>Origen:  {card.origen}</ListGroup.Item>
                                            <ListGroup.Item>Destino:  {card.destino}</ListGroup.Item>
                                            <ListGroup.Item>Fecha:  22/11/2020</ListGroup.Item>
                                            <ListGroup.Item>Hora:  17:06</ListGroup.Item>
                                            <ListGroup.Item>Precio:  $15.0000</ListGroup.Item>
                                        </ListGroup>
                                        <Button className='btn-primary mt-3' onClick={ShowModelInser1}>Go somewhere</Button>
                                    </Card.Body>
                                </div>
                            </Card>
                        </div>
                    ))}

                </div>
                <div classNameName="model_box">
                        <Modal
                            show={show}
                        >
                            <Modal.Header closeButton onClick={handleClose}>
                                <Modal.Title>Reservar</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form >
                                    <div className="form-group">
                                        <input type="text" name='aforo'  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter aforo" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name='origen'  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter origen" />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" name='destino' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter destino" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name='estado'  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter estado" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name='numero_tren'  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter numero_tren" />
                                    </div>
                                    {/* <div className="form-group">
                                        <input type="text" name='cupos' onChange={handleInput} value={RowData.cupos} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter cupos" />
                                    </div> */}

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
    )
}
