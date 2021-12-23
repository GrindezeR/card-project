import React from "react";
import styles from "./Sort.module.css";
import commonStyles from "../../styles/commonStyles.module.css";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";

type PropsType = {
    sortHandlerUp: () => void
    sortHandlerDown: () => void
    title: string
}

export const Sort = ({sortHandlerUp, sortHandlerDown, title}: PropsType) => {
    const isLoading = useSelector<AppStoreType, boolean>(state => state.app.loading);

    return (
        <div className={styles.updated}>
            {title}
            <div className={styles.updatedBtnWrapper}>
                <button
                    className={`${commonStyles.button} ${isLoading && commonStyles.disabled} ${styles.updatedBtn}`}
                    onClick={sortHandlerUp}>
                    &and;
                </button>
                <button
                    className={`${commonStyles.button} ${isLoading && commonStyles.disabled} ${styles.updatedBtn}`}
                    onClick={sortHandlerDown}>
                    &or;
                </button>
            </div>
        </div>
    );
}