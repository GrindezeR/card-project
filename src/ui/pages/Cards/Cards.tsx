import React, {useEffect, useState} from "react";
import styles from "./Cards.module.css";
import commonStyles from "../../../common/styles/commonStyles.module.css";
import {Link, Navigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {addCard, deleteCard, getCards, InitialCardsStateType, setCardsData, updateCard} from "../../../bll/cardReducer";
import {Paginator} from "../../../common/components/Paginator/Paginator";
import SuperButton from "../../../common/components/SuperButton/SuperButton";
import {Search} from "../../../common/components/Search/Search";
import {AddPackModal} from "../../../common/components/Modals/AddPackModal/AddPackModal";
import {Card} from "./Card/Card";


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

    const [id, setId] = useState('');
    const updateCardModalCallback = (question: string, answer?: string) => {
        dispatch(updateCard({
            card: {
                _id: id,
                question,
                answer: answer ?? 'no answer'
            }
        }));
    }
    const onClickUpdatePack = (cardId: string) => {
        setId(cardId);
        setShowUpdateModal(true);
    }

    const cardList = cards.map(c => {
        const onClickDeleteCard = (cardId: string) => dispatch(deleteCard({id: cardId}));

        return <Card key={c._id}
                     id={c._id}
                     updateCardHandler={onClickUpdatePack}
                     deleteCardHandler={onClickDeleteCard}
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
            {showAddModal && <AddPackModal type={"card"}
                                           callback={addCardModalCallback}
                                           setShow={setShowAddModal}/>}
            {showUpdateModal && <AddPackModal type={"card"}
                                              callback={updateCardModalCallback}
                                              setShow={setShowUpdateModal}/>}
            <section className={`${commonStyles.section} ${styles.section}`}>
                <article className={`${commonStyles.article} ${styles.article}`}>
                    <Paginator totalCount={cardsTotalCount}
                               pageSize={pageCount}
                               currentPage={page}
                               onChangedPage={onChangedPage}/>
                    {error && <div className={`${commonStyles.error} ${styles.error}`}>{error}</div>}
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