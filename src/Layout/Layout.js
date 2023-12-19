import React from 'react';
import { TbBrandRedux } from "react-icons/tb";

import './LayoutStyle.css';


const Layout = () => {

    return (
        <main className={'layout width flex-direction'}>
            <section>
                <article className={'width flex'}>
                    <span></span>

                    <p className={'layout-title'}>The react-redux-bill</p>

                    <TbBrandRedux className={'redux-icon'}/>
                </article>
            </section>
        </main>
    );
};

export {Layout};