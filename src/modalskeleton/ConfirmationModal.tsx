import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

interface Props {
  title: string;
  body: string;
  button: string;
  reminder: string;
  hasText: boolean;
  setText: React.Dispatch<React.SetStateAction<string>>
}

function ConfirmationModal({title, body, button, reminder, hasText, setText} : Props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Confirmation Modal
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {body}
            <br/>
            <b style = {{color: 'red'}}>
            {reminder}
            </b>
            {hasText ? 
              <Form.Control 
                as="textarea" 
                rows={3}
                placeholder="Enter Text Here"
                onChange={e => setText(e.target.value)}
              /> 
              : 
              <></>
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary">{button}</Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
  
export default ConfirmationModal;