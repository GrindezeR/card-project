import {api} from "../dal/api/api";
import {Dispatch} from "redux";
import axios from "axios";

const initialState = {
  isLoggedIn: false
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "login/SET-IS-LOGGED-IN":
      return {...state, isLoggedIn: action.value}
    default:
      return state;
  }
}

export const setIsLoggedInAC = (value: boolean) =>
  ({type: 'login/SET-IS-LOGGED-IN', value} as const)

export const loginTC = (data: any) => async (dispatch: Dispatch<ActionsType>) => {
  try {
    await api.login(data)
    dispatch(setIsLoggedInAC(true))
  } catch (error) {
    if(axios.isAxiosError(error)) {
      console.log(error)
    }
  }
}

type InitialStateType = { isLoggedIn: boolean }
type ActionsType = setIsLoggedInAction
type setIsLoggedInAction = ReturnType<typeof setIsLoggedInAC>