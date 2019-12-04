import React from "react";
import Reschedule from "../Reschedule modal/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

function MedsCard(props){

  
    return(
        
     
          <div className="card mt-4 text-color">
          <div id="medsihavetotakecard" className="card-body">
            <h3 id="time" className="card-title text-center">Time: {props.time}</h3>
                <h5 id="drugname" className="text-center">{props.name} </h5>
                <h5 id="drugcon" className="text-center">Dose: {props.dose}</h5> 
            <div className="row justify-content-center">
          <Button className="mr-2 ml-2 complete1" id="button-blue" >Complete</Button>
          <Reschedule />
          </div>
          </div>
        </div>

    )
}

export default MedsCard;