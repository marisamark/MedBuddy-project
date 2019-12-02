import React, {useState} from "react";
import {Toast, Button, Alert } from "react-bootstrap";


function ToastMeds() {
    const [show, setShow] = useState(false);
  
    return (
        <>

          <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide 
            style={{
                position: 'fixed',
                top: 0,
                right: 0,
                variant: "success"
           }}>
   
                <Alert variant="success">
                {/* <Toast.Header>
                
                <strong className="mr-auto">Add Medicatoin</strong>
                
                </Toast.Header> */}
                <Toast.Body>Added Your Medication to Dashboard</Toast.Body>
                </Alert>
          </Toast>
        
          <Button  id="button-blue" onClick={() => setShow(true)}>Add</Button>
          
          </>
    );
  }
  

  
  export default ToastMeds;