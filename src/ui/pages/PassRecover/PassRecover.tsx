import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import commonStyles from "../../../common/styles/commonStyles.module.css";
import styles from "./PassRecover.module.css";
import SuperInputText from "../../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../../common/components/SuperButton/SuperButton";
import {errorResponse, PassRecoverInitialStateType, recoveryPass} from "../../../bll/passRecoverReducer";
import {AppStoreType} from "../../../bll/store";
import {Link, Navigate} from "react-router-dom";

export const PassRecover = () => {
    const status = useSelector<AppStoreType, boolean>(state => state.app.loading);
    const recoverPassState = useSelector<AppStoreType, PassRecoverInitialStateType>(state => state.recoverPassPage);
    const dispatch = useDispatch();

    const [recoverPassMail, setRecoverPassMail] = useState<string>("");

    const onChangeEnterMail = (event: ChangeEvent<HTMLInputElement>) => {
        setRecoverPassMail(event.currentTarget.value);
        dispatch(errorResponse(""));
    }

    const onSubmit = () => {
        if (!recoverPassMail) {
            dispatch(errorResponse('Email is required!'))
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(recoverPassMail)) {
            dispatch(errorResponse('Invalid email address'));
        } else {
            dispatch(recoveryPass(recoverPassMail));
            dispatch(errorResponse(''));
        }
    }

    if (recoverPassState.mailSent) {
        return <Navigate to={'/check-email'}/>
    }

    return (
        <div className={commonStyles.wrapper}>
            <section className={commonStyles.section}>
                <article className={commonStyles.article}>
                    <h3>Password Recovery</h3>
                    <div className={commonStyles.form}>
                        <div>
                            <SuperInputText
                                onEnter={onSubmit}
                                className={commonStyles.input}
                                spanClassName={styles.error}
                                name={'email'}
                                type={'text'}
                                value={recoverPassMail}
                                onChange={onChangeEnterMail}
                                placeholder={'Email'}
                                error={recoverPassState.error}
                            />
                        </div>
                        <div className={styles.btnWrapper}>
                            <Link to={'/login'}>
                                <SuperButton className={commonStyles.button}>
                                    Back
                                </SuperButton>
                            </Link>
                            <SuperButton
                                className={`${commonStyles.button} ${styles.button} ${status ? commonStyles.disabled : ''}`}
                                onClick={onSubmit}
                                disabled={status}>
                                Send instructions
                            </SuperButton>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
}