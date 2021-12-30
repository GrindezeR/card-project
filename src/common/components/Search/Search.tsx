import React, {ChangeEvent, useState} from "react";
import styles from './Search.module.css';
import SuperInputText from "../SuperInputText/SuperInputText";
import commonStyles from "../../styles/commonStyles.module.css";
import SuperButton from "../SuperButton/SuperButton";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../bll/store";

type PropsType = {
    searchFunction: Function
}

export const Search = ({searchFunction}: PropsType) => {
    const isLoading = useSelector<AppStoreType, boolean>(state => state.app.loading);
    const [search, setSearch] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value.trim());
    }
    const searchSubmit = () => {
        searchFunction(search);
    }
    const clearSearch = () => {
        searchFunction();
        setSearch('');
    }

    return (
        <div className={styles.searchWrapper}>
            <SuperInputText
                onEnter={searchSubmit}
                className={`${commonStyles.input} ${styles.search}`}
                type={'text'}
                value={search}
                onChange={onChangeHandler}
                placeholder={'Search'}
            />
            <SuperButton
                disabled={isLoading}
                className={`${commonStyles.button} ${isLoading && commonStyles.disabled}`}
                onClick={searchSubmit}>
                Search
            </SuperButton>
            <SuperButton
                disabled={isLoading}
                className={`${commonStyles.button} ${isLoading && commonStyles.disabled}`}
                onClick={clearSearch}>
                Clear
            </SuperButton>
        </div>
    );
}