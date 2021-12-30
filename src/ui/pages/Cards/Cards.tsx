import React, {useEffect, useState} from "react";
import styles from "./Cards.module.css";
import commonStyles from "../../../common/styles/commonStyles.module.css";
import {Link, Navigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {
    addCard,
    deleteCard,
    getCards,
    InitialCardsStateType,
    setCardsData,
    setCardsError,
    updateCard
} from "../../../bll/cardReducer";
import {Paginator} from "../../../common/components/Paginator/Paginator";
import SuperButton from "../../../common/components/SuperButton/SuperButton";
import {Search} from "../../../common/components/Search/Search";
import {ItemModal} from "../../../common/components/Modals/ItemModal/ItemModal";
import {Card} from "./Card/Card";
import {QuestionModal} from "../../../common/components/Modals/QuestionModal/QuestionModal";
import {ErrorModal} from "../../../common/components/Modals/ErrorModal/ErrorModal";


export const Cards = () => {
    const dispatch = useDispatch();
    const {
        cards,
        cardsTotalCount,
        page,
        pageCount,
        packUserId,
        error,
    } = useSelector<AppStoreType, InitialCardsStateType>(state => state.cardPage);
    const userId = useSelector<AppStoreType, string>(state => state.profilePage._id);
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.loginPage.isLoggedIn);
    const isLoading = useSelector<AppStoreType, boolean>(state => state.app.loading);
    const params = useParams<'pack_id'>();

    useEffect(() => {
        dispatch(getCards({cardsPack_id: params.pack_id as string}));
    }, [dispatch, params.pack_id])

    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showQuestionModal, setShowQuestionModal] = useState(false);

    const addCardHandler = () => {
        setShowAddModal(true);
    }
    const addCardModalCallback = (question: string, answer?: string) => {
        dispatch(addCard({
            card: {
                question,
                answer: answer ?? 'no answer',
                cardsPack_id: params.pack_id ?? ''
            }
        }))
        setShowAddModal(false);
    }
    const onChangedPage = (currentPage: number) => {
        dispatch(setCardsData({page: currentPage}));
        dispatch(getCards({cardsPack_id: params.pack_id as string}));
    }
    const searchHandler = (title: string) => {
        dispatch(getCards({
            cardsPack_id: params.pack_id as string,
            cardQuestion: title
        }))
    }

    const [cardId, setCardId] = useState('');
    const questionCardModalCallback = () => {
        dispatch(deleteCard({id: cardId}));
        setShowQuestionModal(false);
    }
    const onClickDeletePack = (packId: string) => {
        setCardId(packId);
        setShowQuestionModal(true);
    }
    const updateCardModalCallback = (question: string, answer?: string) => {
        dispatch(updateCard({
            card: {
                _id: cardId,
                question,
                answer,
            }
        }));
    }
    const onClickUpdatePack = (cardId: string) => {
        setCardId(cardId);
        setShowUpdateModal(true);
    }

    const cardList = cards.map(c => {
        return <Card key={c._id}
                     id={c._id}
                     updateCardHandler={onClickUpdatePack}
                     deleteCardHandler={onClickDeletePack}
                     updated={c.updated}
                     authorId={c.user_id}
                     question={c.question}
                     answer={c.answer}
                     grade={c.grade}
        />
    })

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className={commonStyles.wrapper}>
            {showAddModal && <ItemModal type={"add card"}
                                        callback={addCardModalCallback}
                                        setShow={setShowAddModal}/>}
            {showUpdateModal && <ItemModal type={"update card"}
                                           cardId={cardId}
                                           callback={updateCardModalCallback}
                                           setShow={setShowUpdateModal}/>}
            {showQuestionModal && <QuestionModal callback={questionCardModalCallback} setShow={setShowQuestionModal}/>}
            <section className={`${commonStyles.section} ${styles.section}`}>
                <article className={`${commonStyles.article} ${styles.article}`}>
                    <Paginator totalCount={cardsTotalCount}
                               pageSize={pageCount}
                               currentPage={page}
                               onChangedPage={onChangedPage}/>
                    {error && <ErrorModal text={error}/>}
                    <Search searchFunction={searchHandler}/>
                    <table className={commonStyles.table} width={'100%'} cellPadding="2">
                        <thead>
                        <tr>
                            <th>Question</th>
                            <th>Answer</th>
                            <th>Grade</th>
                            <th>Updated</th>
                            {userId === packUserId &&
                                <th>
                                    <SuperButton
                                        className={`${commonStyles.button} ${isLoading && commonStyles.disabled}`}
                                        onClick={addCardHandler}
                                        disabled={userId !== packUserId}>
                                        Add card
                                    </SuperButton>
                                </th>
                            }
                        </tr>
                        </thead>
                        <tbody>{cardList}</tbody>
                    </table>
                    <Link to={'/packs'}>
                        <SuperButton className={`${commonStyles.button} ${styles.backBtn}`}>
                            Back
                        </SuperButton>
                    </Link>
                </article>
            </section>
        </div>
    );
}