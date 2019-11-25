//container
//cards of meds taken


import React from "react";
import MedsTakenCard from "../MedsTakenCard/index"

function Medstaken(){
    return(
        <div className="col-6">
            <h3 className="text-center">Medications I've taken</h3>
            <div id="medstaken">
                <MedsTakenCard />
            </div>
        </div>

    )
}

export default Medstaken;