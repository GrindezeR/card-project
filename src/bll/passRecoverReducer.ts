import axios from "axios";
import {Dispatch} from "redux";
import {api} from "../dal/api/api";
import {setAppLoading} from "./appReducer";

const initialState: InitialStateType = {
    mailSent: false,
    error: "",
}

export const recoverPassReducer = (state = initialState, action: RecoverPassActionsType): InitialStateType => {
    switch (action.type) {
        case "PASS_RECOVER/SET-MAIL-SENT":
            return {...state, mailSent: action.value}
        case "PASS_RECOVER/SET-ERROR-RESPONSE":
            return {...state, error: action.error}
        default:
            return state;
    }
}


export const mailSent = (value: boolean) => ({type: "PASS_RECOVER/SET-MAIL-SENT", value} as const);
export const errorResponse = (error: string) => ({type: "PASS_RECOVER/SET-ERROR-RESPONSE", error} as const);

export const recoveryPass = (passRecoverMail: string) => async (dispatch: Dispatch) => {

    dispatch(setAppLoading(true));

    try {
        const response = await api.forgotPassword(passRecoverMail);
        response && dispatch(mailSent(true));
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            dispatch(errorResponse(error.response.data.error));
        }
    } finally {
        dispatch(setAppLoading(false));
    }
}

export type RecoverPassActionsType = ReturnType<typeof mailSent>
    | ReturnType<typeof errorResponse>

export type InitialStateType = {
    mailSent: boolean,
    error: string,
}
