import React from "react";

function Calendarbar() {
    
    return(
<>
<div class="row">
            <table class="table justify-content-center">
                <thead>
                    <tr>
                        <th scope="col">Today's Date:</th>
                        <th scope="col">Current Time:</th>
                    </tr>

                </thead>
            </table>

        </div>

        <div class="row">
            <table class="table text-center">
                <thead>
                    <tr>
                        <th scope="col">Mon</th>
                        <th scope="col">Tue</th>
                        <th scope="col">Wed</th>
                        <th scope="col">Thur</th>
                        <th scope="col">Fri</th>
                        <th scope="col">Sat</th>
                        <th scope="col">Sun</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                    </tr>

                </thead>
            </table>
        </div>
</>
    )
}

export default Calendarbar;