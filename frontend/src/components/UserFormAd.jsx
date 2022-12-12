import React from 'react'
import { Button, Modal, Row } from 'react-bootstrap';
import Style from '../cssComponents/register.module.css'

export function CreateUserFormAd({ modalShow, handleClose, handleForm, handleInputInsert, values }) {
    return (
        <div><Modal
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
                    <button type="submit" className="btn btn-primary mt-4">Añadir</button>
                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>

            </Modal.Footer>
        </Modal></div>
    )
}

export function EditUserFormAd({show, handleClose, handleFormUpdate, handleProductImageUpload, handleInputEdit, RowData,productImg}) {
    return (
        <div>
            <div className="model_box">
            <Modal
              show={show}
            >
              <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title>Edit</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={handleFormUpdate}>
                <div class={Style.upload}>
                {productImg ? <>
                  <img src={productImg} alt="image!" />            
                </> :
                  <img src={RowData.url_image} alt="image!" />
                  }
                <div class={Style.round}>
                <input
                  type="file"
                  name='image'
                  id="image"
                  className={Style.form__input}
                  placeholder=" "
                  onChange={handleProductImageUpload}
                />
                  <i class='bx bxs-camera-plus'></i>
                </div>
              </div>
                  <div className="form-group mt-5">
                    <input type="text" name='cedula' value={RowData.cedula} onChange={handleInputEdit} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Cedula" disabled/>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" name='name' value={RowData.name} onChange={handleInputEdit} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                  </div>
                  <div className="form-group mt-3">
                    <input type="mail" name='mail' value={RowData.mail} onChange={handleInputEdit} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
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
    )
}
