import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import './DepositComponentStyle.css';
import {billActions} from "../../store/slices/bill.slice";


const DepositComponent = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(billActions.addDeposit(data));
    }


    return (
        <main className={'depositComponent width flex'}>
            <form onSubmit={handleSubmit(submit)}>
                <label>Deposit:</label>
                <input type="number"
                       {...register('deposit')}
                />

                <select {...register('val')}>
                    <option value={'USD'}>USD</option>
                    <option value={'UA'}>UA</option>
                </select>

                <button>deposit</button>
            </form>
        </main>
    );
};

export {DepositComponent};