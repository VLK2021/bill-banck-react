import React from 'react';


import './LayoutStyle.css';
import {BillComponent, DepositComponent, LoanComponent, TitleComponent, WithdrawComponent} from "../components";


const Layout = () => {

    return (
        <main className={'layout width flex-direction'}>
            <TitleComponent/>
            <BillComponent/>

            <section className={'layout-block-currents flex-direction width'}>
                <DepositComponent/>
                <WithdrawComponent/>
                <LoanComponent/>
            </section>
        </main>
    );
};

export {Layout};