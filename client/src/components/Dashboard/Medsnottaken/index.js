// //container
// //cards of meds not taken
// <div class="container">
//   <div class="row">
//     <div class="col">
//       1 of 2
//     </div>
//     <div class="col">
//       2 of 2
//     </div>
//   </div>

import React from "react";
import Reschedule from "../Reschedule modal/index";

function Medsnottaken(){
    return(
        <div className="col-6">
            <h3 className="text-center">Medications I have to take</h3>
            <div id="medsnottaken"></div>
            <Reschedule />
        </div>

    )
}

export default Medsnottaken;