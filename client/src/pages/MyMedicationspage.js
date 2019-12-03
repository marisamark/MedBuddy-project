import React from "react";
import NavAfterLogin from "../components/Nav (afterlogin)/index";
import Meddata from "../components/My Medications/Med data/index";
import { useStoreContext } from "../utils/GlobalState";


function MyMedications() {

    const [state, dispatch] = useStoreContext();

    // useEffect(() => {
    //     API.getAllRoutines()
    //         .then(results => {
    //             let routines = results.data;
    //             console.log('All Routine Results', routines);
    //             dispatch({
    //                 type: FIND_ALL_ROUTINES,
    //                 ...state,
    //                 routines
    //             });
    //         }).catch(error => console.log(error));
    // }, []);

    console.log('MEDROUTINE STATE', state);


    return (
        <>
            <NavAfterLogin></NavAfterLogin>
            <div className="container text-center text-color" id="meddata">
                <h2 className="mt-4">My Medications</h2>
                <br></br>
                {state.medroutine.length === 0 ? 
                state.medroutine.map(medroutine =>
                    <Meddata
                        key={medroutine.id}
                        medicine={medroutine.medicinename}
                        datecount={medroutine.datecount}
                        dosage={medroutine.dosage}
                        dose={medroutine.dose}
                        MedLogs={medroutine.MedLogs}
                    />
                ) : <h1>No routines yet!</h1>
                }
            </div>
        </>
    )
}

export default MyMedications;