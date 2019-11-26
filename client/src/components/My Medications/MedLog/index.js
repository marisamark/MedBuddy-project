import React from "react";

function MedLog(props) {
    return (
        <>
        <div className="card">
            <div className="card-body">
                {props.time}
                {props.date}
                {props.status}
            </div>
        </div>
        </>
    )
}

export default MedLog;