import React, {ChangeEvent, useState} from "react";
import {useParams} from "react-router-dom";
import commonStyles from "../../../common/styles/commonStyles.module.css";
import styles from "./NewPass.module.css"
import SuperInputText from "../../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../../common/components/SuperButton/SuperButton";

export const NewPass = () => {

    const {token} = useParams()

    const [newPassword, setNewPassword] = useState<string>("")

    const onChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.currentTarget.value)
    }

    return (
        <div className={commonStyles.wrapper}>
            <section className={commonStyles.section}>
                <article className={commonStyles.article}>
                    <h3>Password Recovery</h3>
                    <div className={commonStyles.form}>
                        <div>
                            <SuperInputText
                                className={commonStyles.input}
                                name={'email'}
                                type={'text'}
                                value={newPassword}
                                onChange={onChangeNewPassword}
                                placeholder={'Email'}
                                // error={recoverPassState.error}
                            />
                        </div>
                        <div>
                            <SuperButton className={[commonStyles.button, styles.button].join(' ')}
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