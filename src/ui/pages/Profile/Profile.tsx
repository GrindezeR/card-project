import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {setProfileError, updateProfile} from "../../../bll/profileReducer";
import {Navigate} from "react-router-dom";
import styles from "./Profile.module.css";
import SuperInputText from "../../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../../common/components/SuperButton/SuperButton";

export const Profile = () => {
  const dispatch = useDispatch();
  const profileName = useSelector<AppStoreType, string>(state => state.profilePage.name);
  const profileAvatar = useSelector<AppStoreType, string | undefined>(state => state.profilePage.avatar);
  const profileEmail = useSelector<AppStoreType, string>(state => state.profilePage.email);
  const error = useSelector<AppStoreType, string | undefined>(state => state.profilePage.error);
  const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.loginPage.isLoggedIn);

  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')

  const onSubmit = () => {
    if (name) {
      dispatch(updateProfile({name}));
      setName('');
    } else if (avatar) {
      dispatch(updateProfile({avatar}));
      setAvatar('');
    } else {
      dispatch(setProfileError('Name and avatar required!'));
    }
  }

  console.log(isLoggedIn)

  // if (!isLoggedIn) {
  //   return <Navigate to={'/login'}/>
  // }

  return (
    // <div className={s.wrapper}>
    //   <img className={s.avatar} src={profileAvatar} alt="avatar"/>
    //   <div>Name: {profileName}</div>
    //   <div>Email: {profileEmail}</div>
    //   <SuperInputText className={s.inputs} placeholder={'Input new name'} value={name} onChangeText={setName}/>
    //   <SuperInputText className={s.inputs} placeholder={'Input avatar link'} value={avatar}
    //                   onChangeText={setAvatar}/>
    //   <SuperButton onClick={onSubmit}>
    //     Submit
    //   </SuperButton>
    //   {error && <div className={sc.error}>{error}</div>}
    // </div>

  <div className={styles.profile}>
    <section className={styles.profileSection}>
      <article className={styles.profileArticle}>
        <h3>Your profile</h3>
        <div className={styles.profileForm}>
          <div className={styles.avatar}>
            <img src={profileAvatar} alt="avatar"/>
          </div>
          <div className={styles.info}>Your name: {profileName}</div>
          <div className={styles.info}>Your email: {profileEmail}</div>
          <div>
            <SuperInputText
              type={'text'}
              className={styles.inputs}
              placeholder={'Input new name'}
              value={name}
              onChangeText={setName}
            />
          </div>
          <div>
            <SuperInputText
              type={'text'}
              className={styles.inputs}
              placeholder={'Input avatar link'}
              value={avatar}
              onChangeText={setAvatar}
            />
          </div>
          <div>
            <SuperButton
              className={styles.submit}
              onClick={onSubmit}
              // disabled={isDisabled}
            >Change</SuperButton>
          </div>
        </div>
      </article>
      {error && <div className={styles.error}>{error}</div>}
    </section>
  </div>

);
}