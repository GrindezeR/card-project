import React, {useState} from "react";
import styles from './ErrorModal.module.css';

type PropsType = {
    text: string
}

export const ErrorModal = ({text}: PropsType) => {
    const [opacity, setOpacity] = useState('1');

    setTimeout(() => {
        setOpacity('0');
    }, 3000)

    return (
        <div style={{opacity: `${opacity}`}} className={styles.error}>{text}</div>
    );
}