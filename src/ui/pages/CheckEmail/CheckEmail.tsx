import React, {useEffect} from "react";
import styles from "./CheckMail.module.css";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {useNavigate} from "react-router-dom";


export const CheckEmail = () => {

    const navigate = useNavigate();
    const mailSent = useSelector<AppStoreType, string>(state => state.recoverPassPage.mailSent);

    useEffect(() => {
        if (mailSent) {
            navigate("/login");
        }
    }, [mailSent, navigate]);


    return (
        <div>
            <section className={styles.checkMailSection}>
                <article className={styles.checkMailArticle}>
                    <h3>Check your email</h3>
                    <div className={styles.checkMailForm}>
                        Password recovery instructions have been {mailSent} to your email
                    </div>
                </article>
            </section>
        </div>
    );
}