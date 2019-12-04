import React from "react";
import MedsTakenCard from "../MedsTakenCard/index"

function Medstaken(props){
    return(
        <>
         <div className="container">
            {props.MedLogs.map(log =>
            <MedsTakenCard {...props} 
            status={log.status}
            />
            )}
        </div>   
        </>

    )
}

export default Medstaken;