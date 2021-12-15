import {api, MeUpdateRequestType} from "../dal/api/api";
import {Dispatch} from "redux";
import axios from "axios";
import {setLoading} from "./appReducer";

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
  created: '',
  updated: ''
}
export const profileReducer = (state = initialState, action: ProfileActionsType): ProfileInitialStateType => {
  switch (action.type) {
    case "PROFILE/SET-PROFILE-DATA":
      return {...state, ...action.data}
    case "PROFILE/UPDATE-PROFILE-DATA":
      return {...state, ...action.data}
    case "PROFILE/SET-PROFILE-ERROR":
      return {...state, error: action.error}
    default:
      return state;
  }
}

export const setProfileData = (data: ProfileInitialStateType) => {
  return {type: 'PROFILE/SET-PROFILE-DATA', data} as const
}
export const updateProfileData = (data: MeUpdateRequestType) => {
  return {type: 'PROFILE/UPDATE-PROFILE-DATA', data} as const
}
export const setProfileError = (error: string) => {
  return {type: 'PROFILE/SET-PROFILE-ERROR', error} as const
}


export const updateProfile = (data: MeUpdateRequestType) => async (dispatch: Dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await api.meUpdate(data);
    dispatch(updateProfileData(response.data.updateUser));
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      dispatch(setProfileError(error.response.data.error));
    }
  } finally {
    dispatch(setLoading(false));
  }
}


export type ProfileActionsType = ReturnType<typeof setProfileData>
  | ReturnType<typeof updateProfileData> | ReturnType<typeof setProfileError>


export type ProfileInitialStateType = {
  _id: string
  email: string
  name: string
  avatar?: string
  publicCardPacksCount: number
  token?: string
  created: string
  updated: string
  isAdmin: boolean
  verified: boolean
  rememberMe: boolean
  error?: string
}
