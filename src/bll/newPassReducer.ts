import { Dispatch } from "redux"
import {setAppLoading} from "./appReducer";
import {api} from "../dal/api/api";
import axios from "axios";

export type NewPassInitialStateType = {
    setNewPassword: string,
    error: string,
}

const initialState: NewPassInitialStateType = {
    setNewPassword: "",
    error: "",
}

export const newPassReducer = (state = initialState,
                               action: NewPassActionsType): NewPassInitialStateType => {
    switch (action.type) {
        case "NEW_PASS/SET-NEW-PASSWORD":
            return {...state, setNewPassword: action.info}
        case "NEW_PASS/SET-ERROR-RESPONSE":
            return {...state, error: action.error}
        default:
            return state;
    }
}

export type NewPassActionsType =
    ReturnType<typeof setNewPass>
    | ReturnType<typeof errorResponse>

export const setNewPass = (info: string) => ({type: "NEW_PASS/SET-NEW-PASSWORD", info} as const);
export const errorResponse = (error: string) => ({type: "NEW_PASS/SET-ERROR-RESPONSE", error} as const);

export const createNewPassword = (newPassword: string, token: string) => async (dispatch: Dispatch) => {

    dispatch(setAppLoading(true));

    try {
        const response = await api.setNewPassword(newPassword, token);
        dispatch(setNewPass(response.data.info));
    }
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            dispatch(errorResponse(error.response.data.error));
        }
    }
    finally {
        dispatch(setAppLoading(false));
    }
}