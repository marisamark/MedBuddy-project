import React from "react";


function MedLog(props) {
    return (
        <>
        <div className="card">
            <div className="card-body mx-auto">
                <div class="row">
                <span className="font-weight-bold mr-2">Date: </span> {props.date}
                </div>
                <div class="row">
                <span className="font-weight-bold mr-2"> Time: </span>{props.time}
                </div>
                <div class="row">
                <span className="font-weight-bold mr-2"> Status: </span> {props.status}
                </div>
            </div>
        </div>
        </>
    )
}

export default MedLog;