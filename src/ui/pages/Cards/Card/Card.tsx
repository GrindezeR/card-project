import React from "react";
import SuperButton from "../../../../common/components/SuperButton/SuperButton";
import commonStyles from "../../../../common/styles/commonStyles.module.css";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../../bll/store";

type PropsType = {
    id: string
    question: string
    answer: string
    authorId: string
    grade: number
    updated: Date | null
    deleteCardHandler: (id: string) => void
    updateCardHandler: (id: string) => void
}

export const Card = ({
                         id,
                         question,
                         answer,
                         authorId,
                         grade,
                         updated,
                         deleteCardHandler,
                         updateCardHandler
                     }: PropsType) => {
    const isLoading = useSelector<AppStoreType, boolean>(state => state.app.loading);
    const userId = useSelector<AppStoreType, string>(state => state.profilePage._id);

    return (
        <tr>
            <td>{question}</td>
            <td>{answer}</td>
            <td>{grade}</td>
            <td>{updated}</td>
            {userId === authorId &&
                <td>
                    <div>
                        <SuperButton
                            disabled={isLoading}
                            className={`${commonStyles.button} ${isLoading && commonStyles.disabled}`}
                            onClick={() => deleteCardHandler(id)}>
                            Delete
                        </SuperButton>
                        <SuperButton
                            disabled={isLoading}
                            className={`${commonStyles.button} ${isLoading && commonStyles.disabled}`}
                            onClick={() => updateCardHandler(id)}>
                            Update
                        </SuperButton>
                    </div>
                </td>
            }
        </tr>
    );
}