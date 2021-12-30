import {
    AddCardRequestType,
    api,
    CardType,
    GetCardsRequestType,
    GetCardsResponseType,
    UpdateCardRequestType
} from "../dal/api/api";
import {AppStoreType, AppThunk} from "./store";
import {setAppLoading} from "./appReducer";
import axios from "axios";

const initialState: InitialCardsStateType = {
    cards: [],
    cardsTotalCount: 0,
    page: 1,
    maxGrade: 0,
    minGrade: 0,
    packUserId: '',
    pageCount: 10,
    error: ''
}

export const cardReducer = (state = initialState, action: CardActionTypes) => {
    switch (action.type) {
        case "CARDS/SET-CARDS-DATA":
            return {...state, ...action.data}
        case "CARDS/SET-ERROR":
            return {...state, error: action.error}
        default:
            return state;
    }
}

export const setCardsData = (data: CardsDataType) => ({type: 'CARDS/SET-CARDS-DATA', data} as const)
export const setCardsError = (error: string) => ({type: 'CARDS/SET-ERROR', error} as const)

export const getCards = (data: GetCardsRequestType): AppThunk =>
    async (dispatch, getState: () => AppStoreType) => {
        dispatch(setAppLoading(true));
        try {
            const response = await api.getCards({
                ...data,
                page: getState().cardPage.page,
                pageCount: getState().cardPage.pageCount,
            });
            dispatch(setCardsData(response.data));
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                dispatch(setCardsError(error.response.data.error));
            } else if (axios.isAxiosError(error)) {
                dispatch(setCardsError(error.message));
            }
        } finally {
            dispatch(setAppLoading(false));
        }
    }
export const addCard = (data: AddCardRequestType): AppThunk =>
    async (dispatch) => {
        dispatch(setAppLoading(true));
        try {
            await api.addCard(data);
            dispatch(getCards({cardsPack_id: data.card.cardsPack_id}))
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                dispatch(setCardsError(error.response.data.error));
            } else if (axios.isAxiosError(error)) {
                dispatch(setCardsError(error.message));
            }
        } finally {
            dispatch(setAppLoading(false));
        }
    }
export const deleteCard = (data: { id: string }): AppThunk =>
    async (dispatch, getState: () => AppStoreType) => {
        dispatch(setAppLoading(true));
        try {
            await api.deleteCard(data);
            dispatch(getCards({cardsPack_id: getState().cardPage.cards[0].cardsPack_id}))
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                dispatch(setCardsError(error.response.data.error));
            } else if (axios.isAxiosError(error)) {
                dispatch(setCardsError(error.message));
            }
        } finally {
            dispatch(setAppLoading(false));
        }
    }
export const updateCard = (data: UpdateCardRequestType): AppThunk =>
    async (dispatch, getState: () => AppStoreType) => {
        dispatch(setAppLoading(true));
        try {
            await api.updateCard(data);
            dispatch(getCards({cardsPack_id: getState().cardPage.cards[0].cardsPack_id}))
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                dispatch(setCardsError(error.response.data.error));
            } else if (axios.isAxiosError(error)) {
                dispatch(setCardsError(error.message));
            }
        } finally {
            dispatch(setAppLoading(false));
        }
    }

export const addCardGrade = (data: { grade: number, card_id: string }): AppThunk =>
    async (dispatch) => {
        dispatch(setAppLoading(true));
        try {
            await api.gradeCard(data);
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                dispatch(setCardsError(error.response.data.error));
            } else if (axios.isAxiosError(error)) {
                dispatch(setCardsError(error.message));
            }
        } finally {
            dispatch(setAppLoading(false));
        }
    }

//Types
type CardActionTypes = ReturnType<typeof setCardsData> | ReturnType<typeof setCardsError>

export type InitialCardsStateType = GetCardsResponseType & {
    error: string
}

type CardsDataType = {
    cards?: CardType[]
    cardsTotalCount?: number
    maxGrade?: number
    minGrade?: number
    page?: number
    pageCount?: number
    packUserId?: string
}