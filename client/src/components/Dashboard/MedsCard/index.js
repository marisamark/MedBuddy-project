import React, { useContext } from "react";
import Reschedule from "../Reschedule modal/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import API from "../../../utils/API";
import { UPDATE_STATUS, UPDATE_ROUTINE } from "../../../utils/actions";
import { StoreContext } from "../../../utils/GlobalState";

function MedsCard(props) {

  const [state, dispatch] = useContext(StoreContext);

  const handleSubmit = e => {
    e.preventDefault();
    API.updateStatus(props.logId, {
        status: true
    }).then(result => {
        console.log("COMPLETE BUTTON", result)
        dispatch({
            type: UPDATE_STATUS,
            medroutine: result
        });

        API.getAllRoutines(state.user.id)
        .then(results => {
            console.log("run me", results.data)
            let routines = results.data;
            console.log("hey! this is your updated routines", routines)
            // dispatch({ type: FIND_ALL_ROUTINES, payload: routines })
            dispatch({ type: UPDATE_ROUTINE, medroutine: routines })

            //console.log('CURRENT STATE', state)
        }).then(() => {
            console.log("state after then then", state);
        });
    })
};

  return (
    <div className="card mt-4 text-color">
      <div id="medsihavetotakecard" className="card-body">
        <h4 id="time" className="card-title text-center">{props.time}</h4>
        <h5 id="drugname" className="text-center">{props.name} </h5>
        <h5 id="drugcon" className="text-center">{props.dose}</h5>
        <div className="row justify-content-center">

          {!props.status ?
          <Button onClick={handleSubmit} className="mr-2 ml-2 complete1" id="button-blue" >Complete</Button>
          : <></>
          }
          {!props.status ?
          <Reschedule /> 
          : <></>
          }
        </div>
      </div>
    </div>

  )
}

export default MedsCard;