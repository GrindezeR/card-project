import {Dispatch} from "redux";
import {api} from "../dal/api/api";
import axios from "axios";

const initialState = {
  errorRegister: null
}
export const registerReducer = (state: InitialStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case "register/SET_ERROR":
      return {...state, errorRegister: action.errorRegister}
    default:
      return state;
  }
}

const registerAC = (data: any) =>
  ({type: 'register/REGISTER', data} as const)
const setErrorAC = (errorRegister: any) =>
  ({type: 'register/SET_ERROR', errorRegister} as const)

export const registerTC = (data: RegisterDataType) => async (dispatch: Dispatch<ActionsType>) => {
  try {
    await api.register(data)
    dispatch(registerAC(data))
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log({...error})
      console.log('errrror', error.response?.data.passwordRegExp)
      dispatch(setErrorAC(error.response?.data.passwordRegExp))
    }
  }
}

type RegisterAction = ReturnType<typeof registerAC>
type SetErrorAction = ReturnType<typeof setErrorAC>
type ActionsType = RegisterAction | SetErrorAction
export type RegisterDataType = {
  email: string
  password: string
}
type InitialStateType = { errorRegister: string | null }
