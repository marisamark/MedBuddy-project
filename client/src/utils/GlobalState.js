import React, { createContext, useReducer, useContext } from "react";
import {
    ADD_ARTICLES,
    FIND_ALL_ROUTINES,
    usersignup
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case usersignup:
            return { 
                ...state, 
                user: action.post 
            };
        case ADD_ARTICLES:
            // console.log(action);
            return { 
                ...state, 
                headline: action.articles
            };
        case FIND_ALL_ROUTINES:
            console.log('findRoutine action', action)
            return { ...state,
                medroutine: action.routines,
            }
        
        default: throw new Error("action doesnt exist")
    }
}

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        headline: [],
        user: {
            id: 0,
            username: "",
            password: "",
            firstname: "hello",
            lastname: "",
            email : ""
        },
        medroutine: [{
            id: 0,
            datecount: 0,
            dosage: 0,
            dose: 0,
            userid: 0,
            MedLogs: [{
                id: 0,
                date: Date.now(),
                time: 0,
                status: false,
                medroutineid: 0
            }],
            Medicine: [{
                id: 0,
                medicinename: ""
            }]
        }]
    })
    return < Provider value={[state, dispatch]} {...props} />;
}

const useStoreContext = () => {
    return useContext(StoreContext);
}

export { StoreProvider, useStoreContext, StoreContext };
