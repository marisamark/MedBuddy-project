// STATE

// user: 	{
// 	id: 0,
// 	user: "",
// 	password: "",
// 	firstName: "",
// 	lastName: ""
// 	},
// medRoutine: [{
// 	id: 0,
// 	dose: "1 tab",
// 	medLog: [{
// 		id: 0,
// 		date: new Date().getMonth() + "/" + new Date().getDate() + "/" + new Date().getFullYear(),
// 		time: new Date().getHours() + ":" + new Date().getMinutes(),
// 		status: false,
// 		}],
// 	medicine: {
// 		name: "aspirin",
// 		}
// 	}]

import React, { createContext, useReducer, useContext } from "react";


const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = useReducer(reducer, {
       user: {
        id: 0,
        	user: "",
        	password: "",
        	firstName: "",
        	lastName: ""
       },
       medroutine: [{
           id: 0,
           datecount: 0,
           dosage : 0,
           dose : 0,
           userid : 0,
           medlog : [{ 
               id: 0,
               date : Date.now(),
               time : 0,
               status : false,
               medroutineid : 0
           }]
       }]
    })
    return < Provider value = {[state, dispatch]} {...props} />;
}

const useStoreContext = () => {
    return useContext(StoreContext);
}

export {StoreProvider, useStoreContext};