import React from 'react';

import './LoanComponentStyle.css';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {billActions} from "../../store/slices/bill.slice";


const LoanComponent = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();


    const submit = (data) => {
        dispatch(billActions.takeLoan(data));
    }


    return (
        <main className={'loanComponent width flex'}>
            <form onSubmit={handleSubmit(submit)}>
                <label>Loan:</label>
                <input type="number" {...register('loan')}/>

                <input type="text"
                       {...register('goalLoan')}
                    placeholder={'goal loan'}
                />

                <button> take loan</button>
            </form>
        </main>
    );
};

export {LoanComponent};