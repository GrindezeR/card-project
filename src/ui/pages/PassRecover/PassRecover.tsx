import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import commonStyles from "../../../common/styles/commonStyles.module.css";
import styles from "./PassRecover.module.css";
import SuperInputText from "../../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../../common/components/SuperButton/SuperButton";
import {errorResponse, PassRecoverInitialStateType, recoveryPass} from "../../../bll/passRecoverReducer";
import {AppStoreType} from "../../../bll/store";
import {LoadingLine} from "../../../common/components/LoadingLine/LoadingLine";
import {useNavigate} from "react-router-dom";

export const PassRecover = () => {

    const navigate = useNavigate();

    const status = useSelector<AppStoreType, boolean>(state => state.app.loading);
    const recoverPassState = useSelector<AppStoreType, PassRecoverInitialStateType>(state => state.recoverPassPage);
    const dispatch = useDispatch();

    const [recoverPassMail, setRecoverPassMail] = useState<string>("");

    const onChangeEnterMail = (event: ChangeEvent<HTMLInputElement>) => {
        setRecoverPassMail(event.currentTarget.value);
        dispatch(errorResponse(""));
    }

    const onClickSendInstructions = () => {
        dispatch(recoveryPass(recoverPassMail));
    }

    useEffect(() => {
        if (recoverPassState.mailSent) {
            navigate("/check-email");
        }
    }, [recoverPassState.mailSent, navigate]);

  return (
    <div className={commonStyles.wrapper}>
      {status && <LoadingLine/>}
      <section className={commonStyles.section}>
        <article className={commonStyles.article}>
          <h3>Password Recovery</h3>
          <div className={commonStyles.form}>
            <div>
              <SuperInputText
                className={commonStyles.input}
                name={'email'}
                type={'text'}
                value={recoverPassMail}
                onChange={onChangeEnterMail}
                placeholder={'Email'}
                error={recoverPassState.error}
              />
            </div>
            <div>
              <SuperButton
                className={`${commonStyles.button} ${styles.button}`}
                onClick={onClickSendInstructions}
                disabled={status}
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