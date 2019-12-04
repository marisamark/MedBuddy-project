import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function MedTakenCard(props) {
  
  return (
    <>
      <div className="card mt-4">
        <div id="medstakencard" className="card-body">
          <h3 id="nameofdrug" className="card-title text-center text-color">Name of Drug: {props.name} </h3>
        </div>
      </div>
    </>
  )
}

export default MedTakenCard;