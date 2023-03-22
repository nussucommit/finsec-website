import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

interface Props {
  titleInput: [string, React.Dispatch<React.SetStateAction<string>>][];
  button: string;
}


function FormModal({titleInput, button} : Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Form Modal
      </Button>
  
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            {titleInput.map((titleInput)=> {
                return(
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>{titleInput[0]}</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Insert Text Here"
                      autoFocus
                      onChange={e => titleInput[1](e.target.value)}
                    />
                  </Form.Group>
                )
              })
            }
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              {button}
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  );
}
    
  export default FormModal;