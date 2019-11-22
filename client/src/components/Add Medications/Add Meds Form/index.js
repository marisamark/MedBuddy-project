import React,{useState} from "react";


function MedicationForm() {
    const[userState, setUserState]=useState({
        selectValue: "",
      
    });
    let handleChange =(e) =>{
        setUserState({selectValue:e.target.value});
      }

      let timesList = [];
      let timeDivs = _.times(userState.selectValue, (i) => {
        timesList.push(
            <div key={i}>
                <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>00</option>
                            <option>15</option>
                            <option>30</option>
                            <option>45</option>
                        </select>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>AM</option>
                            <option>PM</option>
                        </select>
                    </div>



        );
      });


    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Medication Name</label>
                    <input type="text" class="form-control" id="" placeholder="Add the name of your medicaiton..."></input>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Dose</label>
                    <input type="text" class="form-control" id="" placeholder="1 tablet..."></input>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">When should you start to take it?</label>
                    <input type="text" class="form-control" id="" placeholder="MM/DD/YYY"></input>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlInput1">How many days do you need to take it?</label>
                    <input type="text" class="form-control" id="" placeholder="10"> days</input>
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
                    {timeDivs}
                </div>

            </form>

        </div>

    )
}

export default MedicationForm;