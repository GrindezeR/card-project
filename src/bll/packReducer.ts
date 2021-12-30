import {setAppLoading} from "./appReducer";
import axios from "axios";
import {api, GetPacksRequestType} from "../dal/api/api";
import {AppStoreType, AppThunk} from "./store";
import {Dispatch} from "redux";

const initialState: InitialStatePackPageType = {
    cardPacks: [],
    cardPacksTotalCount: 0,
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 10,
    error: '',
    user_id: '',
    token: '',
}
export const packReducer = (state = initialState, action: PackActionsType): InitialStatePackPageType => {
    switch (action.type) {
        case "PACK/SET-PACKS-DATA":
            return {...state, ...action.data}
        case "PACK/CLEAR-PACKS":
            return initialState;
        case "PACK/SET-ERROR":
            return {...state, error: action.error}
        case "PACK/SET-SORT":
            if (action.sortType === "name" ? action.sort === 'up' : action.sort === 'down') {
                return {
                    ...state, cardPacks: [...state.cardPacks.sort((a, b) => {
                        let A = action.sortType === 'name' ? a[action.sortType].toLowerCase() : a[action.sortType];
                        let B = action.sortType === 'name' ? b[action.sortType].toLowerCase() : b[action.sortType];
                        if (A < B) return -1;
                        else if (A > B) return 1;
                        else return 0
                    })]
                }
            } else {
                return {
                    ...state, cardPacks: [...state.cardPacks.sort((a, b) => {
                        let A = action.sortType === 'name' ? a[action.sortType].toLowerCase() : a[action.sortType];
                        let B = action.sortType === 'name' ? b[action.sortType].toLowerCase() : b[action.sortType];
                        if (A > B) return -1;
                        else if (A < B) return 1;
                        else return 0;
                    })]
                }
            }
        default:
            return state;
    }
}

export const setPacksData = (data: GetPacksRequestType) => ({type: 'PACK/SET-PACKS-DATA', data} as const)
export const clearPacksData = () => ({type: 'PACK/CLEAR-PACKS'} as const)
export const setPacksError = (error: string) => ({type: 'PACK/SET-ERROR', error} as const)
export const setPacksSortData = (sort: 'up' | 'down', sortType: 'name' | 'cardsCount' | 'updated') =>
    ({type: 'PACK/SET-SORT', sort, sortType} as const)

//thunks
export const getPacks = (searchParams?: string) =>
    async (dispatch: Dispatch, getState: () => AppStoreType) => {
        dispatch(setAppLoading(true));
        dispatch(setPacksError(''));
        try {
            const response = await api.getPacks({
                page: getState().packPage.page,
                user_id: getState().packPage.user_id,
                pageCount: getState().packPage.pageCount,
                packName: searchParams && searchParams,
            })
            dispatch(setPacksData(response.data))
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                dispatch(setPacksError(error.response.data.error));
            } else if (axios.isAxiosError(error)) {
                dispatch(setPacksError(error.message));
            }
        } finally {
            dispatch(setAppLoading(false));
        }
    }

export const addPack = (name: string): AppThunk =>
    async (dispatch) => {
        dispatch(setAppLoading(true));
        try {
            await api.addPack(name);
            dispatch(getPacks());
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                dispatch(setPacksError(error.response.data.error));
            } else if (axios.isAxiosError(error)) {
                dispatch(setPacksError(error.message));
            }
        } finally {
            dispatch(setAppLoading(false));
        }
    }

export const deletePack = (packId: string): AppThunk =>
    async (dispatch) => {
        dispatch(setAppLoading(true));
        try {
            await api.deletePack(packId);
            await dispatch(getPacks());
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                dispatch(setPacksError(error.response.data.error));
            } else if (axios.isAxiosError(error)) {
                dispatch(setPacksError(error.message));
            }
        } finally {
            dispatch(setAppLoading(false));
        }
    }
export const updatePack = (packId: string, name: string): AppThunk =>
    async (dispatch, getState: () => AppStoreType) => {
        dispatch(setAppLoading(true));
        try {
            await api.updatePack(packId, name);
            await dispatch(getPacks());
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                dispatch(setPacksError(error.response.data.error));
            } else if (axios.isAxiosError(error)) {
                dispatch(setPacksError(error.message));
            }
        } finally {
            dispatch(setAppLoading(false));
        }
    }

export type InitialStatePackPageType = {
    cardPacks: PackType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    error: string
    user_id: string
    token: string
}
export type PackType = {
    _id: string
    user_id: string
    user_name: string
    private: boolean
    name: string
    path: string
    grade: number
    shots: number
    cardsCount: number
    type: string
    rating: number
    created: Date
    updated: Date
    more_id: string
    __v: number
}
type PackActionsType = ReturnType<typeof setPacksData>
    | ReturnType<typeof clearPacksData>
    | ReturnType<typeof setPacksError>
    | ReturnType<typeof setPacksSortData>