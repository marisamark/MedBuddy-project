
import React
// , { useEffect } 
from "react";
// import { useStoreContext } from "../utils/GlobalState";
import NavAfterLogin from "../components/Nav (afterlogin)/index";
import MedicationForm from "../components/Add Medications/Add Meds Form/index"

function AddMedications() {
    return (
        <>
            <NavAfterLogin />             
            <div className="container text-primary">
                <div className="mx-auto col-lg-6">
                    <h2 className="mt-4 text-center mb-2">Add a medication</h2>
                    <MedicationForm />


                </div>
                
            </div>
        
        </>
    )
}

export default AddMedications;