import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// require("react-bootstrap/ModalHeader")

function RescheduleModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Reschedule Time
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>What time would you like to reschedule?</h4>
          <div className="row">
                <div className="col-md-4">
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                    </div>
                    <div className="col-md-4">
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>00</option>
                        <option>15</option>
                        <option>30</option>
                        <option>45</option>
                    </select>
                    </div>
                    <div className="col-md-4">
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>AM</option>
                        <option>PM</option>
                    </select>
                    </div>
                    <br />
                    </div>
                     
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Reschedule</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function Reschedule() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <ButtonToolbar>
        <Button className="mr-2 ml-2" variant="primary" onClick={() => setModalShow(true)}>
          Reschedule
        </Button>
  
        <RescheduleModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    );
  }
  
  export default Reschedule;
