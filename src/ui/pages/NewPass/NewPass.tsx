import React, {ChangeEvent, useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import commonStyles from "../../../common/styles/commonStyles.module.css";
import styles from "./NewPass.module.css"
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
        <div className={commonStyles.wrapper}>
            {/*{status && <LoadingLine/>}*/}
            <section className={commonStyles.section}>
                <article className={commonStyles.article}>
                    <h3>Create new password</h3>
                    <div className={commonStyles.form}>
                        <div>
                            <SuperInputText
                                className={commonStyles.input}
                                name={'new password'}
                                type={'text'}
                                value={newPassword}
                                onChange={onChangeNewPassword}
                                placeholder={'New password'}
                                error={setNewPassState.error}
                            />
                            <SuperInputText
                                className={commonStyles.input}
                                name={'confirm password'}
                                type={'text'}
                                value={confirmPassword}
                                onChange={onChangeCheckPassword}
                                placeholder={'Confirm password'}
                            />
                        </div>
                        <div>
                            <SuperButton className={`${commonStyles.button} ${styles.button}`}
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