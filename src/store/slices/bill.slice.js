import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    currentBillUSD: 0,
    currentBillUA: 0,
}

const billSlice = createSlice({
    name: 'billSlice',
    initialState,
    reducers: {
        addDeposit: (state, action) => {
            action.payload.val === 'USD' ?
                state.currentBillUSD = state.currentBillUSD + Number(action.payload.deposit)
                : state.currentBillUA = state.currentBillUA + Number(action.payload.deposit)

        },

        withdrawDeposit: (state, action) => {
            action.payload.val === 'USD' ?
                state.currentBillUSD = state.currentBillUSD - Number(action.payload.withdraw)
                : state.currentBillUA = state.currentBillUA - Number(action.payload.withdraw)
        }
    }
});

const {actions: {addDeposit, withdrawDeposit}} = billSlice;
const billActions = {addDeposit, withdrawDeposit};

export {billActions};
export default billSlice.reducer;