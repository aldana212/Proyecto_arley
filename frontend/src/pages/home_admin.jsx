import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Modal} from 'react-bootstrap';
import { Header } from '../components/header'
import {useState} from 'react';

export function Home_admin() {

    const [values , setValues] = useState({
        hora: '',
        fecha: '',
        origin: '',
        n_tren: '',
        cupo: '',
    });

    const handleInput = (event) =>{
       const { name, value } = event.target;
       console.log(name, value);
       setValues({
        // reinicia los valores y creo una copia
        ...values,
        [name]: value,
       });
    }

    const handleForm = (event) =>{
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
        <div className="container d-flex align-items-center justify-content-center vh-100">
                <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded vh-50 vw-100"> 
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
                                  <Button variant="danger" onClick={ShowModelInser1}>
                                        Actualizar
                                  </Button>
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
                                  <Button variant="danger" onClick={ShowModelInser1}>
                                        Actualizar
                                  </Button>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>   
              </div>  
        
            <div className="model_box">
            <Modal 
            show={modalShow}
            >
              <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title>Add Record</Modal.Title>
              </Modal.Header>
                  <Modal.Body>
                  <form onSubmit={handleForm}>
                      <div className="form-group">
                          <input type="text" name='hora' onChange={handleInput} value={values.hora} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
                      </div>
                      <div className="form-group mt-3">
                          <input type="date" name='fecha' onChange={handleInput} value={values.fecha} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Country"/>
                      </div>
                      <div className="form-group mt-3">
                          <input type="text" name='origin' onChange={handleInput} value={values.origin} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter City"/>
                      </div>
                      <div className="form-group mt-3">
                          <input type="text" name='n_tren' onChange={handleInput} value={values.n_tren} className="form-control" id="exampleInputPassword1" placeholder="Enter Country"/>
                      </div>
                      <div className="form-group mt-3">
                          <input type="text" name='cupo' onChange={handleInput} value={values.cupo} className="form-control" id="exampleInputPassword1" placeholder="Enter Country"/>
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
            </div>    
        </div> 
        
    </>
    )
}
