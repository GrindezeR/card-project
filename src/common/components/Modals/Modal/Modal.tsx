import styles from './Modal.module.css';
import React from "react";

type PropsType = {
    title: string
    setShow: (show: boolean) => void
    left: number
    top: number
}

export const Modal: React.FC<PropsType> = ({setShow, left, top, children, title}) => {

    const hideWindow = () => setShow(false);

    return (
        <>
            <div className={styles.modalBack} onClick={hideWindow}/>
            <div className={styles.modal} style={{left: `${left}%`, top: `${top}%`}}>
                <div className={styles.title}>{title}</div>
                {children}
            </div>
        </>
    );
}