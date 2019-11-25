import React from "react";

function InfoCards() {
    return (
<>
            <div className="card w-50 float-left mt-4">
                <div className="card-body">
                    <h5 className="card-title">Track your medications</h5>
                    <p className="card-text">MedBuddy provides you with a user-friendly weekly calendar system that allows you to input when you need to take your medications.</p>
                </div>
            </div>
            <div className="card w-50 float-right mt-4">
                <div className="card-body">
                    <h5 className="card-title">View your medical history</h5>
                    <p className="card-text">MedBuddy keeps track of all the medications you have taken in a data table you can reference at any time.</p>
                </div>
            </div>
</>
    )
}

export default InfoCards;