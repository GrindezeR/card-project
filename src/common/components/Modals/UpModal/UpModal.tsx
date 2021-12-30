import React from "react";
import {useEffect, useState} from "react";
import styles from './UpModal.module.css';

type ModalUpType = {
    speed?: number
}

export const UpModal: React.FC<ModalUpType> = ({speed = 1}) => {
    const [show, setShow] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) setShow(true);
        else setShow(false);
    };

    const scroll = () => {
        const step = window.scrollY / speed;
        let lastState = window.scrollY;

        const innerTimer = setInterval(() => {
            if (lastState < window.scrollY) clearInterval(innerTimer);
            lastState = window.scrollY;

            window.scroll(0, lastState - step);
            if (window.scrollY === 0) clearInterval(innerTimer);
        }, 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    if (show) {
        return (
            <div className={styles.upBlock} onClick={scroll}>
                <span className={styles.text}>&#8593;</span>
                <span className={styles.text}>UP</span>
            </div>
        );
    } else return null
};