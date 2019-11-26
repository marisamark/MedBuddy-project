import React, {useState} from "react";
import {Toast, Button, } from "react-bootstrap";


function ToastMeds() {
    const [show, setShow] = useState(false);
  
    return (
        <>
        <div
  aria-live="polite"
  aria-atomic="true"
  style={{
    position: 'relative',
    minHeight: '500px',
  }}
>
          <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide style={{
             position: 'relative',
             top: 0,
             right: 0,
           }}>
   
        
            <Toast.Header>
              <strong className="mr-auto">Add Medicatoin</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Added Your Medication to Dashboard</Toast.Body>
          </Toast>
        
          <Button onClick={() => setShow(true)}>Add</Button>
          </div>
          </>
    );
  }
  

  
  export default ToastMeds;