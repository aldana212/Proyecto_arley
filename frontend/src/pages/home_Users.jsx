import React from 'react'
import { Header } from '../components/header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import img from '../img/estacion.jpg';


export function Home_Users() {
    return (
        <div>
            <Header />
            <div className="container shadow-lg p-3 bg-body rounded d-flex justify-content-center align-items-center mt-5">
                <div class='row m-4  '>
                    <div className='col-sm-12 col-md-4 col-lg-4 py-3 ml-5'>
                        <Card style={{ width: '18rem' }} className='card shadow-lg '>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                {/* <Card.Title>Card Title</Card.Title> */}
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Origen: Chonia</ListGroup.Item>
                                    <ListGroup.Item>Destino: Morro</ListGroup.Item>
                                    <ListGroup.Item>Fecha: 22/11/2020</ListGroup.Item>
                                    <ListGroup.Item>Hora: 17:06</ListGroup.Item>
                                    <ListGroup.Item>Precio: $15.0000</ListGroup.Item>
                                </ListGroup>
                                <Button className='btn-primary mt-3'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-4 py-3'>
                        <Card style={{ width: '18rem' }} className='card shadow-lg'>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                {/* <Card.Title>Card Title</Card.Title> */}
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Origen: Chonia</ListGroup.Item>
                                    <ListGroup.Item>Destino: Morro</ListGroup.Item>
                                    <ListGroup.Item>Fecha: 22/11/2020</ListGroup.Item>
                                    <ListGroup.Item>Hora: 17:06</ListGroup.Item>
                                    <ListGroup.Item>Precio: $15.0000</ListGroup.Item>
                                </ListGroup>
                                <Button className='btn-primary mt-3'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-sm-12 col-md-4 col-lg-4 py-3'>
                        <Card style={{ width: '18rem' }} className='card shadow-lg'>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                {/* <Card.Title>Card Title</Card.Title> */}
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Origen: Chonia</ListGroup.Item>
                                    <ListGroup.Item>Destino: Morro</ListGroup.Item>
                                    <ListGroup.Item>Fecha: 22/11/2020</ListGroup.Item>
                                    <ListGroup.Item>Hora: 17:06</ListGroup.Item>
                                    <ListGroup.Item>Precio: $15.0000</ListGroup.Item>
                                </ListGroup>
                                <Button className='btn-primary mt-3'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>

        </div>
    )
}
