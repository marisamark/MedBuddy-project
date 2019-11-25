import React, { useEffect } from "react";
import NavAfterLogin from "../components/Nav (afterlogin)/index";
import Meddata from "../components/My Medications/Med data/index";
import { FIND_ALL_ROUTINES } from "../utils/actions";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";


function MyMedications() {

    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        API.getAllRoutines()
            .then(results => {
                let routines = results.data;
                console.log('All Routine Results', routines);
                dispatch({
                    type: FIND_ALL_ROUTINES,
                    routines
                });
            }).catch(error => console.log(error));
    }, []);

    console.log('STATE', state);
    
    return (
        <>
            <NavAfterLogin></NavAfterLogin>
                <div className="container text-center" id="meddata">
                <h2 className="mt-4">My Medications</h2>
                {state.medroutine.map(medroutine =>
                <Meddata
                key={medroutine.id}
                datecount={medroutine.datecount}
                dosage={medroutine.dosage}
                dose={medroutine.dose}
                />
                )}
            </div>
        </>
    )
}

export default MyMedications;