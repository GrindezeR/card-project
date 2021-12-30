import React, {useState} from "react";
import SuperInputText from "../../SuperInputText/SuperInputText";
import commonStyles from "../../../styles/commonStyles.module.css";
import SuperButton from "../../SuperButton/SuperButton";
import styles from './ItemModal.module.css';
import {Modal} from "../Modal/Modal";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../../bll/store";
import {CardType} from "../../../../dal/api/api";

type PropsType = {
    callback: (name: string, answer?: string) => void
    setShow: (show: boolean) => void
    type?: 'update pack' | 'add pack' | 'update card' | 'add card'
    cardId?: string
}

export const ItemModal = ({callback, setShow, type, cardId}: PropsType) => {
    const cards = useSelector<AppStoreType, CardType[]>(state => state.cardPage.cards);
    const card = cards.find(c => c._id === cardId);

    const [inputOneValue, setInputOneValue] = useState(card ? card.answer : '');
    const [inputTwoValue, setInputTwoValue] = useState(card ? card.question : '');
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
        if (inputOneValue.trim() !== '' && inputTwoValue.trim() !== '') {
            callback(inputOneValue, inputTwoValue);
            setShow(false);
        } else {
            setError('Incorrect name, both fields must be filled, please try again.')
        }
    }

    if (type === 'add card' || type === 'update card') {
        return (
            <Modal top={35} left={40}
                   title={type === "update card" ? 'Update card' : 'Add card'}
                   setShow={setShow}>
                <div>
                    <SuperInputText className={commonStyles.input}
                                    placeholder={"Question"}
                                    value={inputOneValue}
                                    onChangeText={setInputOneValue}
                                    onEnter={onClickApplyCard}
                                    autoFocus
                    />
                    <SuperInputText className={commonStyles.input}
                                    placeholder={"Answer"}
                                    value={inputTwoValue}
                                    onEnter={onClickApplyCard}
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
        <Modal top={35} left={40}
               title={type === "update pack" ? 'Update pack' : 'Add pack'}
               setShow={setShow}>
            <div>
                <SuperInputText className={commonStyles.input}
                                onEnter={onClickApplyPack}
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