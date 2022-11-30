import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Modal} from 'react-bootstrap';
import {useState} from 'react';
import { Header } from '../components/header'

export function Home_admin() {
  
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);

  console.log("xdx " + edit);
 
  const handleClose = () => setShow(false);
 
  const handleShow = () => {
    console.log(show);
    setShow(true)}; 

  const EditClose = () => setEdit(false);

  const EditShow = () => {
    console.log(edit);
    setEdit(true)
  };
    
  
  return (
    <>
        <Header />
        <div className="container mx-auto">
                <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded "> 
                <div className="row ">
                
                <div className="col-sm-3 mt-5 mb-4 text-gred">
                    {/* buscador */}
                    <div className="search">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search"/>
                        </form>
                    </div>    
                </div>  
                    <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Student Details</b></h2></div>
                        <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
                            <Button variant="primary" onClick={handleShow}>
                                Add New Student
                            </Button>
                        </div>
                </div>  
                  <div className="row">
                      <div className="table-responsive " >
                      <table className="table table-striped table-hover table-bordered">
                          <thead>
                              <tr>
                                  <th>Hora</th>
                                  <th>Fecha </th>
                                  <th>Destino</th>
                                  <th>Origen</th>
                                  <th>N_tren</th>
                                  <th>Cupo</th>
                                  <th>Actions</th>
                              </tr>
                          </thead>
                          <tbody>
                              
                              <tr>
                                  <td>16:00</td>
                                  <td>4/11/2022</td>
                                  <td>Morrio</td>
                                  <td>Chonia</td>
                                  <td>1</td>
                                  <td>6</td>
                                  <td>
                                  <Button className="bg-danger text-white" onClick={EditShow}>Actualizar</Button>
                                  </td>
                              </tr>
                              <tr>
                                  <td>16:00</td>
                                  <td>4/11/2022</td>
                                  <td>Morrio</td>
                                  <td>Chonia</td>
                                  <td>1</td>
                                  <td>6</td>
                                  <td>
                                  <Button className="bg-danger text-white">Actualizar</Button>
                                  </td>
                              </tr>
                              
                              <tr>
                                  <td>16:00</td>
                                  <td>4/11/2022</td>
                                  <td>Morrio</td>
                                  <td>Chonia</td>
                                  <td>1</td>
                                  <td>6</td>
                                  <td>
                                  <Button className="bg-danger text-white">Actualizar</Button>
                                  </td>
                              </tr>

                              <tr>
                                  <td>16:00</td>
                                  <td>4/11/2022</td>
                                  <td>Morrio</td>
                                  <td>Chonia</td>
                                  <td>1</td>
                                  <td>6</td>
                                  <td>
                                  <Button className="bg-danger text-white">Actualizar</Button>
                                  </td>
                              </tr>

                              <tr>
                                  <td>16:00</td>
                                  <td>4/11/2022</td>
                                  <td>Morrio</td>
                                  <td>Chonia</td>
                                  <td>1</td>
                                  <td>6</td>
                                  <td>
                                  <Button className="bg-danger text-white">Actualizar</Button>
                                  </td>
                              </tr>


                              <tr>
                                  <td>16:00</td>
                                  <td>4/11/2022</td>
                                  <td>Morrio</td>
                                  <td>Chonia</td>
                                  <td>1</td>
                                  <td>6</td>
                                  <td>
                                  <Button className="bg-danger text-white">Actualizar</Button>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>   
              </div>  

              {/* <!--- Model Box ---> */}
            <div className="model_box">
            <Modal 
            show={show}
            >
              <Modal.Header closeButton>
                <Modal.Title>Add Record</Modal.Title>
              </Modal.Header>
                  <Modal.Body>
                  <form>
                      <div className="form-group">
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
                      </div>
                      <div className="form-group mt-3">
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Country"/>
                      </div>
                      <div className="form-group mt-3">
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter City"/>
                      </div>
                      <div className="form-group mt-3">
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Country"/>
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

            <div classNameName="model_box">
            <Modal
              edit={edit}
            >
              <Modal.Header closeButton>
                <Modal.Title>Edit</Modal.Title>
              </Modal.Header>
                  <Modal.Body>
                  <form>
                      <div className="form-group">
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
                      </div>
                      <div className="form-group mt-3">
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Country"/>
                      </div>
                      <div className="form-group mt-3">
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter City"/>
                      </div>
                      <div className="form-group mt-3">
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Country"/>
                      </div>
                      
                        <button type="submit" className="btn btn-success mt-4">Add Record</button>
                      </form>
                  </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={EditClose}>
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
