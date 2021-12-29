import React, {useState} from "react";
import SuperInputText from "../../SuperInputText/SuperInputText";
import commonStyles from "../../../styles/commonStyles.module.css";
import SuperButton from "../../SuperButton/SuperButton";
import styles from './AddPackModal.module.css';
import {Modal} from "../Modal/Modal";

type PropsType = {
    callback: (name: string, answer?: string) => void
    setShow: (show: boolean) => void
    type?: 'card'
}

export const AddPackModal = ({callback, setShow, type}: PropsType) => {
    const [inputOneValue, setInputOneValue] = useState('');
    const [inputTwoValue, setInputTwoValue] = useState('');
    const [error, setError] = useState('');

    const onClickApplyPack = () => {
        if (inputOneValue.trim() !== '') {
            callback(inputOneValue);
            setShow(false);
        } else {
            setError('Incorrect pack name, please try again.')
        }
    }

    const onClickApplyCard = () => {
        if (inputOneValue.trim() !== '' && inputTwoValue !== '') {
            callback(inputOneValue, inputTwoValue);
            setShow(false);
        } else {
            setError('Incorrect name, please try again.')
        }
    }

    if (type === 'card') {
        return (
            <Modal title={'Add card'} setShow={setShow}>
                <div>
                    <SuperInputText className={commonStyles.input}
                                    placeholder={"Question"}
                                    onChangeText={setInputOneValue}
                                    autoFocus
                    />
                    <SuperInputText className={commonStyles.input}
                                    placeholder={"Answer"}
                                    onChangeText={setInputTwoValue}
                    />
                    {error && <div className={`${commonStyles.error} ${styles.errorCards}`}>{error}</div>}
                    <div className={styles.modalBtnWrapper}>
                        <SuperButton onClick={onClickApplyCard}
                                     className={commonStyles.button}>
                            Apply
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

    return (
        <Modal title={'Add pack'} setShow={setShow}>
            <div>
                <SuperInputText className={commonStyles.input}
                                placeholder={"New pack name"}
                                onChangeText={setInputOneValue}
                                autoFocus/>
                {error && <div className={`${commonStyles.error} ${styles.error}`}>{error}</div>}
                <div className={styles.modalBtnWrapper}>
                    <SuperButton onClick={onClickApplyPack}
                                 className={commonStyles.button}>
                        Apply
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