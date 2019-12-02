import React from "react";
import _ from "lodash";

function TimeDives(props) {

    // const hour = useRef();
    // const min = useRef();
    // const AMPM = useRef();

    // hour: hour.current.value,
    // min: min.current.value,
    // AMPM: AMPM.current.value

    console.log("selected", props)
    let countNum = {
        0: "First",
        1: "Second",
        2: "Third",
        3: "Fourth"
    }

    let timesList = [];
    _.times(props.selectValue, (i) => {
        timesList.push(
            <div key={i}>
                <br />
                <p> {countNum[i]} Time </p>
                <hr />
                <div className="row">
                <div className="col">
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    </div>
                    <div className="col">
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option value="00">00</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                    </select>
                    </div>
                    <div className="col">
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>
                    </div>
                    <br />
                    </div>
            </div>

        );
    })


    return (
        <div>{timesList}</div>
    )

}
export default TimeDives;