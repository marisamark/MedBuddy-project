import React from "react";
import Reschedule from "../Reschedule modal/index";


function MedsCard(){
    return(
        
       
          <div className="card">
          <div className="card-body">
              <h5 className="card-title">Name of Drug</h5>
              <ul className="card-text">
                  <li>Drug Concentration:</li>
                  <li>Time:</li>
                  <li>Dosage:</li>
              </ul>
              <div className="row">
                
              <a href="#" class="btn btn-primary mr-4 ml-4">Complete</a>
             
              <Reschedule />
             
              </div>
          </div>
          </div>
   
          
    

    )
}

export default MedsCard;