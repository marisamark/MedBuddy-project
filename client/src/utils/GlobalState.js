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