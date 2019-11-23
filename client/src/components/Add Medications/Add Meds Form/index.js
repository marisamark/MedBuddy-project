import React, {useState} from "react";
import TimeDives from "../Start Times/index";

function MedicationForm() {
    const[userState, setUserState]=useState({
        selectValue: "1",
      
    });

    console.log("initial " + userState.selectValue)
    let handleChange =(e) =>{
        setUserState({selectValue:e.target.value});
      }


     
    return (
        <div>
            
        <div class="form-group">
            <label for="exampleFormControlInput1">Medication Name</label>
            <input type="text" class="form-control" placeholder="Add the name of your medication..." />
        </div>

        <div class="form-group">
            <label for="exampleFormControlInput1">Dose</label>
            <input type="text" class="form-control" placeholder="1 tablet..." />
        </div>

        <div class="form-group">
            <label for="exampleFormControlInput1">When should you start to take it?</label>
            <input type="text" class="form-control" placeholder="MM/DD/YYY" />
        </div>

        <div class="form-group">
            <label for="exampleFormControlInput1">How many consecutive days do you need to take it?</label>
            <input type="text" class="form-control" placeholder="10" /> 
        </div>

        <div class="form-group">
            <label for="exampleFormControlSelect1">How often should you take it?</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>everyday</option>
                <option>every other day</option>
            </select>
        </div>

        <div class="form-group">
            <label for="exampleFormControlSelect1">How many times a day do you need to take it?</label>
            <select 
            value={userState.selectValue} 
            onChange={handleChange} 
            class="form-control" id="exampleFormControlSelect1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">What time do you want to start taking it?</label>                   
                  
                    <TimeDives selectValue={userState.selectValue}/>
                    {console.log("secondory "+ userState.selectValue)}
                  
                </div>

            

        </div>

    )
}

export default MedicationForm;