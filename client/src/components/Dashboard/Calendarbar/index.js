import React, { useEffect } from "react";
var moment = require('moment');
moment().format();
let updateHandle;



var update = function () {
    document.getElementById("currenttime")
        .innerHTML = moment().format('h:mm:ss a');
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
                <div className="row">
                    <table className="table text-color justify-content-center">
                        <thead>
                            <tr>
                                <th scope="col">Today: {moment().format('MMMM Do YYYY')}</th>
                                <th id="currenttime" scope="col"></th>
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
            </div>
        )
    }

export default Calendarbar;