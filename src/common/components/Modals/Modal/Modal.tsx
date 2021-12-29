import styles from './Modal.module.css';
import React from "react";

type PropsType = {
    title:string
    setShow: (show: boolean) => void
}

export const Modal: React.FC<PropsType> = ({setShow, children,title}) => {

    const hideWindow = () => setShow(false);

    return (
        <>
            <div className={styles.modalBack} onClick={hideWindow}/>
            <div className={styles.modal}>
                <div className={styles.title}>{title}</div>
                {children}
            </div>
        </>
    );
}