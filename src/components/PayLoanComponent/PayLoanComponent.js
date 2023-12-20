import React from 'react';

import './PayLoanComponentStyle.css';
import {useDispatch, useSelector} from "react-redux";
import {billActions} from "../../store/slices/bill.slice";


const PayLoanComponent = () => {
    const {currentGoalLoan, currentLoan, nameMoney} = useSelector(store => store.billReducer);
    const dispatch = useDispatch();

    const payLoan = () => {
        dispatch(billActions.payLoanBack());
    }


    return (
        <main className={'payLoanComponent flex width'}>
            <span className={'payLoanComponent-text'}>
                Pay back `{nameMoney} ${currentLoan} ({currentGoalLoan})`
            </span>

            <button onClick={payLoan}>pay loan</button>
        </main>
    );
};

export {PayLoanComponent};