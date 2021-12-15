import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "./PassRecover.module.css";
import SuperInputText from "../../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../../common/components/SuperButton/SuperButton";
import {errorResponse, InitialStateType, recoveryPass} from "../../../bll/passRecoverReducer";
import {AppStoreType} from "../../../bll/store";
import {LoadingLine} from "../../../common/components/loadingLine/LoadingLine";
import {useNavigate} from "react-router-dom";

export const PassRecover = () => {

    const [recoverPassMail, setRecoverPassMail] = useState<string>("");

    const navigate = useNavigate();

    const status = useSelector<AppStoreType, boolean>(state => state.app.loading);
    const recoverPassState = useSelector<AppStoreType, InitialStateType>(state => state.recoverPassPage);
    const dispatch = useDispatch();

    const onChangeEnterMail = (event: ChangeEvent<HTMLInputElement>) => {
        setRecoverPassMail(event.currentTarget.value);
        dispatch(errorResponse(""));
    }

    const onClickSendInstructions = () => {
        dispatch(recoveryPass(recoverPassMail));
    }

    if (recoverPassState.mailSent) {
        navigate("/check-email");
    }

    return (
        <div>
            {status && <LoadingLine/>}
            <section className={styles.passRecoverSection}>
                <article className={styles.passRecoverArticle}>
                    <h3>Password Recovery</h3>
                    <div className={styles.passRecoverForm}>
                        <div>
                            <SuperInputText
                                className={styles.email}
                                name={'email'}
                                type={'text'}
                                value={recoverPassMail}
                                onChange={onChangeEnterMail}
                                placeholder={'Email'}
                                error={recoverPassState.error}
                            />
                        </div>
                        <div>
                            <SuperButton className={styles.sendInstructions}
                                         onClick={onClickSendInstructions}
                                         disabled={status}
                            >
                                Send instructions
                            </SuperButton>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
}