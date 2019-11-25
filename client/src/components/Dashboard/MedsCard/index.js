import React from "react";
import Reschedule from "../Reschedule modal/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from "react-bootstrap";

function MedsCard(){
    return(
        
       
        <Card style={{ width: '18rem' ,'marginLeft': '140px' }}>
        <Card.Body>
          <Card.Title>Time</Card.Title>
         
            <ul>
                <li>Name of Drug : </li>
                <li>rug Concentration : </li>
                <li>Dosage : </li>
            </ul>
        
          <div className="row">
          <Button variant="primary" >Complete</Button>
          <Reschedule />
          </div>
        </Card.Body>
      </Card>
          
    

    )
}

export default MedsCard;