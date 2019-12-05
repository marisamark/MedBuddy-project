import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
var moment = require('moment');
moment().format();
let updateHandle;



function clickedDay (event) {
// console.log(event.target)
let day = parseInt(event.target.dataset['day'])
// console.log("day", day)

document.getElementById("clickedday")
    .innerHTML = moment().add(day, 'days').format('dddd MMMM Do YYYY')
}

var update = function () {
    document.getElementById("currenttime")
        .innerHTML = "Today: " + moment().format('lll');
}
    

    function Calendarbar() {
useEffect(() => {
    updateHandle = setInterval(update, 1000);
    return () => {
        clearInterval(updateHandle);
    }
}, [])


        return (
            <div>
                <div className="row container mx-auto">
                    <table className="table text-color justify-content-center">
                        <thead>
                            <tr>
                                <th id="currenttime" scope="col"></th>
                                {/* <th id="clickedday" scope="col"></th> */}
                            </tr>

                        </thead>
                    </table>

                </div>

                <div className="row">
                    <table className="table text-color text-center">
                        <thead>
                            <tr>
                                <th scope="col">{moment().format('ddd')}</th>
                                <th scope="col">{moment().add(1, 'days').format('ddd')}</th>
                                <th scope="col">{moment().add(2, 'days').format('ddd')}</th>
                                <th scope="col">{moment().add(3, 'days').format('ddd')}</th>
                                <th scope="col">{moment().add(4, 'days').format('ddd')}</th>
                                <th scope="col">{moment().add(5, 'days').format('ddd')}</th>
                                <th scope="col">{moment().add(6, 'days').format('ddd')}</th>
                            </tr>
                            <tr>
                                <td data-day="0" onClick={clickedDay}className="calendarbartext" >{moment().add(0, 'days').format("D")}</td>
                                <td data-day="1"onClick={clickedDay} >{moment().add(1, 'days').format("D")}</td>
                                <td data-day="2" onClick={clickedDay}className="calendarbartext" >{moment().add(2, 'days').format("D")}</td>
                                <td data-day="3" onClick={clickedDay}className="calendarbartext" >{moment().add(3, 'days').format("D")}</td>
                                <td data-day="4" onClick={clickedDay} className="calendarbartext" >{moment().add(4, 'days').format("D")}</td>
                                <td data-day="5" onClick={clickedDay} className="calendarbartext" >{moment().add(5, 'days').format("D")}</td>
                                <td data-day="6" onClick={clickedDay} className="calendarbartext" >{moment().add(6, 'days').format("D")}</td>
                            </tr>

                        </thead>
                    </table>
                    <h2 className="text-center text-color mx-auto mt-4 mb-4"><div id="clickedday"></div></h2>
                </div>
              
            </div>
        )
    }

export default Calendarbar;