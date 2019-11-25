import React from "react";
import Reschedule from "../Reschedule modal/index";


function MedsCard(){
    return(
        
           <div className="row">
      <div className="col-sm-6">
          <div className="card">
          <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
              <div className="row">
                <div className="col-6">
              <a href="#" class="btn btn-primary">Complete</a>
              </div>
              <div className="col-6">
              <Reschedule />
              </div>
              </div>
          </div>
          </div>
      </div>
      </div>
          
    

    )
}

export default MedsCard;