import React from "react";
import NavAfterLogin from "../components/Nav (afterlogin)/index";
import MedicationForm from "../components/Add Medications/Add Meds Form/index"

function AddMedications() {
    return (
        <>
            <NavAfterLogin />             
            <div className="container text-color">
                <div className="mx-auto col-lg-6 col-md-6">
                    <h2 className="mt-4 text-center mb-2 font-weight-bold">Add a medication</h2>
                    <MedicationForm />


                </div>
                
            </div>
        
        </>
    )
}

export default AddMedications;