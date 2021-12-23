import {Dispatch} from "redux";
import {api} from "../dal/api/api";
import {setProfileData} from "./profileReducer";
import {setLoggedIn} from "./loginReducer";

const initialState: InitialStateType = {
    loading: false,
    initialized: false,
    error: null,
}

export const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case "APP/SET_LOADING_STATUS":
            return {...state, loading: action.value}
        case "APP/SET-ERROR":
            return {...state, error: action.error}
        case "APP/SET-INITIALIZE":
            return {...state, initialized: true}
        default:
            return state;
    }
}


export const setAppLoading = (value: boolean) => ({type: 'APP/SET_LOADING_STATUS', value} as const)
export const setAppError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppInitialize = () => ({type: 'APP/SET-INITIALIZE'} as const)

export const initialize = () => async (dispatch: Dispatch) => {
    dispatch(setAppLoading(true));
    try {
        const response = await api.mePost()
        dispatch(setProfileData(response.data));
        dispatch(setLoggedIn(true));
    } catch {
        dispatch(setLoggedIn(false));
    } finally {
        dispatch(setAppInitialize());
        dispatch(setAppLoading(false));
    }
}

type AppActionsType = ReturnType<typeof setAppLoading>
    | ReturnType<typeof setAppError>
    | ReturnType<typeof setAppInitialize>

type InitialStateType = {
    loading: boolean,
    initialized: boolean,
    error: null | string,
}