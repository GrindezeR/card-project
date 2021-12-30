import React, {useEffect, useState} from "react";
import {CardType} from "../../../dal/api/api";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {Link, useParams} from "react-router-dom";
import SuperButton from "../../../common/components/SuperButton/SuperButton";
import commonStyles from '../../../common/styles/commonStyles.module.css';
import styles from './LearnCards.module.css';
import {addCardGrade, getCards} from "../../../bll/cardReducer";
import {ErrorModal} from "../../../common/components/Modals/ErrorModal/ErrorModal";

const selectCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
        const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
        return {sum: newSum, id: newSum < rand ? i : acc.id}
    }, {sum: 0, id: -1});
    return cards[res.id + 1];
}

export const LearnCards = () => {
    const gradeButtons: Array<string> = ["Don't know", "Forgot", "Thought", "Know", "Excellent"];
    const dispatch = useDispatch();
    const cards = useSelector<AppStoreType, CardType[]>(state => state.cardPage.cards);
    const error = useSelector<AppStoreType, string>(state => state.cardPage.error);
    const [checked, setChecked] = useState(false);
    const [firstRender, setFirstRender] = useState(true);
    const [card, setCard] = useState<CardType>({
        cardsPack_id: "",
        answer: "",
        question: "",
        grade: 0,
        shots: 0,
        rating: 0,
        type: "",
        user_id: "",
        created: null,
        updated: null,
        _id: "",
    });

    const {pack_id} = useParams();

    useEffect(() => {
        if (firstRender) {
            dispatch(getCards({cardsPack_id: pack_id as string}));
            setFirstRender(false);
        }
        if (cards.length > 0) {
            setCard(selectCard(cards));
        }
    }, [dispatch, pack_id, cards, firstRender]);


    const sendGrade = (grade: number) => {
        dispatch(addCardGrade({grade, card_id: card._id as string}))
    }

    const gradeList = gradeButtons.map((grade) => {
        const onClickGrade = () => {
            sendGrade(gradeButtons.indexOf(grade) + 1);
            setChecked(false);
            setCard(selectCard(cards));
        }

        return (
            <SuperButton key={grade}
                         className={commonStyles.button}
                         onClick={onClickGrade}>
                {grade}
            </SuperButton>
        );
    })

    const onClickCheckHandler = () => setChecked(true);

    return (
        <article className={`${commonStyles.article} ${styles.wrapper}`}>
            <div>{error && <ErrorModal text={error}/>}</div>
            <div className={styles.question}>
                <h2>Question</h2>
                <div>{card.question}</div>
            </div>
            {
                checked &&
                <div className={styles.answerBlockWrapper}>
                    <div className={styles.answer}>
                        <h2>Answer</h2>
                        <div className={styles.answerText}>{card.answer}</div>
                    </div>
                    <div className={styles.answerBtn}>{gradeList}</div>
                </div>
            }

            <div className={styles.btnWrapper}>
                <Link to={'/packs'}>
                    <SuperButton className={`${commonStyles.button} ${styles.backBtn}`}>Back</SuperButton>
                </Link>
                {
                    !checked &&
                    <SuperButton className={commonStyles.button} onClick={onClickCheckHandler}>
                        Check
                    </SuperButton>
                }
            </div>
        </article>
    );
}