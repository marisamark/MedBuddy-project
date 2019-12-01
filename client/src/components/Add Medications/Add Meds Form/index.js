import React, { useState } from "react";
import TimeDives from "../StartTimes/index";
import ToastMeds from "../Toast/index";

function MedicationForm() {
    const [userState, setUserState] = useState({
        selectValue: "1",

    });

    console.log("initial " + userState.selectValue)
    let handleChange = (e) => {
        setUserState({ selectValue: e.target.value });
    }



    return (
        <form>

            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Medication Name</label>
                <input type="text" className="form-control" value="medicinename" placeholder="Add the name of your medication..." />
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Dose</label>
                <input type="text" className="form-control" value="dose" placeholder="1 tablet..." />
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">When should you start to take it?</label>
                <input type="text" className="form-control" value="date" placeholder="MM/DD/YYY" />
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">How many consecutive days do you need to take it?</label>
                <input type="text" className="form-control" value="datecount" placeholder="10" />
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
                <ToastMeds type="submit" className="btn btn-primary mt-2 mb-2" />
            </div>


        </ form >

    )
}

export default MedicationForm;