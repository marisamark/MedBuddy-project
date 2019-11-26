import React from "react";

function Meddata(props) {
    return (
        <>
        <div className="card">
            <div className="card-header">
               <h3>Medicine Name</h3>
            </div>
            <div className="card-body">
                {props.dose}
                {props.dosage}
                {props.datecount}
            </div>
        </div>
        </>
    )
}

export default Meddata;