import React, {useState} from "react";
import SuperInputText from "../../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../../common/components/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {register, setRegisterError} from "../../../bll/registerReducer";
import commonStyles from "../../../common/styles/commonStyles.module.css";
import styles from "./Register.module.css";
import {AppStoreType} from "../../../bll/store";
import {Navigate} from "react-router-dom";

export const Registration = () => {
    const dispatch = useDispatch();
    const isRegistered = useSelector<AppStoreType, boolean>(state => state.registerPage.isRegistered);
    const error = useSelector<AppStoreType, string>(state => state.registerPage.errorRegister);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const onSubmit = () => {
        if (!email || !password) {
            dispatch(setRegisterError('Email and password is required!'));
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            dispatch(setRegisterError('Invalid email address'));
        } else if (password.length <= 7) {
            dispatch(setRegisterError('Invalid password'));
        } else if (password !== passwordCheck) {
            dispatch(setRegisterError('Passwords must match'));
        } else {
            dispatch(register({email, password}));
        }
    }

    if (isRegistered) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className={commonStyles.wrapper}>
            <section className={commonStyles.section}>
                <article className={commonStyles.article}>
                    <h3>Registration</h3>
                    <div className={commonStyles.form}>
                        <div>
                            <SuperInputText
                                className={commonStyles.input}
                                name={'email'}
                                type={'text'}
                                value={email}
                                onChangeText={setEmail}
                                placeholder={'Email'}
                            />
                        </div>
                        <div>
                            <SuperInputText
                                className={commonStyles.input}
                                name={'password'}
                                type={'password'}
                                value={password}
                                onChangeText={setPassword}
                                placeholder={'Password'}
                            />
                        </div>
                        <div>
                            <SuperInputText
                                className={commonStyles.input}
                                name={'passwordControl'}
                                type={'password'}
                                value={passwordCheck}
                                onChangeText={setPasswordCheck}
                                placeholder={'Password'}
                            />
                        </div>
                        <div>
                            <SuperButton
                              className={[commonStyles.button, styles.button].join(' ')}
                                onClick={onSubmit}
                                // disabled={isDisabled}
                            >Sign in</SuperButton>
                        </div>
                    </div>
                </article>
                {/*{error && <div className={sc.error}>Error: {error}</div>}*/}

                {error && <div className={styles.error}>{error}</div>}
            </section>
        </div>
    );
}