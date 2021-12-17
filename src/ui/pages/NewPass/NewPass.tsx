import React, {ChangeEvent, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import styles from "./NewPass.module.css";
import SuperInputText from "../../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../../common/components/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {createNewPassword, errorResponse, NewPassInitialStateType} from "../../../bll/newPassReducer";
import {AppStoreType} from "../../../bll/store";
import {LoadingLine} from "../../../common/components/LoadingLine/LoadingLine";

export const NewPass = () => {

    const navigate = useNavigate();

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

    const onClickCreatePassword = () => {
        token && dispatch(createNewPassword(newPassword, token));
    }

    useEffect(() => {
        if (setNewPassState.setNewPassword) {
            navigate("/login");
        }
    }, [setNewPassState.setNewPassword, navigate]);

    return (
        <div>
            {status && <LoadingLine/>}
            <section className={styles.newPassSection}>
                <article className={styles.newPassArticle}>
                    <h3>Create new password</h3>
                    <div className={styles.newPassForm}>
                        <div>
                            <SuperInputText
                                className={styles.password}
                                name={'new password'}
                                type={'text'}
                                value={newPassword}
                                onChange={onChangeNewPassword}
                                placeholder={'New password'}
                                error={setNewPassState.error}
                            />
                            <SuperInputText
                                className={styles.password}
                                name={'confirm password'}
                                type={'text'}
                                value={confirmPassword}
                                onChange={onChangeCheckPassword}
                                placeholder={'Confirm password'}
                            />
                        </div>
                        <div>
                            <SuperButton className={styles.createPassword}
                                         onClick={onClickCreatePassword}
                                         disabled={newPassword !== confirmPassword || status}
                            >
                                Create password
                            </SuperButton>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
}