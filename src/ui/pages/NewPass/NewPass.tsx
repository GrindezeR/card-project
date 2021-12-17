import React, {ChangeEvent, useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import commonStyles from "../../../common/styles/commonStyles.module.css";
import styles from "./NewPass.module.css"
import SuperInputText from "../../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../../common/components/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {createNewPassword, errorResponse, NewPassInitialStateType} from "../../../bll/newPassReducer";
import {AppStoreType} from "../../../bll/store";

export const NewPass = () => {
    const status = useSelector<AppStoreType, boolean>(state => state.app.loading);
    const setNewPassState = useSelector<AppStoreType, NewPassInitialStateType>(state => state.newPassPage);
    const dispatch = useDispatch();

    const {token} = useParams();

    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const onChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.currentTarget.value);
        dispatch(errorResponse(""));
    }

    const onChangeCheckPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.currentTarget.value);
    }

    const onSubmit = () => {
        if (!newPassword || !confirmPassword) {
            dispatch(errorResponse('Password is required!'))
        } else if (newPassword !== confirmPassword) {
            dispatch(errorResponse('Passwords should be equal!'))
        } else if (newPassword.length <= 7) {
            dispatch(errorResponse('Invalid password'))
        } else {
            dispatch(createNewPassword(newPassword, token as string));
            dispatch(errorResponse(''))
        }
    }

    if (setNewPassState.setNewPassword) {
        return <Navigate to={"/login"}/>;
    }

    return (
        <div className={commonStyles.wrapper}>
            <section className={commonStyles.section}>
                <article className={commonStyles.article}>
                    <h3>Create new password</h3>
                    <div className={commonStyles.form}>
                        <div>
                            <SuperInputText
                                onEnter={onSubmit}
                                className={commonStyles.input}
                                name={'new password'}
                                type={'password'}
                                value={newPassword}
                                onChange={onChangeNewPassword}
                                placeholder={'New password'}/>
                            <SuperInputText
                                onEnter={onSubmit}
                                className={commonStyles.input}
                                spanClassName={`${commonStyles.error} ${styles.error}`}
                                name={'confirm password'}
                                type={'password'}
                                value={confirmPassword}
                                onChange={onChangeCheckPassword}
                                placeholder={'Confirm password'}
                                error={setNewPassState.error}/>
                        </div>
                        <div>
                            <SuperButton
                                className={`${commonStyles.button} ${status && commonStyles.disabled} ${styles.button} `}
                                onClick={onSubmit}
                                disabled={status}>
                                Create password
                            </SuperButton>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
}