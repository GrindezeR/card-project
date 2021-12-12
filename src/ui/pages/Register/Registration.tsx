import React, {useState} from "react";
import SuperInputText from "../../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../../common/components/SuperButton/SuperButton";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {registerTC} from "../../../bll/registerReducer";
import styles from "./Register.module.css";
import {AppStoreType} from "../../../bll/store";

export const Registration = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPasswordControl, setInputPasswordControl] = useState('');
  const errorRegister = useSelector<AppStoreType, string | null>((state) => state.registerPage.errorRegister)
  const dispatch = useDispatch()

  const onSubmit = () => {
    // if (inputPassword && inputPassword === inputPasswordControl) {
    //   const data = {email: inputEmail, password: inputPassword,}
    //   dispatch(registerTC(data))
    //   alert(inputEmail)
    //   console.log(data)
    // } else {
    //   //some error
    // }
      const data = {email: inputEmail, password: inputPassword,}
    dispatch(registerTC(data))
    alert(inputEmail)
    console.log(data)

  }

  return (
    <div className={styles.registration}>
      <section className={styles.registerSection}>
        <article className={styles.registerArticle}>
          <h3>Registration</h3>
          <div className={styles.registerForm}>
            <div>
              <SuperInputText
                className={styles.email}
                name={'email'}
                type={'text'}
                value={inputEmail}
                onChangeText={setInputEmail}
                placeholder={'Email'}
              />
            </div>
            <div>
              <SuperInputText
                className={styles.password}
                name={'password'}
                type={'password'}
                value={inputPassword}
                onChangeText={setInputPassword}
                placeholder={'Password'}
              />
            </div>
            <div>
              <SuperInputText
                className={styles.password}
                name={'passwordControl'}
                type={'password'}
                value={inputPasswordControl}
                onChangeText={setInputPasswordControl}
                placeholder={'Password'}
              />
            </div>
            <div>
              <SuperButton className={styles.submit} onClick={onSubmit}>Sign in</SuperButton>
            </div>
          </div>
        </article>
        {errorRegister && <div className={'error'}>Error: {errorRegister}</div>}

      </section>
    </div>
  );
}