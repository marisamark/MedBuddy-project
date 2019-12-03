import React from "react";
var moment = require('moment');
moment().format();

var update = function() {
    document.getElementById("currenttime")
    .innerHTML = moment().format('h:mm:ss a');
}
setInterval(update, 1000);

function Calendarbar() {
    
    return(
<>
<div className="row">
            <table className="table text-color justify-content-center">
                <thead>
                    <tr>
                        <th scope="col">Today's Date: {moment().format('MMMM Do YYYY')}</th>
                        <th id="currenttime" scope="col"></th>
                    </tr>

                </thead>
            </table>

        </div>

        <div className="row">
            <table className="table text-color text-center">
                <thead>
                    <tr>
                        <th scope="col">{moment().format('dddd')}</th>
                        <th scope="col">{moment().add(1, 'days').format('dddd')}</th>
                        <th scope="col">{moment().add(2, 'days').format('dddd')}</th>
                        <th scope="col">{moment().add(3, 'days').format('dddd')}</th>
                        <th scope="col">{moment().add(4, 'days').format('dddd')}</th>
                        <th scope="col">{moment().add(5, 'days').format('dddd')}</th>
                        <th scope="col">{moment().add(6, 'days').format('dddd')}</th>
                    </tr>
                    <tr>
                        <td>{moment().add(0, 'days').format("D")}</td>
                        <td>{moment().add(1, 'days').format("D")}</td>
                        <td>{moment().add(2, 'days').format("D")}</td>
                        <td>{moment().add(3, 'days').format("D")}</td>
                        <td>{moment().add(4, 'days').format("D")}</td>
                        <td>{moment().add(5, 'days').format("D")}</td>
                        <td>{moment().add(6, 'days').format("D")}</td>
                    </tr>

                </thead>
            </table>
        </div>
</>
    )
}

export default Calendarbar;