import React from 'react'

import { Button,Modal} from 'react-bootstrap';
import { Header } from '../components/header'
import {useState} from 'react';


export function Adm_Users() {

    const [values, setValues] = useState({
        cedula: '',	
        name: '',	
        mail: '',	
        contraseña: '',	
        id_rol1: '',	
    }); 

    const handleInput = (e) =>{
        const { name, value } = e.target
        setValues({
            // reinicia los valores y creo una copia
            ...values,
            [name]: value,
        })
    }

    const handleForm = (e) =>{
        e.preventDefault()
        console.log(values);
    }

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
                                  <tr>
                                      <td>12312</td>
                                      <td>daniel</td>
                                      <td>danielaldana212@gmail.com</td>
                                      <td>1</td>
                                      <td>
                                      <Button className='btn-primary mx-1' onClick={ShowModelInser1}>Actualizar</Button>
                                      <Button className='btn-danger'>Eliminar</Button>
                                     </td>
                                  </tr>
                                  <tr>
                                      <td>2312312</td>
                                      <td>samuel</td>
                                      <td>samue@gamil.com</td>
                                      <td>1</td>
                                      <td>
                                      <Button className='btn-primary mx-1'> Actualizar</Button>
                                      <Button className='btn-danger'>Eliminar</Button>
                                      </td>
                                  </tr>
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
                              <input type="text" name='cedula' onChange={handleInput} value={values.cedula} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
                          </div>
                          <div className="form-group mt-3">
                              <input type="text" name='name' onChange={handleInput} value={values.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Country"/>
                          </div>
                          <div className="form-group mt-3">
                              <input type="email" name='mail' onChange={handleInput} value={values.mail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter City"/>
                          </div>
                          <div className="form-group mt-3">
                          <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                          </select>
                          </div>
                            <button type="submit" onClick={handleClose} className="btn btn-primary mt-4">Añadir</button>
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
                              <input type="cedula" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
                          </div>
                          <div className="form-group mt-3">
                              <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Country"/>
                          </div>
                          <div className="form-group mt-3">
                              <input type="mail" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter City"/>
                          </div>
                          <div className="form-group mt-3">
                          <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                          </select>
                          </div>
                          
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
