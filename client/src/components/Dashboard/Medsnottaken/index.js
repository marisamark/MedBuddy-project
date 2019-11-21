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

function Medsnottaken(){
    return(
        <div class="col">
            <h3 class="text-center">Medications I have to take</h3>
            <div id="medsnottaken"></div>
        </div>

    )
}

export default Medsnottaken;