
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
            <div class="container text-primary">
                <div class="mx-auto col-4">
                    <h2 class="mt-4">Add a medication</h2>
                    <MedicationForm />

                </div>

            </div>

        </>
    )
}

export default AddMedications;