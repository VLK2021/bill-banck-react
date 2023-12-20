import React from 'react';
import {useSelector} from "react-redux";

import './BillComponentStyle.css';


const BillComponent = () => {
    const {currentBill, nameMoney} = useSelector(store => store.billReducer);

    return (
        <main className={'billComponent width flex'}>
            <article className={'flex'}>
                <span>{currentBill}</span>
                <p>{nameMoney && nameMoney}</p>
            </article>
        </main>
    );
};

export {BillComponent};