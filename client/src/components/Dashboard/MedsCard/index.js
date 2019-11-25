import React from "react";
import Reschedule from "../Reschedule modal/index";


function MedsCard(){
    return(
        <div class="col-6">
           <div class="row">
      <div class="col-sm-6">
          <div class="card">
          <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text"></p>
              <a href="#" class="btn btn-primary">Complete</a>
          </div>
          </div>
      </div>
      </div>
            <Reschedule />
        </div>

    )
}

export default MedsCard;