import React from 'react';


import './LayoutStyle.css';
import {TitleComponent} from "../components";


const Layout = () => {

    return (
        <main className={'layout width flex-direction'}>
            <TitleComponent/>
        </main>
    );
};

export {Layout};