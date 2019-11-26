
import React
// , { useEffect } 
from "react";
// import { useStoreContext } from "../utils/GlobalState";
import NavAfterLogin from "../components/Nav (afterlogin)/index";
import MedicationForm from "../components/Add Medications/Add Meds Form/index"
import ToastMeds from "../components/Add Medications/Toast/index"
function AddMedications() {
    return (
        <>
            <NavAfterLogin />             
            <div className="container text-primary">
                <div className="mx-auto col-lg-6">
                    <h2 className="mt-4">Add a medication</h2>
                    <MedicationForm />
                                 
                </div>
                
            </div>
            <ToastMeds />  
        </>
    )
}

export default AddMedications;