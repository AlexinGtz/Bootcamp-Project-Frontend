// Tomar archivo de referencia en datos globales
import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const testCounterSlice = createSlice({
    name: 'testCounter',
    initialState: initialState,
    reducers: {
        addToCounter: (state) => {
            return state + 1; 
        },
    }
})

export const { addToCounter } = testCounterSlice.actions;
export default testCounterSlice.reducer