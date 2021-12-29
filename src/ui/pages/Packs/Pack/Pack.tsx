import React from "react";
import {Link} from "react-router-dom";
import SuperButton from "../../../../common/components/SuperButton/SuperButton";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../../bll/store";
import commonStyles from "../../../../common/styles/commonStyles.module.css";

type PropsType = {
    id: string
    name: string
    cardsCount: number
    updated: Date | null
    authorId: string
    deletePack: () => void
    updatePackHandler: (packId: string) => void
}

export const Pack = ({id, name, cardsCount, updated, authorId, deletePack, updatePackHandler}: PropsType) => {
    const isLoading = useSelector<AppStoreType, boolean>(state => state.app.loading);
    const userId = useSelector<AppStoreType, string>(state => state.profilePage._id);

    const buttonStyle = `${commonStyles.button} ${isLoading && commonStyles.disabled}`;

    return (
        <tr key={id}>
            <td>{name}</td>
            <td>{cardsCount}</td>
            <td>{updated}</td>
            <td>
                <div>
                    <Link to={`/cards/${id}`}>
                        <SuperButton
                            disabled={isLoading}
                            className={buttonStyle}>
                            Cards
                        </SuperButton>
                    </Link>
                    {
                        userId === authorId &&
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