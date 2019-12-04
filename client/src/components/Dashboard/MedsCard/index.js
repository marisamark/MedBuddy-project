import React from "react";
import Reschedule from "../Reschedule modal/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from "react-bootstrap";

function MedsCard(){

  
    return(
        
       
      //   <Card class="card card-block d-flex">
      //   <Card.Body>
      //     <Card.Title>Time</Card.Title>
         
      //       <ul>
      //           <li>Name of Drug : </li>
      //           <li>rug Concentration : </li>
      //           <li>Dosage : </li>
      //       </ul>
        
      //     <div className="row">
      //     <Button variant="primary" >Complete</Button>
      //     <Reschedule />
      //     </div>
      //   </Card.Body>
      // </Card>
     
          <div className="card mt-4 text-color">
          <div id="medsihavetotakecard" className="card-body">
            <h3 id="time" className="card-title text-center">Time</h3>
                <h5 id="drugname" className="text-center">Name of Drug: </h5>
                <h5 id="drugcon" className="text-center">Drug Concentration: </h5> 
                <h5 id="dosage" className="text-center">Dosage: </h5>
            <div className="row justify-content-center">
          <Button className="mr-2 ml-2 complete1" id="button-blue" >Complete</Button>
          <Reschedule />
          </div>
          </div>
        </div>

    )
}

export default MedsCard;