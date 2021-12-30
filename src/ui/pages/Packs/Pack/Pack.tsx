import React from "react";
import {Link} from "react-router-dom";
import SuperButton from "../../../../common/components/SuperButton/SuperButton";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../../bll/store";
import styles from './Pack.module.css';
import commonStyles from "../../../../common/styles/commonStyles.module.css";

type PropsType = {
    id: string
    name: string
    cardsCount: number
    updated: Date
    authorId: string
    deletePack: (packId: string) => void
    updatePackHandler: (packId: string) => void
}

export const Pack = ({id, name, cardsCount, updated, authorId, deletePack, updatePackHandler}: PropsType) => {
    const isLoading = useSelector<AppStoreType, boolean>(state => state.app.loading);
    const userId = useSelector<AppStoreType, string>(state => state.profilePage._id);
    const packUpdateDate = new Date(updated)
    const buttonStyle = `${commonStyles.button} ${isLoading && commonStyles.disabled}`;
    const learnButtonStyle = `${commonStyles.button} ${(isLoading || !cardsCount) && commonStyles.disabled}`;
    return (
        <tr key={id}>
            <td>{name}</td>
            <td>{cardsCount}</td>
            <td>{packUpdateDate.toLocaleString('ru')}</td>
            <td>
                <div className={styles.buttonWrapper}>
                    <Link to={`/cards/${id}`}>
                        <SuperButton
                            disabled={isLoading}
                            className={buttonStyle}>
                            Cards
                        </SuperButton>
                    </Link>
                    <Link to={`/learn/${id}`}>
                        <SuperButton
                            disabled={isLoading || !cardsCount}
                            className={learnButtonStyle}>
                            Learn
                        </SuperButton>
                    </Link>
                    {
                        userId === authorId &&
                        <>
                            <SuperButton
                                disabled={isLoading}
                                className={buttonStyle}
                                onClick={() => deletePack(id)}>
                                Delete
                            </SuperButton>
                            <SuperButton
                                disabled={isLoading}
                                className={buttonStyle}
                                onClick={() => updatePackHandler(id)}>
                                Update
                            </SuperButton>
                        </>
                    }
                </div>
            </td>
        </tr>
    );
}