import {api, LoginRequestType} from "../dal/api/api";
import {Dispatch} from "redux";
import axios from "axios";
import {setAppLoading} from "./appReducer";
import {setProfileData, setProfileDeleteData, setProfileError} from "./profileReducer";

const initialState: InitialStateType = {
    isLoggedIn: false,
    rememberMe: false,
    error: '',
}

export const loginReducer = (state = initialState, action: LoginActionsType): InitialStateType => {
    switch (action.type) {
        case "LOGIN/SET-ERROR":
            return {...state, error: action.error}
        case "LOGIN/SET-LOGGED-IN":
            return {...state, isLoggedIn: action.value}
        default:
            return state;
    }
}

export const setLoginError = (error: string) => ({type: 'LOGIN/SET-ERROR', error} as const)
export const setLoggedIn = (value: boolean) => ({type: 'LOGIN/SET-LOGGED-IN', value} as const)

export const logIn = (data: LoginRequestType) => async (dispatch: Dispatch) => {
    dispatch(setAppLoading(true));
    try {
        const response = await api.login(data);
        dispatch(setLoggedIn(true));
        dispatch(setProfileData(response.data)); // Инфа для профиля
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            dispatch(setLoginError(error.response.data.error));
        } else {
            dispatch(setLoginError('Unknown error. Try again later'))
        }
    } finally {
        dispatch(setAppLoading(false));
    }
}

export const logOut = () => async (dispatch: Dispatch) => {
    dispatch(setAppLoading(true));
    try {
        await api.meDelete();
        dispatch(setProfileDeleteData());
        dispatch(setLoggedIn(false));
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            dispatch(setProfileError(error.response.data.error));
        }
    } finally {
        dispatch(setAppLoading(false));
    }
}

type LoginActionsType = ReturnType<typeof setLoginError> | ReturnType<typeof setLoggedIn>

type InitialStateType = {
    isLoggedIn: boolean
    rememberMe: boolean
    error: string
}