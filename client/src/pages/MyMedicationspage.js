import React from "react";
import NavAfterLogin from "../components/Nav (afterlogin)/index";
import Meddata from "../components/My Medications/Med data/index";
import { useStoreContext } from "../utils/GlobalState";
// import API from "../utils/API";
// import { FIND_ALL_ROUTINES } from "../utils/actions";


function MyMedications() {

    const [state, dispatch] = useStoreContext();

    // useEffect(() => {
        
    //     API.getAllRoutines(state.user.id)
    //         .then(results => {
    //             let medroutines = results.data;
    //             console.log('All Routine Results', medroutines);
    //             dispatch({
    //                 type: FIND_ALL_ROUTINES,
    //                 medroutines
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
                {/* {!state.medroutine[0].id ?  */}
                {state.medroutine.map(medroutine =>
                    <Meddata
                        key={medroutine.id}
                        medicine={medroutine.medicinename}
                        datecount={medroutine.datecount}
                        dosage={medroutine.dosage}
                        dose={medroutine.dose}
                        MedLogs={medroutine.MedLogs}
                    />
                )}
                 {/* : <h1>No routines yet!</h1>
                } */}
            </div>
        </>
    )
}

export default MyMedications;