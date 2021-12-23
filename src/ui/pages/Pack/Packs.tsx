import React, {ChangeEvent, useEffect} from "react";
import commonStyles from "../../../common/styles/commonStyles.module.css";
import styles from "./Packs.module.css"
import {
    addPack,
    deletePack,
    getPacks,
    InitialStatePackPageType,
    setPacksData,
    setPacksError, setPacksSortData,
    updatePack
} from "../../../bll/packReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {Paginator} from "../../../common/components/Paginator/Paginator";
import SuperButton from "../../../common/components/SuperButton/SuperButton";
import {Link, Navigate} from "react-router-dom";
import {Search} from "../../../common/components/Search/Search";
import {Sort} from "../../../common/components/Sort/Sort";

export const Packs = () => {
    const {
        cardPacks,
        cardPacksTotalCount,
        page,
        pageCount,
        error,
        user_id,
    } = useSelector<AppStoreType, InitialStatePackPageType>(state => state.packPage)
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.loginPage.isLoggedIn);
    const userId = useSelector<AppStoreType, string>(state => state.profilePage._id);
    const isLoading = useSelector<AppStoreType, boolean>(state => state.app.loading);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPacksError(''));
        dispatch(getPacks());
    }, [dispatch])


    const onChangedPage = (currentPage: number) => {
        dispatch(setPacksError(''));
        dispatch(setPacksData({page: currentPage}));
        dispatch(getPacks());
    }
    const addPackHandler = () => {
        dispatch(addPack(`SUPER PACK 🐱 ${random}`));
    }
    const checkMyHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.checked) {
            dispatch(setPacksData({user_id: userId}));
            dispatch(getPacks());
        } else {
            dispatch(setPacksData({user_id: ''}));
            dispatch(getPacks());
        }
    }
    const deletePackHandler = (packId: string) => dispatch(deletePack(packId));
    const updatePackHandler = (packId: string, name: string) => dispatch(updatePack(packId, name));
    const random = Math.random().toFixed(2);
    const searchHandler = (title: string) => dispatch(getPacks(title));
    const sortNameHandlerUp = () => dispatch(setPacksSortData('up', 'name'));
    const sortNameHandlerDown = () => dispatch(setPacksSortData('down', 'name'));
    const sortCardsCountHandlerUp = () => dispatch(setPacksSortData('up', "cardsCount"));
    const sortCardsCountHandlerDown = () => dispatch(setPacksSortData('down', "cardsCount"));
    const sortUpdatedHandlerUp = () => dispatch(setPacksSortData('up', "updated"));
    const sortUpdatedHandlerDown = () => dispatch(setPacksSortData('down', "updated"));
    const onChangePageCountHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setPacksData({pageCount: +e.currentTarget.value}));
        dispatch(getPacks());
    }
    const refreshHandler = () => dispatch(getPacks());
    const buttonStyle = `${commonStyles.button} ${isLoading && commonStyles.disabled}`;

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    const packsList = cardPacks.map(p => {
        const deletePack = () => deletePackHandler(p._id)
        const updatePack = () => updatePackHandler(p._id, `NEW NAME 😁 ${random}`)

        return (
            <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.cardsCount}</td>
                <td>{p.updated}</td>
                <td>
                    <div>
                        <Link to={`/cards/${p._id}`}>
                            <SuperButton
                                disabled={isLoading}
                                className={buttonStyle}>
                                Cards
                            </SuperButton>
                        </Link>
                        {
                            userId === p.user_id &&
                            <>
                                <SuperButton
                                    disabled={isLoading}
                                    className={buttonStyle}
                                    onClick={deletePack}>
                                    Delete
                                </SuperButton>
                                <SuperButton
                                    disabled={isLoading}
                                    className={buttonStyle}
                                    onClick={updatePack}>
                                    Update
                                </SuperButton>
                            </>
                        }
                    </div>
                </td>
            </tr>
        )
    })


    return (
        <div className={commonStyles.wrapper}>
            <section className={`${commonStyles.section} ${styles.section}`}>
                <article className={`${commonStyles.article} ${styles.article}`}>
                    <Paginator totalCount={cardPacksTotalCount}
                               pageSize={pageCount}
                               currentPage={page}
                               onChangedPage={onChangedPage}/>
                    {error && <div className={`${commonStyles.error} ${styles.error}`}>{error}</div>}
                    <Search searchFunction={searchHandler}/>
                    <div className={styles.packNumberWrapper}>
                        <span className={styles.labelSelectPageCounts}>Packs number</span>
                        <select disabled={isLoading} className={`${commonStyles.button} ${styles.select}`}
                                onChange={onChangePageCountHandler}>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                            <option value={40}>40</option>
                            <option value={50}>50</option>
                            <option value={1000}>😻</option>
                        </select>
                        <SuperButton disabled={isLoading}
                                     onClick={refreshHandler}
                                     className={`${buttonStyle} ${styles.refreshBtn}`}>
                            Refresh page
                        </SuperButton>
                    </div>
                    <table className={commonStyles.table} width={'100%'} cellPadding="2">
                        <thead>
                        <tr>
                            <th>
                                <Sort sortHandlerUp={sortNameHandlerUp}
                                      sortHandlerDown={sortNameHandlerDown}
                                      title={'Name'}/>
                            </th>
                            <th>
                                <Sort sortHandlerUp={sortCardsCountHandlerUp}
                                      sortHandlerDown={sortCardsCountHandlerDown}
                                      title={'Cards Count'}/>
                            </th>
                            <th>
                                <Sort sortHandlerUp={sortUpdatedHandlerUp}
                                      sortHandlerDown={sortUpdatedHandlerDown}
                                      title={'Updated'}/>
                            </th>
                            <th>
                                <div className={styles.myPacksButtonsWrapper}>
                                    <label>
                                        <input type={'checkbox'}
                                               disabled={isLoading}
                                               checked={user_id !== ''}
                                               onChange={checkMyHandler}/>
                                        My packs
                                    </label>
                                    <SuperButton
                                        disabled={isLoading}
                                        className={buttonStyle}
                                        onClick={addPackHandler}>
                                        Add pack
                                    </SuperButton>
                                </div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {packsList}
                        </tbody>
                    </table>
                    <Link to={'/login'}>
                        <SuperButton className={`${commonStyles.button} ${styles.backBtn}`}>
                            Back
                        </SuperButton>
                    </Link>
                </article>
            </section>
        </div>
    );
}


