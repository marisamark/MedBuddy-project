import React from "react";
import Reschedule from "../Reschedule modal/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from "react-bootstrap";

function MedsCard(){
    return(
        
       
        <Card style={{ width: '18rem' ,'margin-left': '140px' }}>
        <Card.Body>
          <Card.Title>Time</Card.Title>
          <Card.Text>
            <ul>
                <li>Name of Drug : </li>
                <li>rug Concentration : </li>
                <li>Dosage : </li>
            </ul>
          </Card.Text>
          <div className="row">
          <Button variant="primary" >Complete</Button>
          <Reschedule />
          </div>
        </Card.Body>
      </Card>
          
    

    )
}

export default MedsCard;