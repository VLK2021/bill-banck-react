import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import './WithdrawComponentStyle.css';
import {billActions} from "../../store/slices/bill.slice";


const WithdrawComponent = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(billActions.withdrawDeposit(data));
    }


    return (
        <div className={'withdrawComponent width flex'}>
            <form onSubmit={handleSubmit(submit)}>
                <label>Withdraw:</label>
                <input type="number" {...register('withdraw')}/>

                <button>withdraw</button>
            </form>
        </div>
    );
};

export {WithdrawComponent};