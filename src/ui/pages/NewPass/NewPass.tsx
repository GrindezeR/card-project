import React, {ChangeEvent, useState} from "react";
import {useParams} from "react-router-dom";
import styles from "../PassRecover/PassRecover.module.css";
import SuperInputText from "../../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../../common/components/SuperButton/SuperButton";

export const NewPass = () => {

    const {token} = useParams()

    const [newPassword, setNewPassword] = useState<string>("")

    const onChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.currentTarget.value)
    }

    return (
        <div>
            <section className={styles.passRecoverSection}>
                <article className={styles.passRecoverArticle}>
                    <h3>Password Recovery</h3>
                    <div className={styles.passRecoverForm}>
                        <div>
                            <SuperInputText
                                className={styles.email}
                                name={'email'}
                                type={'text'}
                                value={newPassword}
                                onChange={onChangeNewPassword}
                                placeholder={'Email'}
                                // error={recoverPassState.error}
                            />
                        </div>
                        <div>
                            <SuperButton className={styles.sendInstructions}
                                         // onClick={onClickSendInstructions}
                                         // disabled={status === "loading"}
                            >
                                Send instructions
                            </SuperButton>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
}