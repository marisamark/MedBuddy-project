//container
//cards of meds taken


import React from "react";
import MedsTakenCard from "../MedsTakenCard/index"

function Medstaken(props){
    return(
<>
         <div className="container">

                <MedsTakenCard {...props} />
        </div>   
</>

    )
}

export default Medstaken;