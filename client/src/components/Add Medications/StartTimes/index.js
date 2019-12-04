import React, { useState } from "react";
import _ from "lodash";

function TimeDives(props) {
    // const [timeState, setTimeState] = useState({})

    console.log("selected", props)
    let countNum = {
        0: "First",
        1: "Second",
        2: "Third",
        3: "Fourth"
    }

    function handleSelect(e) {
        e.preventDefault()
        props.handleSelect({ key: e.target.id, val: e.target.value })
        //         console.log("SELECTING...")
        //         console.log(e.target.value )
        //         props.handleSubmit({...timeState, [e.target.id]:e.target.value})
        // setTimeState({...timeState, [e.target.id]:e.target.value})
        //     // function handleSelectMinute(e) {
        //     //     console.log("SELECTING...")
        //     //     console.log(e.target.value + "minutes")
        //     //     setTimeState({...timeState, [e.target.id]:e.target.value})
        //     // }
        //     // function handleSelectAMPM(e) {
        //     //     console.log("SELECTING...")
        //     //     console.log(e.target.value)
        //     // }
        //     console.log(timeState)
    }

    let timesList = [];
    _.times(props.selectValue, (i) => {
        timesList.push(
            i);
    })

    return (
        timesList.map((item, i) => {
            return <div key={i}>
                <br />
                <p> {countNum[i]} Time </p>
                <hr />
                <div className="row">
                    <div className="col">
                        <select className="form-control" onChange={handleSelect} id={"hour" + i}>
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
                        <select className="form-control" onChange={handleSelect} id={'minute' + i}>
                            <option value="00">00</option>
                            <option value="15">15</option>
                            <option value="30">30</option>
                            <option value="45">45</option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="form-control" onChange={handleSelect} id={'ampm' + i}>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </div>
                    <br />
                </div>
            </div>
        })
    )


}
export default TimeDives;


