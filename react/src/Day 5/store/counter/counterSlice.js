// slice - state, action, reducer

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value : 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            console.log(action);
            state.value += action.payload
        }
    }
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer;

// action.type - konse type ka action h
// dispatch - sends an action to reducer
// action - type, payload
// payload - data