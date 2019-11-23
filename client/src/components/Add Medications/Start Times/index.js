import React, { useState } from "react";
import _ from 'lodash';

function TimeDives(props) {
    // const [userState, setUserState] = useState({
    //     selectValue: "",

    // });

    console.log('selected', props.selectValue)
    let timesList = [];
     _.times(props.selectValue, (i) => {
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
    })


    return (
    <div>{timesList}</div>
    )

}
export default TimeDives;