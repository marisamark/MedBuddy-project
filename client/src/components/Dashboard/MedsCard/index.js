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
      <div class="container">
      <h2 className="text-center mt-3 mb-3">Medications I have to take</h2>
          <div className="card mt-4">
          <div className="card-body">
            <h3 className="card-title text-center">Time</h3>
                <h5 class="text-center">Name of Drug: </h5>
                <h5 class="text-center">Drug Concentration: </h5> 
                <h5 class="text-center">Dosage: </h5>
            <div className="row justify-content-center">
          <Button variant="primary">Complete</Button>
          <Reschedule />
          </div>
          </div>
        </div>
</div>
    )
}

export default MedsCard;