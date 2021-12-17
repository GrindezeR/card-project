import React from "react";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import checkMail from '../../../common/images/checkMail.png';
import s from './CheckMail.module.css';
import commonStyles from "../../../common/styles/commonStyles.module.css";

export const CheckEmail = () => {
    const mailSent = useSelector<AppStoreType, string>(state => state.recoverPassPage.mailSent);

    return (
        <div className={commonStyles.wrapper}>
            <section className={commonStyles.section}>
                <article className={commonStyles.article}>
                    <h3>Check your email</h3>
                    <div className={`${commonStyles.form} ${s.message}`}>
                            <img className={s.image} src={checkMail} alt={'checkMail'}/>
                        Password recovery instructions have been {mailSent} to your email
                    </div>
                </article>
            </section>
        </div>
    );
}