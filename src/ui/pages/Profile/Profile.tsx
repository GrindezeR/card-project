import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {setProfileError, updateProfile} from "../../../bll/profileReducer";
import commonStyles from "../../../common/styles/commonStyles.module.css";
import styles from "./Profile.module.css";
import SuperInputText from "../../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../../common/components/SuperButton/SuperButton";
import {Link, Navigate} from "react-router-dom";
import {logOut} from "../../../bll/loginReducer";
import noAvatar from '../../../common/images/noAvatar.png';

export const Profile = () => {
    const dispatch = useDispatch();
    const profileName = useSelector<AppStoreType, string>(state => state.profilePage.name);
    const profileAvatar = useSelector<AppStoreType, string>(state => state.profilePage.avatar);
    const profileEmail = useSelector<AppStoreType, string>(state => state.profilePage.email);
    const error = useSelector<AppStoreType, string>(state => state.profilePage.error);
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.loginPage.isLoggedIn);

    const [name, setName] = useState(profileName);
    const [avatar, setAvatar] = useState('')
    const [editName, setEditName] = useState(false);

    const onDoubleClickNameHandler = () => setEditName(true);
    const onBlurNameHandler = () => {
        setEditName(false);
        onSubmitName();
    }
    const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value.trim());
    const changeAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setAvatar(e.currentTarget.value.trim());
        dispatch(setProfileError(''));
    }
    const selectAllHandler = (e: ChangeEvent<HTMLInputElement>) => e.currentTarget.select();
    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setEditName(false);
            onSubmitName();
        }
    }

    const onSubmitName = () => {
        if (name && (name !== profileName)) {
            dispatch(updateProfile({name}));
        }
        if (name.trim() === '') {
            setName(profileName);
        }
    }

    const onSubmitAvatar = () => {
        if (avatar && (/\.(gif|jpg|jpeg|webp|png)$/i).test(avatar)) {
            dispatch(updateProfile({avatar}));
            setAvatar('');
        } else {
            dispatch(setProfileError('Avatar link incorrect!'));
        }
    }

    const onLogout = () => dispatch(logOut());

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
                            <img src={profileAvatar ? profileAvatar : noAvatar}
                                 alt="avatar"/>
                        </div>
                        <div className={styles.info}>
                            {
                                editName ?
                                    <input value={name} onChange={changeNameHandler} type="text"
                                           onBlur={onBlurNameHandler}
                                           onFocus={selectAllHandler}
                                           onKeyPress={onEnterHandler}
                                           autoFocus
                                    />
                                    :
                                    <span onDoubleClick={onDoubleClickNameHandler}>
                                    Name: {profileName}
                                </span>
                            }
                        </div>
                        <div className={styles.info}>Email: {profileEmail}</div>
                        <div>
                            <SuperInputText
                                onEnter={onSubmitAvatar}
                                type={'text'}
                                className={commonStyles.input}
                                spanClassName={`${commonStyles.error} ${styles.error}`}
                                placeholder={'Input avatar link'}
                                value={avatar}
                                onChange={changeAvatarHandler}
                                error={error}
                            />
                        </div>
                        <div className={styles.btnWrapper}>
                            <SuperButton
                                className={commonStyles.button}
                                onClick={onSubmitAvatar}>
                                Change avatar
                            </SuperButton>
                            <Link to={'/packs'}>
                                <SuperButton className={commonStyles.button}>
                                    Packs
                                </SuperButton>
                            </Link>
                            <SuperButton
                                className={commonStyles.button}
                                onClick={onLogout}>LogOut
                            </SuperButton>
                        </div>
                    </div>
                </article>
            </section>
        </div>

    );
}