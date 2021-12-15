<<<<<<< HEAD
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
    dispatch(setLoadingStatusAC(true));
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
        dispatch(setLoadingStatusAC(false));
    }
}

type LoginActionsType = ReturnType<typeof setLoginError> | ReturnType<typeof setLoggedIn>

type InitialStateType = {
    isLoggedIn: boolean
    rememberMe: boolean
    error: string
=======
import {api, LoginRequestType, LoginResponseType} from "../dal/api/api";
import {Dispatch} from "redux";
import axios from "axios";
import {setLoading} from "./appReducer";
import {setProfileData} from "./profileReducer";

const initialState: InitialStateType = {
  isLoggedIn: false,
  email: '',
  password: '',
  rememberMe: false,
  error: '',
}

export const loginReducer = (state = initialState, action: LoginActionsType): InitialStateType => {
  switch (action.type) {
    case "LOGIN/SET-LOGIN-DATA":
      return {...state, ...action.data, error: '', isLoggedIn: true}
    case "LOGIN/SET-ERROR":
      return {...state, error: action.error}
    default:
      return state;
  }
}

export const setLoginData = (data: LoginResponseType) => {
  return {type: 'LOGIN/SET-LOGIN-DATA', data} as const
}
export const setLoginError = (error: string) => {
  return {type: 'LOGIN/SET-ERROR', error} as const
}

export const logIn = (data: LoginRequestType) => async (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await api.login(data);
    console.log(response.data)
    dispatch(setLoginData(response.data));
    dispatch(setProfileData(response.data));
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      dispatch(setLoginError(error.response.data.error));
    }
  } finally {
    dispatch(setLoading(false));
  }
}

type LoginActionsType = ReturnType<typeof setLoginData>
  | ReturnType<typeof setLoginError>

type InitialStateType = {
  isLoggedIn: boolean
  email: string
  password: string
  rememberMe: boolean
  error: string
>>>>>>> main
}