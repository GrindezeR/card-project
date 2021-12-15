import axios, {AxiosResponse} from "axios";

const instance = axios.create({
<<<<<<< HEAD
  // baseURL: 'http://localhost:7542/2.0/',
  baseURL: 'https://neko-back.herokuapp.com/2.0',
  withCredentials: true,
})

export const api = {
  login(data: LoginRequestType) {
    return instance.post<LoginRequestType,
      AxiosResponse<LoginResponseType>>(`auth/login`, {...data})
  },
=======
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const api = {
    login(data: LoginRequestType) {
        return instance.post<LoginRequestType,
            AxiosResponse<LoginResponseType>>(`auth/login`, data)
    },
>>>>>>> main

    register(data: RegisterRequestType) {
        return instance.post<RegisterRequestType,
            AxiosResponse<RegisterResponseType>>(`auth/register`, data)
    },

    mePost(data: MePostRequestType) {
        return instance.post<MePostRequestType,
            AxiosResponse<MePostResponseType>>(`auth/me`, data)
    },

<<<<<<< HEAD
    mePut(data: MePutRequestType) {
        return instance.put<MePutRequestType,
            AxiosResponse<MePutResponseType>>(`auth/me`, data)
    },

    meDelete(data: MeDeleteRequestType) {
        return instance.put<MeDeleteRequestType,
            AxiosResponse<MeDeleteResponseType>>(`auth/me`, data)
    },
=======
  meUpdate(data: MeUpdateRequestType) {
    return instance.put<MeUpdateRequestType,
      AxiosResponse<MeUpdateResponseType>>(`auth/me`, data)
  },

  // updateProfile(data: UpdateProfileDataType) {
  //   return instance.put(`auth/me`, {...data})
  // },

  meDelete(data: MeDeleteRequestType) {
    return instance.put<MeDeleteRequestType,
      AxiosResponse<MeDeleteResponseType>>(`auth/me`, data)
  },
>>>>>>> 2af60098d8f0ccae20aa062de808d382f74549b1

    forgotPassword(passRecoverMail: string) {
        return axios.post<ForgotRequestType,
            AxiosResponse<ForgotResponseType>>(`https://neko-back.herokuapp.com/2.0/auth/forgot`, {
            withCredentials: true,
            email: passRecoverMail,
            from: "maxim.kornienkou@gmail.com",
            message: `<div>password recovery link: <a href="http://localhost:3000/#/set-new-password/$token$">
                                                    Click on this link to create a new password
                                                    </a></div>`,
        })
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
<<<<<<< HEAD
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
=======
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number; // количество колод
  created: string;
  updated: string;
  isAdmin: boolean;
  verified: boolean; // подтвердил ли почту
  rememberMe: boolean;
  error?: string;
>>>>>>> 2af60098d8f0ccae20aa062de808d382f74549b1
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
<<<<<<< HEAD
export type MePutRequestType = {
    name: string
    avatar: string
}
export type MePutResponseType = {
    updateUser: any // весь user {}
    error?: string
=======
export type MeUpdateRequestType = {
  name?: string
  avatar?: string
}
export type MeUpdateResponseType = {
  updateUser: any // весь user {}
  error?: string
>>>>>>> 2af60098d8f0ccae20aa062de808d382f74549b1
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
<<<<<<< HEAD
    info: string
    error: string
}
=======
  info: string
  error: string
}

//test
>>>>>>> 2af60098d8f0ccae20aa062de808d382f74549b1
