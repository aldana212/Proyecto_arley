import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import Style from '../cssComponents/register.module.css'
import noprofil from "../img/noprofil.jpg";

export function CreateTrainsFormAd({ modalShow, handleClose, handleInput, handleForm, values,handleProductImageUpload,productImg,RowData }) {
  return (
    <>
      <div className="model_box mb-5">
        <Modal
          show={modalShow}
          className="mt-5"
        >
          <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title>Add Record</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div class={Style.upload}>
                {productImg ? <>
                  <img src={productImg} alt="image!" />            
                </> :
                  <img src={noprofil} alt="image!" />
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
            <form onSubmit={handleForm}>
            <div className="form-group mt-5">
                <input type="time" name='hora' onChange={handleInput} value={values.hora} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter cupos" />
              </div>
              <div className="form-group mt-2">
                <input type="text" name='aforo' onChange={handleInput} value={values.aforo} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter aforo" />
              </div>
              <div className="form-group mt-2">
                <input type="text" name='destino' onChange={handleInput} value={values.destino} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter destino" />
              </div>
              <div className="form-group mt-2">
                <input type="text" name='origen' onChange={handleInput} value={values.origen} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter origen" />
              </div>
              <div className="form-group mt-2">
                <input type="text" name='precio' onChange={handleInput} value={values.precio} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter estado" />
              </div>
              <div className="form-group mt-2">
                <input type="text" name='estado' onChange={handleInput} value={values.estado} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter estado" />
              </div>
              <div className="form-group mt-2">
                <input type="text" name='numero_tren' onChange={handleInput} value={values.numero_tren} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter numero_tren" />
              </div>
              <button type="submit" className="btn btn-success mt-4">Añadir</button>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}


export function EditTrainsFormAd({show, handleClose, handleFormUpdate, handleInputEdit,handleProductImageUpload,productImg, RowData}) {
  return (
    <div>
      <div classNameName="model_box">
        <Modal
          show={show}
        >
          <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
            <form onSubmit={handleFormUpdate}>
            <div className="form-group mt-5">
            <input type="text" name='cedula' value={RowData.codigo_servicio} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Cedula" disabled/>
              </div>
              <div className="form-group mt-2" >
                <input type="text" name='aforo' onChange={handleInputEdit} value={RowData.aforo} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter aforo" />
              </div>
              <div className="form-group mt-2" >
                <input type="text" name='origen' onChange={handleInputEdit} value={RowData.origen} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter origen" />
              </div>
              <div className="form-group mt-2" >
                <input type="text" name='destino' onChange={handleInputEdit} value={RowData.destino} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter destino" />
              </div>
              <div className="form-group mt-2" >
                <input type="text" name='estado' onChange={handleInputEdit} value={RowData.estado} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter estado" />
              </div>
              <div className="form-group mt-2" >
                <input type="text" name='precio' onChange={handleInputEdit} value={RowData.precio} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter estado" />
              </div>
              <div className="form-group mt-2" >
                <input type="text" name='numero_tren' onChange={handleInputEdit} value={RowData.numero_tren} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter numero_tren" />
              </div>
              <div className="form-group mt-2" >
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
  )
}
