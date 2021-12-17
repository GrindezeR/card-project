import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {setProfileError, updateProfile} from "../../../bll/profileReducer";
import commonStyles from "../../../common/styles/commonStyles.module.css";
import styles from "./Profile.module.css";
import SuperInputText from "../../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../../common/components/SuperButton/SuperButton";
import {Navigate} from "react-router-dom";
import {logOut} from "../../../bll/loginReducer";

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
        if (name && avatar) {
            dispatch(updateProfile({name, avatar}));
            setName('');
            setAvatar('');
        } else if (name) {
            dispatch(updateProfile({name}));
            setName('');
        } else if (avatar) {
            dispatch(updateProfile({avatar}));
            setAvatar('');
        } else {
            dispatch(setProfileError('Name and avatar required!'));
        }

    }

    const onLogout = () => {
        dispatch(logOut());
    }

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className={commonStyles.wrapper}>
            <section className={commonStyles.section}>
                <article className={commonStyles.article}>
                    <h3>Your profile</h3>
                    <div className={commonStyles.form}>
                        <div className={styles.avatar}>
                            <img src={profileAvatar} alt="avatar"/>
                        </div>
                        <div className={styles.info}>Name: {profileName}</div>
                        <div className={styles.info}>Email: {profileEmail}</div>
                        <div>
                            <SuperInputText
                                onEnter={onSubmit}
                                type={'text'}
                                className={commonStyles.input}
                                placeholder={'Input new name'}
                                value={name}
                                onChangeText={setName}
                            />
                        </div>
                        <div>
                            <SuperInputText
                                onEnter={onSubmit}
                                type={'text'}
                                className={commonStyles.input}
                                spanClassName={`${commonStyles.error} ${styles.error}`}
                                placeholder={'Input avatar link'}
                                value={avatar}
                                onChangeText={setAvatar}
                                error={error}
                            />
                        </div>
                        <div className={styles.btnWrapper}>
                            <SuperButton
                                className={commonStyles.button}
                                onClick={onSubmit}>Change</SuperButton>
                            <SuperButton
                                className={commonStyles.button}
                                onClick={onLogout}>LogOut</SuperButton>
                        </div>
                    </div>
                </article>
            </section>
        </div>

    );
}