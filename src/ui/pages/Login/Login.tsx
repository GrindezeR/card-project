import React, {ChangeEvent, useState} from "react";
import SuperInputText from "../../../common/components/SuperInputText/SuperInputText";
import SuperCheckbox from "../../../common/components/SuperCheckbox/SuperCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {logIn} from "../../../bll/loginReducer";
import {AppStoreType} from "../../../bll/store";
import {Link, Navigate} from "react-router-dom";
import styles from './Login.module.css'
import SuperButton from "../../../common/components/SuperButton/SuperButton";

export const Login = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.loginPage.isLoggedIn);
    const error = useSelector<AppStoreType, string>(state => state.loginPage.error);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const submitHandler = () => {
        if (!email) {
            setEmailError('Email is required!');
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setEmailError('Invalid email address');
        } else if (!password) {
            setPasswordError('Password is required!')
        } else if (password.length <= 7) {
            setPasswordError('Invalid password');
        } else {
            dispatch(logIn({email, password, rememberMe}));
        }
    }

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
        setEmailError('');
    }
    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
        setPasswordError('');
    }

    if (isLoggedIn) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <section className={styles.loginSection}>
            <article className={styles.loginArticle}>
                <h3>Login to Web App</h3>
                <div className={styles.loginForm}>
                    <div className={styles.usernameWrapper}>
                        <SuperInputText onEnter={submitHandler} className={styles.username}
                                        spanClassName={styles.error}
                                        error={emailError}
                                        onChange={onChangeEmailHandler}
                                        type="text"
                                        placeholder="Email"/>
                    </div>
                    <div className={styles.passwordWrapper}>
                        <SuperInputText onEnter={submitHandler}
                                        className={styles.password}
                                        spanClassName={styles.error}
                                        error={passwordError || error}
                                        onChange={onChangePasswordHandler}
                                        type="password"
                                        placeholder="Password"/>
                    </div>
                    <div className={styles.checkboxRemember}>
                        <SuperCheckbox className={styles.checkbox}
                                       spanClassName={styles.remember}
                                       onChangeChecked={setRememberMe}>
                            Remember me on this computer
                        </SuperCheckbox>
                    </div>
                    <SuperButton onClick={submitHandler} className={styles.submit}>Login</SuperButton>
                </div>
            </article>
            <div className={styles.reset}>
                Forgot your password? <Link to={`/pass_recovery`}>Click here</Link> to reset it or you can
                register <Link to={'/registration'}>here.</Link>
            </div>
        </section>
    );
}
