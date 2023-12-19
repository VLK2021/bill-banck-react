import React, {useEffect, useState} from 'react';
import {TbBrandRedux} from "react-icons/tb";
import {TbBrandReactNative} from "react-icons/tb";
import {motion} from "framer-motion"

import './TitleComponentStyle.css';


const TitleComponent = () => {
    const colors = ['black', 'green', 'yellow', 'brown'];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % colors.length);
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    const currentColor = colors[currentIndex];

    return (
        <main className={'titleComponent width flex'}>
            <section className={'width flex'}>
                <motion.span
                    animate={{rotate: 360}}
                    transition={{
                        delay: 3,
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        repeatType: "reverse",
                        type: "tween",
                        ease: "easeInOut"
                    }}
                >
                    <TbBrandReactNative className={'react-icon'}/>
                </motion.span>

                <p className={'layout-title'} style={{color: currentColor}}>The react - redux - bill</p>

                <motion.span
                    animate={{rotate: 360}}
                    transition={{
                        delay: 3,
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        repeatType: "reverse",
                        type: "tween",
                        ease: "easeInOut"
                    }}
                >
                    <TbBrandRedux className={'redux-icon'}/>
                </motion.span>
            </section>
        </main>
    );
};

export {TitleComponent};