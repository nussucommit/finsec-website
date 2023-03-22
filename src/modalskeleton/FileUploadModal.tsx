import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

interface Props {
  title: string
  button: string;
  body: string;
  note: string;
  hasText: boolean;
  textTitle: string;
  textBody: string;
}


function FileUploadModal({title, button, body, note, hasText, textTitle, textBody} : Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        File Upload Modal
      </Button>
  
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            {hasText ?
              <>
                <h4>{textTitle}</h4>
                <p>{textBody}</p>
              </>
              : <></>
            }
            <Form.Group className="mb-3" controlId="formFile">
              <h4>{title}</h4>
              <Form.Label>{body}</Form.Label>
              <Form.Control type="file" />
              <p>{note}</p>
            </Form.Group>
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
    
export default FileUploadModal;