import React, {ChangeEvent, useState} from "react";
<<<<<<< HEAD
import SuperInputText from "../../../common/components/SuperInputText/SuperInputText";
import SuperCheckbox from "../../../common/components/SuperCheckbox/SuperCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {logIn} from "../../../bll/loginReducer";
=======
import {useDispatch, useSelector} from "react-redux";
>>>>>>> main
import {AppStoreType} from "../../../bll/store";
import {Link, Navigate} from "react-router-dom";
import styles from './Login.module.css'
<<<<<<< HEAD
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
=======
import {logIn, setLoginError} from "../../../bll/loginReducer";
import SuperInputText from "../../../common/components/SuperInputText/SuperInputText";
import SuperCheckbox from "../../../common/components/SuperCheckbox/SuperCheckbox";

export const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.loginPage.isLoggedIn);
  const error = useSelector<AppStoreType, string>(state => state.loginPage.error);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);


  const onSubmit = () => {
    if (!email || !password) {
      dispatch(setLoginError('Email and password is required!'));
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      dispatch(setLoginError('Invalid email address'));
    } else if (password.length <= 7) {
      dispatch(setLoginError('Invalid password'));
    } else {
      dispatch(logIn({email, password, rememberMe}));
    }
  }

  const onch = (e:ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
    dispatch(setLoginError(''))
  }

  const navigate = useNavigate()
  if(isLoggedIn) navigate('/profile')

  return (
    <div>
<<<<<<< HEAD
      <form>
        <SuperInputText name={'email'} type={'text'} value={inputEmail} onChangeText={setInputEmail}
                        placeholder={'Email'}/>
        <SuperInputText name={'password'} type={'password'} value={inputPassword} onChangeText={setInputPassword}
                        placeholder={'Password'}/>
        <SuperCheckbox name={'rememberMe'} checked={rememberMe} onChangeChecked={setRememberMe}/>
        <SuperButton onClick={onSubmit}>Sign in</SuperButton>
      </form>

      <div>
        <button onClick={() => dispatch(setLoadingStatusAC(true))}>Loading</button>
        <button onClick={() => dispatch(setLoadingStatusAC(false))}>Unloading</button>
      </div>


=======
>>>>>>> 2af60098d8f0ccae20aa062de808d382f74549b1
      <section className={styles.loginSection}>
        <article className={styles.loginArticle}>
          <h3>Login to Web App</h3>
          <form className={styles.loginForm}>
            <div>
              <SuperInputText
                className={styles.username}
                type={'text'}
                value={email}
                // onChange={onch}
                onChangeText={setEmail}
                placeholder={'Email'}
                // error={error}
              />
            </div>
            <div>
              <SuperInputText
                className={styles.password}
                type={'password'}
                value={password}
                onChangeText={setPassword}
                placeholder={'Password'}
              />
            </div>
            <div className={styles.checkboxRemember}>
              {/*<input className={styles.checkbox} type="checkbox" name="rememberMe" checked={setRememberMe}/>*/}

              <SuperCheckbox
                className={styles.checkbox}
                name="rememberMe"
                onChangeChecked={setRememberMe}
              />
              <label className={styles.remember} htmlFor="rememberMe">Remember me on this computer</label>
            </div>
            <div>
              <button className={styles.submit} onClick={onSubmit}>Login</button>
            </div>
          </form>
        </article>
        <div className={styles.reset}>
          Forgot your password? <a href="#">Click here</a> to reset it.
        </div>
        {/*{error && <div className={sc.error}>Error: {error}</div>}*/}
        {error && <div className={styles.error}>{error}</div>}
      </section>
    </div>
  );
>>>>>>> main
}
