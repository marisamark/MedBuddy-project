import React, { useState, useEffect, useRef } from "react";
import TimeDives from "../StartTimes/index";
// import ToastMeds from "../Toast/index";
import { useStoreContext } from "../../../utils/GlobalState";
import API from "../../../utils/API";
import { POST_ROUTINE, GRAB_USER_ROUTINE, FIND_ALL_ROUTINES, UPDATE_ROUTINE } from "../../../utils/actions";
import { Button } from "react-bootstrap";

function MedicationForm() {
    const [userState, setUserState] = useState({
        selectValue: "1",
    });



    const medicinename = useRef();
    const dose = useRef();
    const date = useRef();
    const datecount = useRef();
    const dosage = useRef();

    const [state, dispatch] = useStoreContext();
    const [timeState, setTimeState] = useState({});


    console.log("initial " + userState.selectValue)
    let handleChange = (e) => {
        setUserState({ selectValue: e.target.value });
    }

    function handleSelect(data) {
        console.log("SELECTING...")
        setTimeState({ ...timeState, [data.key]: data.val })
        // function handleSelectMinute(e) {
        //     console.log("SELECTING...")
        //     console.log(e.target.value + "minutes")
        //     setTimeState({...timeState, [e.target.id]:e.target.value})
        // }
        // function handleSelectAMPM(e) {
        //     console.log("SELECTING...")
        //     console.log(e.target.value)
        // }
        console.log(timeState)
    }

    const handleSubmit = (e, data) => {
        e.preventDefault();
        console.log('DOSAGE', dosage.current.value)
        submitAPI()
    }

    // useEffect(() => {
    //     console.log("use effect")
    //     console.log(state.medroutine)
    //     // API.getAllRoutines()
    //     //     .then(results => {
    //     //         let routines = results.data;
    //     //         console.log('All Routine Results', routines);
    //     //         dispatch({
    //     //             type: FIND_ALL_ROUTINES,
    //     //             ...state,
    //     //             routines
    //     //         });
    //     //     }).catch(error => console.log(error));
    // }, [state.medroutine]);

    const submitAPI = () => {

        API.postMedroutine(state.user.id, {

            dose: dose.current.value,
            date: date.current.value,
            datecount: datecount.current.value,
            dosage: dosage.current.value,
            UserId: state.user.id,
            medicinename: medicinename.current.value
        }).then(result => {
            console.log("POSTMEDROUTINE", result)
            dispatch({
                type: POST_ROUTINE,
                medroutine: result
            });
            // dispatch({ type: UPDATE_ROUTINE, medroutine : result})


            API.getAllRoutines(state.user.id)
                .then(results => {
                    console.log("run me", results.data)
                    let routines = results.data;
                    console.log("hey! this is your updated routines", routines)
                    // dispatch({ type: FIND_ALL_ROUTINES, payload: routines })
                    dispatch({ type: UPDATE_ROUTINE, medroutine: routines })

                    //console.log('CURRENT STATE', state)
                }).then(() => console.log("state after then then", state));
        })
            .catch(err => console.log(err));

        // API.postMedlog({
        //     log: log.current.value
        // }).then(result => {
        //     console.log("POSTLOG", result)
        //     dispatch({
        //         type: POST_LOG,
        //         medroutine: result
        //     });
        // });

    }


    return (
        <form>

            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Medication Name</label>
                <input type="text" className="form-control" required ref={medicinename} placeholder="Add the name of your medication..." />
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Dose</label>
                <input type="text" className="form-control" required ref={dose} placeholder="1 tablet..." />
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">When should you start to take it?</label>
                <input type="text" className="form-control" required ref={date} placeholder="MM/DD/YYY" />
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">How many consecutive days do you need to take it?</label>
                <input type="text" className="form-control" required ref={datecount} placeholder="10" />
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">How often should you take it?</label>
                <select className="form-control" id="exampleFormControlSelect1">
                    <option>everyday</option>
                    <option>every other day</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">How many times a day do you need to take it?</label>
                <select
                    value={userState.selectValue}
                    onChange={handleChange}
                    className="form-control" ref={dosage} id="timesaday">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">What time do you want to start taking it?</label>

                <TimeDives handleSelect={handleSelect} selectValue={userState.selectValue} />
                {console.log("secondory " + userState.selectValue)}

            </div>
            <div>
                {/* // <ToastMeds  */}
                {/* // type="submit"  */}
                <Button onClick={handleSubmit} id="bluebtn" className="btn mt-2 mb-4">Add Medication</Button>
                {/* // /> */}

            </div>


        </ form >

    )
}

export default MedicationForm;