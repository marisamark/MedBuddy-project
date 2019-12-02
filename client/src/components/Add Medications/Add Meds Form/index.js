import React, { useState, useRef } from "react";
import TimeDives from "../StartTimes/index";
import ToastMeds from "../Toast/index";
import { useStoreContext } from "../../../utils/GlobalState";

function MedicationForm() {
    const [userState, setUserState] = useState({
        selectValue: "1",
    });

    const medicinename = useRef();
    const dose = useRef();
    const date = useRef();
    const datecount = useRef();
    const [state, dispatch] = useStoreContext();


    console.log("initial " + userState.selectValue)
    let handleChange = (e) => {
        setUserState({ selectValue: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        API.postMedroutine({
            dose: dose.current.value,
            date: date.current.value,
            datecount: datecount.current.value
        }).then(result => {
            dispatch({
                
            })
        })
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
                    className="form-control" id="exampleFormControlSelect1">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">What time do you want to start taking it?</label>

                <TimeDives selectValue={userState.selectValue} />
                {console.log("secondory " + userState.selectValue)}

            </div>
            <div>
                <ToastMeds type="submit" className="btn mt-2 mb-2" />
            </div>


        </ form >

    )
}

export default MedicationForm;