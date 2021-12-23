import React from "react";
import s from './Paginator.module.css';
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";

type PropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onChangedPage: (n: number) => void
}
export const Paginator = ({totalCount, pageSize, currentPage, onChangedPage}: PropsType) => {
    const isLoading = useSelector<AppStoreType, boolean>(state => state.app.loading);
    const pageCounts = Math.ceil(totalCount / pageSize);
    const pages = [];
    //start
    let pageLimit = 10;
    let startPage = currentPage - pageLimit / 2;
    let endPage = currentPage + pageLimit / 2;

    if (startPage < 1) {
        startPage = 1;
        endPage = pageLimit;
    }
    if (endPage > pageCounts) {
        endPage = pageCounts;
        startPage = pageCounts - pageLimit;
    }
    for (let i = startPage; i <= endPage; i++) {
        if (i > 0) {
            pages.push(i);
        }
    }
    //end
    if (!pages.length) {
        pages.push(1)
    }

    const pageList = pages.map(n => {
        const onClickGetByPage = () => !isLoading && onChangedPage(n);

        return (
            <span key={n}
                  className={currentPage === n ? s.currentPage : s.page}
                  onClick={onClickGetByPage}>
                {n}
            </span>
        );
    })

    //Functions Buttons
    const firstPageHandler = () => onChangedPage(1);
    const lastPageHandler = () => onChangedPage(pageCounts);
    // const nextPageHandler = () => onChangedPage(currentPage + 1);
    // const previousPageHandler = () => onChangedPage(currentPage - 1);

    //COMPLETE JSX
    return (
        <div className={s.pagesWrapper}>
            <span className={s.page} onClick={firstPageHandler}>{'<<'}</span>
            {/*<span className={s.page} onClick={previousPageHandler}>{'<'}</span>*/}
            <div className={s.pageList}>
                {pageList}
            </div>
            {/*<span className={s.page} onClick={nextPageHandler}>{'>'}</span>*/}
            <span className={s.page} onClick={lastPageHandler}>{'>>'}</span>
        </div>
    );
}