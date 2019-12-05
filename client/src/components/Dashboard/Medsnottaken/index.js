import React from "react";
import MedsCard from "../MedsCard/index";

function Medsnottaken(props){

    return(  
        <>
            <div className="container">
            {props.MedLogs.map(log =>
            log.status === props.status ?

                <MedsCard
                    {...props}
                    logId={log.id}
                    date={log.date}
                    time={log.time}
                    status={log.status}
                />
               : <></> )}
            </div>       
        </>
            
    )
}

export default Medsnottaken;