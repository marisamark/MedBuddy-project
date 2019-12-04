import React from "react";


function MedLog(props) {
    return (
        <>
        <div className="card">
            <div className="card-body">
                <p>Date: {props.date}</p>
                <p>Time: {props.time}</p>
                {props.status !== 0 ? 
                <p>Status: Not Taken</p> :
                <p>Status: Taken</p>
                }
            </div>
        </div>
        </>
    )
}

export default MedLog;