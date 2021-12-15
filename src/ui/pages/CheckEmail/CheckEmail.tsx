import React from "react";
import styles from "./CheckMail.module.css";


export const CheckEmail = () => {

    return (
        <div>
            <section className={styles.checkMailSection}>
                <article className={styles.checkMailArticle}>
                    <h3>Check your email</h3>
                    <div className={styles.checkMailForm}>
                        Check mail ????
                    </div>
                </article>
            </section>
        </div>
    );
}