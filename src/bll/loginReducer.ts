import {api, LoginRequestType} from "../dal/api/api";
import {Dispatch} from "redux";
import axios from "axios";
import {setLoadingStatusAC} from "./appReducer";

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
            return {...state, isLoggedIn: true}
        default:
            return state;
    }
}

export const setLoginError = (error: string) => ({type: 'LOGIN/SET-ERROR', error} as const)
export const setLoggedIn = () => ({type: 'LOGIN/SET-LOGGED-IN'} as const)

export const logIn = (data: LoginRequestType) => async (dispatch: Dispatch) => {
    dispatch(setLoadingStatusAC("loading"));
    try {
        const response = await api.login(data);
        response && dispatch(setLoggedIn());
        // dispatch(ПрофильАС(response.data)); // Инфа для профиля
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            dispatch(setLoginError(error.response.data.error));
        } else {
            dispatch(setLoginError('Unknown error. Try again later'))
        }
    } finally {
        dispatch(setLoadingStatusAC("unloading"));
    }
}

type LoginActionsType = ReturnType<typeof setLoginError> | ReturnType<typeof setLoggedIn>

type InitialStateType = {
    isLoggedIn: boolean
    rememberMe: boolean
    error: string
}