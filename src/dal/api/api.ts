import axios, {AxiosResponse} from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:7542/2.0/',
  // baseURL: 'https://',
  withCredentials: true,
})

export const api = {
  login(data: LoginRequestType) {
    return instance.post<LoginRequestType,
      AxiosResponse<LoginResponseType>>(`auth/login`, data)
  },

  register(data: RegisterRequestType) {
    return instance.post<RegisterRequestType,
      AxiosResponse<RegisterResponseType>>(`auth/register`, data)
  },

  mePost(data: MePostRequestType) {
    return instance.post<MePostRequestType,
      AxiosResponse<MePostResponseType>>(`auth/me`, data)
  },

  mePut(data: MePutRequestType) {
    return instance.put<MePutRequestType,
      AxiosResponse<MePutResponseType>>(`auth/me`, data)
  },

  meDelete(data: MeDeleteRequestType) {
    return instance.put<MeDeleteRequestType,
      AxiosResponse<MeDeleteResponseType>>(`auth/me`, data)
  },

  forgot(data: ForgotRequestType) {
    return instance.post<ForgotRequestType,
      AxiosResponse<ForgotResponseType>>(`auth/forgot`, data)
  },
  setNewPassword(data: SetNewPasswordRequestType) {
    return instance.post<SetNewPasswordRequestType,
      AxiosResponse<SetNewPasswordResponseType>>(`auth/set-new-password`, data)
  },
}

export type LoginRequestType = {
  email: string
  password: string
  rememberMe: boolean
}
export type LoginResponseType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number; // количество колод
  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean; // подтвердил ли почту
  rememberMe: boolean;
  error?: string;
}
export type RegisterRequestType = {
  email: string
  password: string
}
export type RegisterResponseType = {
  addedUser: {}
  error?: string;
}
export type MePostRequestType = {}
export type MePostResponseType = LoginResponseType
export type MePutRequestType = {
  name: string
  avatar: string
}
export type MePutResponseType = {
  updateUser: any // весь user {}
  error?: string
}
export type MeDeleteRequestType = {}
export type MeDeleteResponseType = {
  info: string
  error: string
}
export type ForgotRequestType = {
  email: string
  from: string
  message: string
}
export type ForgotResponseType = {
  info: string
  error: string
}
export type SetNewPasswordRequestType = {
  password: string
  resetPasswordToken: string
}
export type SetNewPasswordResponseType = {
  info: string
  error: string
}