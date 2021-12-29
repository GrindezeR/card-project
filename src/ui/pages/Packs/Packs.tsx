import React, {ChangeEvent, useEffect, useState} from "react";
import commonStyles from "../../../common/styles/commonStyles.module.css";
import styles from "./Packs.module.css"
import {
    addPack,
    deletePack,
    getPacks,
    InitialStatePackPageType,
    setPacksData,
    setPacksError,
    setPacksSortData,
    updatePack
} from "../../../bll/packReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";
import {Paginator} from "../../../common/components/Paginator/Paginator";
import SuperButton from "../../../common/components/SuperButton/SuperButton";
import {Link, Navigate} from "react-router-dom";
import {Search} from "../../../common/components/Search/Search";
import {Sort} from "../../../common/components/Sort/Sort";
import {AddPackModal} from "../../../common/components/Modals/AddPackModal/AddPackModal";
import {Pack} from "./Pack/Pack";

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
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPacksError(''));
        dispatch(getPacks());
    }, [dispatch])

    const onChangedPage = (currentPage: number) => {
        dispatch(setPacksError(''));
        dispatch(setPacksData({page: currentPage}));
        dispatch(getPacks());
    }

    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const addPackHandler = () => setShowAddModal(true);
    const addPackModalCallback = (name: string) => dispatch(addPack(name));

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

    const [id, setId] = useState('');
    const updatePackModalCallback = (name: string) => {
        dispatch(updatePack(id, name));
        setShowUpdateModal(false);
    }

    const onClickUpdatePack = (packId: string) => {
        setId(packId);
        setShowUpdateModal(true);
    }

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    const packsList = cardPacks.map(p => {
        const deletePack = () => deletePackHandler(p._id);

        return (
            <Pack key={p._id}
                  id={p._id}
                  name={p.name}
                  cardsCount={p.cardsCount}
                  updated={p.updated}
                  authorId={p.user_id}
                  deletePack={deletePack}
                  updatePackHandler={onClickUpdatePack}/>
        );
    })


    return (
        <div className={commonStyles.wrapper}>
            {showAddModal && <AddPackModal callback={addPackModalCallback} setShow={setShowAddModal}/>}
            {showUpdateModal && <AddPackModal callback={updatePackModalCallback} setShow={setShowUpdateModal}/>}
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


