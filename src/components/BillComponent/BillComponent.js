import React from 'react';
import {useSelector} from "react-redux";

import './BillComponentStyle.css';


const BillComponent = () => {
    const {currentBillUSD, currentBillUA} = useSelector(store => store.billReducer);

    return (
        <main className={'billComponent width flex'}>
            <article className={'flex'}>
                <span>{currentBillUSD}</span>
                <p>USD</p>
            </article>

            <article className={'flex'}>
                <span>{currentBillUA}</span>
                <p>UA</p>
            </article>
        </main>
    );
};

export {BillComponent};