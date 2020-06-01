import React from 'react';
import { Modal} from "react-bootstrap";

const ModalView = ({Show,SetShow}) => {
    return (
        <>
        <Modal
          size="lg"
          show={Show}
          onHide={() => SetShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          className="Modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
      </>
    );
};

export default ModalView;