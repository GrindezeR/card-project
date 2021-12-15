import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {useNavigate} from "react-router-dom";
import styles from './Login.module.css'
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
}
