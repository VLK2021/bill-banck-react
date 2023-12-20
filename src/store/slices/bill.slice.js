import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    currentBill: 0,
    nameMoney: null,
    currentGoalLoan: '',
}

const billSlice = createSlice({
    name: 'billSlice',
    initialState,
    reducers: {
        addDeposit: (state, action) => {
            if (action.payload.val === state.nameMoney || state.nameMoney === null) {
                state.currentBill = state.currentBill + Number(action.payload.deposit);
                state.nameMoney = action.payload.val;
            }
        },

        withdrawDeposit: (state, action) => {
            state.currentBill = state.currentBill - Number(action.payload.withdraw);
        },

        takeLoan: (state, action) => {
            state.currentBill = state.currentBill + Number(action.payload.loan);
            state.currentGoalLoan = action.payload.goalLoan;
        },
    }
});

const {actions: {addDeposit, withdrawDeposit, takeLoan}} = billSlice;
const billActions = {addDeposit, withdrawDeposit, takeLoan};

export {billActions};
export default billSlice.reducer;