import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    currentBill: 0,
    nameMoney: null,
    currentGoalLoan: '',
    currentLoan: null,
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
            if ((Number(action.payload.withdraw) - state.currentBill) <= 0) {
            state.currentBill = state.currentBill - Number(action.payload.withdraw);
            }
        },

        takeLoan: (state, action) => {
            if (action.payload.goalLoan) {
                state.currentBill = state.currentBill + Number(action.payload.loan);
                state.currentLoan = Number(action.payload.loan);
                state.currentGoalLoan = action.payload.goalLoan;
            }
        },

        payLoanBack: (state, action) => {
            state.currentLoan = 0;
            state.currentGoalLoan = '';
        }
    }
});

const {actions: {addDeposit, withdrawDeposit, takeLoan, payLoanBack}} = billSlice;
const billActions = {addDeposit, withdrawDeposit, takeLoan, payLoanBack};

export {billActions};
export default billSlice.reducer;