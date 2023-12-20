import React from 'react';


import './LayoutStyle.css';
import {
    BillComponent,
    DepositComponent,
    LoanComponent,
    PayLoanComponent,
    TitleComponent,
    WithdrawComponent
} from "../components";
import {useSelector} from "react-redux";


const Layout = () => {
    const {currentLoan} = useSelector(store => store.billReducer);

    return (
        <main className={'layout width flex-direction'}>
            <TitleComponent/>
            <BillComponent/>

            <section className={'layout-block-currents flex-direction width'}>
                <DepositComponent/>
                <WithdrawComponent/>
                <LoanComponent/>
                {currentLoan ? <PayLoanComponent/> : null}
            </section>
        </main>
    );
};

export {Layout};