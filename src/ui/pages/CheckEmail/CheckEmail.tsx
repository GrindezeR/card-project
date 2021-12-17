import React, {useEffect} from "react";
import styles from "./CheckMail.module.css";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {useNavigate} from "react-router-dom";
import commonStyles from "../../../common/styles/commonStyles.module.css";

export const CheckEmail = () => {

    const navigate = useNavigate();
    const mailSent = useSelector<AppStoreType, string>(state => state.recoverPassPage.mailSent);

    useEffect(() => {
        if (mailSent) {
            navigate("/login");
        }
    }, [mailSent, navigate]);


    return (
        <div className={commonStyles.wrapper}>
            <section className={commonStyles.section}>
                <article className={commonStyles.article}>
                    <h3>Check your email</h3>
                    <div className={commonStyles.form}>
                        Password recovery instructions have been {mailSent} to your email
                    </div>
                </article>
            </section>
        </div>
    );
}