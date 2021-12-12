import React, {useState} from "react";
import SuperInputText from "../../../common/components/SuperInputText/SuperInputText";
import SuperCheckbox from "../../../common/components/SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../common/components/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../../bll/loginReducer";
import {AppStoreType} from "../../../bll/store";
import {useNavigate} from "react-router-dom";
import styles from './Login.module.css'
import {setLoadingStatusAC} from "../../../bll/appReducer";

export const Login = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch()

  const onSubmit = (data: any) => {
    dispatch(loginTC({email: inputEmail, password: inputPassword, rememberMe: rememberMe}))
    console.log(data)
    setInputEmail('')
    setInputPassword('')
  }

  const isLoggedIn = useSelector((state: AppStoreType) => state.loginPage.isLoggedIn)
  const navigate = useNavigate()
  console.log(isLoggedIn)

  // if(isLoggedIn) navigate('/')

  return (
    <div>
      <form>
        <SuperInputText name={'email'} type={'text'} value={inputEmail} onChangeText={setInputEmail}
                        placeholder={'Email'}/>
        <SuperInputText name={'password'} type={'password'} value={inputPassword} onChangeText={setInputPassword}
                        placeholder={'Password'}/>
        <SuperCheckbox name={'rememberMe'} checked={rememberMe} onChangeChecked={setRememberMe}/>
        <SuperButton onClick={onSubmit}>Sign in</SuperButton>
      </form>

      <div>
        <button onClick={() => dispatch(setLoadingStatusAC('loading'))}>Loading</button>
        <button onClick={() => dispatch(setLoadingStatusAC('unloading'))}>Unloading</button>
      </div>


      <section className={styles.loginSection}>
        <article className={styles.loginArticle}>
          <h3>Login to Web App</h3>
          <form className={styles.loginForm}>
            <div>
              <input className={styles.username} type="text" name="email" placeholder="Email"/>
            </div>
            <div>
              <input className={styles.password} type="password" name="password" placeholder="Password"/>
            </div>
            <div className={styles.checkboxRemember}>
              <input className={styles.checkbox} type="checkbox" name="rememberMe"/>
              <label className={styles.remember} htmlFor="rememberMe">Remember me on this computer</label>
            </div>
            <div>
              <button className={styles.submit}>Login</button>
            </div>
          </form>
        </article>
        <div className={styles.reset}>
          Forgot your password? <a href="#">Click here</a> to reset it.
        </div>
      </section>
    </div>
  );
}
