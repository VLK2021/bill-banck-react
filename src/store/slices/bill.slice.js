import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    currentBill: 0,
}

const billSlice = createSlice({
    name: 'billSlice',
    initialState,
    reducers: {

    }
});

export default billSlice.reducer;