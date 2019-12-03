//container
//cards of meds taken


import React from "react";
import MedsTakenCard from "../MedsTakenCard/index"

function Medstaken(){
    return(
<>
         <div className="container">
            <h2 id="medsivetaken" className="text-center mt-3 mb-3 text-color">Medications I've taken</h2>
            <div id="medstaken">
                <MedsTakenCard />
            </div>
        </div>   
</>

    )
}

export default Medstaken;