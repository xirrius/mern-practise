import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./counter/counterSlice"
// state mgmt
// global state - slice 
// store, action, reducer

// state
// user ka state - user = {name, age}, action- login, logout, edit, reducer
// counter ka state count, action, reducer9

// state ={ counter:{value : number}, user1: }

//Redux store - state = { counter, user1 }

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        // user1: userSlice,
    }
})

