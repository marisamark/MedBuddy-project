import React from "react";


function MedLog(props) {
    return (
        <>
        <div className="card">
            <div className="card-body">
                Date: {props.date}
                Time: {props.time}
                Status: {props.status}
            </div>
        </div>
        </>
    )
}

export default MedLog;