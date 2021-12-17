import React from "react";
import commonStyles from "../../../common/styles/commonStyles.module.css";


export const CheckEmail = () => {

    return (
        <div className={commonStyles.wrapper}>
            <section className={commonStyles.section}>
                <article className={commonStyles.article}>
                    <h3>Check your email</h3>
                    <div className={commonStyles.form}>
                        Check mail ????
                    </div>
                </article>
            </section>
        </div>
    );
}