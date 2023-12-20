import React from 'react';


import './LayoutStyle.css';
import {BillComponent, DepositComponent, TitleComponent, WithdrawComponent} from "../components";


const Layout = () => {

    return (
        <main className={'layout width flex-direction'}>
            <TitleComponent/>
            <BillComponent/>

            <section className={'layout-block-currents flex-direction width'}>
                <DepositComponent/>
                <WithdrawComponent/>
            </section>
        </main>
    );
};

export {Layout};