import React from "react";
import _ from "lodash";

function TimeDives(props) {


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
                <h5> {countNum[i]} Time </h5>
                <hr />
                <div class="row">
                <div class="col-md-4">
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
                    </div>
                    <div class="col-md-4">
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>00</option>
                        <option>15</option>
                        <option>30</option>
                        <option>45</option>
                    </select>
                    </div>
                    <div class="col-md-4">
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>AM</option>
                        <option>PM</option>
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