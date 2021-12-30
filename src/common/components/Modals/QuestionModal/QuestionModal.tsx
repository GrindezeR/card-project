import React from "react";
import {Modal} from "../Modal/Modal";
import styles from './QuestionModal.module.css';
import SuperButton from "../../SuperButton/SuperButton";
import commonStyles from "../../../styles/commonStyles.module.css";

type PropsType = {
    setShow: (show: boolean) => void
    callback: () => void
}

export const QuestionModal = ({setShow, callback}: PropsType) => {
    const onClickApplyPack = () => {
        callback();
        setShow(false);
    }

    return (
        <Modal left={42} top={40} title={'Are you seriously?'} setShow={setShow}>
            <div>
                <div className={styles.modalBtnWrapper}>
                    <SuperButton onClick={onClickApplyPack}
                                 className={commonStyles.button}>
                        Yes
                    </SuperButton>
                    <SuperButton onClick={() => setShow(false)}
                                 className={commonStyles.button}>
                        Cancel
                    </SuperButton>
                </div>
            </div>
        </Modal>
    );
}