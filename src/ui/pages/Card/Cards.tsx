import React, {useEffect} from "react";
import styles from "./Cards.module.css";
import commonStyles from "../../../common/styles/commonStyles.module.css";
import {Link, Navigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {addCard, deleteCard, getCards, InitialCardsStateType, setCardsData, updateCard} from "../../../bll/cardReducer";
import {Paginator} from "../../../common/components/Paginator/Paginator";
import SuperButton from "../../../common/components/SuperButton/SuperButton";
import {Search} from "../../../common/components/Search/Search";


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

    const random = Math.random().toFixed(2);
    const addCardHandler = () => {
        dispatch(addCard({
            card: {
                question: `How are you ${random}`,
                answer: `I dont know ${random}`,
                cardsPack_id: params.pack_id ?? ''
            }
        }))
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
    const cardList = cards.map(c => {
        const deleteCardHandler = () => onClickDeleteCard(c._id)
        const onClickDeleteCard = (cardId: string) => dispatch(deleteCard({id: cardId}));
        const updateCardHandler = () => onClickUpdatePack(c._id)
        const onClickUpdatePack = (cardId: string) => dispatch(updateCard({
            card: {
                _id: cardId,
                question: `NEW QUESTION ${random}`
            }
        }));

        return (
            <tr key={c._id}>
                <td>{c.question}</td>
                <td>{c.answer}</td>
                <td>{c.grade}</td>
                <td>{c.updated}</td>
                {userId === c.user_id &&
                    <td>
                        <div>
                            <SuperButton
                                disabled={isLoading}
                                className={`${commonStyles.button} ${isLoading && commonStyles.disabled}`}
                                onClick={deleteCardHandler}>
                                Delete
                            </SuperButton>
                            <SuperButton
                                disabled={isLoading}
                                className={`${commonStyles.button} ${isLoading && commonStyles.disabled}`}
                                onClick={updateCardHandler}>
                                Update
                            </SuperButton>

                        </div>
                    </td>
                }
            </tr>
        )
    })

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className={commonStyles.wrapper}>
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