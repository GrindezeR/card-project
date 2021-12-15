import {Dispatch} from "redux";
import {api} from "../dal/api/api";
import axios from "axios";
import {setAppLoading} from "./appReducer";

const initialState: InitialStateType = {
    errorRegister: null,
    isRegistered: false
}
export const registerReducer = (state = initialState, action: RegisterActionsType) => {
    switch (action.type) {
        case "REGISTER/SET_REGISTER":
            return {...state, isRegistered: action.value}
        case "REGISTER/SET_ERROR":
            return {...state, errorRegister: action.errorRegister}
        default:
            return state;
    }
}

const setRegister = (value: boolean) =>
    ({type: 'REGISTER/SET_REGISTER', value} as const)

export const setRegisterError = (errorRegister: any) =>
    ({type: 'REGISTER/SET_ERROR', errorRegister} as const)

export const register = (data: RegisterDataType) => async (dispatch: Dispatch) => {
    dispatch(setAppLoading(true))
    try {
        const response = await api.register(data)
        if (response.statusText === 'Created') {
            dispatch(setRegister(true))
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            if (error.response.data.isEmailValid && !error.response.data.isPassValid) {
                dispatch(setRegisterError(error.response.data.passwordRegExp))
            } else {
                dispatch(setRegisterError(error.response.data.error))
            }
        }
    } finally {
        dispatch(setAppLoading(false))
    }
}

type SetRegisterAction = ReturnType<typeof setRegister>
type SetErrorAction = ReturnType<typeof setRegisterError>
type RegisterActionsType = SetRegisterAction | SetErrorAction
export type RegisterDataType = {
    email: string
    password: string
}
type InitialStateType = { errorRegister: string | null, isRegistered: boolean }
