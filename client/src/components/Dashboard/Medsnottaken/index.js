import React from "react";
import MedsCard from "../MedsCard/index";

function Medsnottaken(props){

    return(  
        <>
            <div className="container">
            {props.MedLogs.map(log =>
                <MedsCard
                    {...props}
                    time={log.time}
                    status={log.status}
                />
                )}
            </div>       
            
        </>
    )
}

export default Medsnottaken;