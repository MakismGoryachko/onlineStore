import React from "react";
import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { createBrand } from "../../http/deviceApi";

const CreateBrand = ({ show, onHide }) => {

  const [value, setValue] = useState('')

  const addBrand = () => {
    console.log(value)
    createBrand({ name: value }).then(data => {
      setValue('')
      onHide()
    })
  }


  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={"Введите название бренда"}
          />
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={addBrand}>Добавить</Button>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  )


}

export default CreateBrand;