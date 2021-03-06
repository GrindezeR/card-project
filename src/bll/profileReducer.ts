import {api, UserResponseType, MePutRequestType} from "../dal/api/api";
import {Dispatch} from "redux";
import axios from "axios";
import {setAppLoading} from "./appReducer";

const initialState: ProfileInitialStateType = {
    _id: '',
    email: '',
    name: '',
    avatar: '',
    publicCardPacksCount: 0,
    isAdmin: false,
    verified: false,
    rememberMe: false,
    error: '',
    token: '',
    created: null,
    updated: null,
}
export const profileReducer = (state = initialState, action: ProfileActionsType): ProfileInitialStateType => {
    switch (action.type) {
        case "PROFILE/SET-PROFILE-DATA":
            return {...state, ...action.data}
        case "PROFILE/UPDATE-PROFILE-DATA":
            return {...state, name: action.data.name, avatar: action.data.avatar}
        case "PROFILE/SET-PROFILE-ERROR":
            return {...state, error: action.error}
        case "PROFILE/SET-PROFILE-DELETE-DATA":
            return initialState;
        default:
            return state;
    }
}

export const setProfileData = (data: ProfileInitialStateType) => {
    return {type: 'PROFILE/SET-PROFILE-DATA', data} as const
}
export const updateProfileData = (data: UserResponseType) => {
    return {type: 'PROFILE/UPDATE-PROFILE-DATA', data} as const
}
export const setProfileError = (error: string) => {
    return {type: 'PROFILE/SET-PROFILE-ERROR', error} as const
}
export const setProfileDeleteData = () => {
    return {type: 'PROFILE/SET-PROFILE-DELETE-DATA'} as const
}


export const updateProfile = (data: MePutRequestType) => async (dispatch: Dispatch) => {
    dispatch(setAppLoading(true));
    try {
        const response = await api.mePut(data);
        dispatch(updateProfileData(response.data.updatedUser));
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            dispatch(setProfileError(error.response.data.error));
        }
    } finally {
        dispatch(setAppLoading(false));
    }
}


export type ProfileActionsType =
    ReturnType<typeof setProfileData>
    | ReturnType<typeof updateProfileData>
    | ReturnType<typeof setProfileError>
    | ReturnType<typeof setProfileDeleteData>


export type ProfileInitialStateType = {
    _id: string
    email: string
    name: string
    avatar: string
    publicCardPacksCount: number
    token?: string
    created: Date | null
    updated: Date | null
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error: string
}
