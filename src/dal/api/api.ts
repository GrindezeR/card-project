import axios, {AxiosResponse} from "axios";
import {Mail} from "../../common/mail/Mail";

const instance = axios.create({
  // baseURL: 'http://localhost:7542/2.0/',
  baseURL: 'https://neko-back.herokuapp.com/2.0',
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
    return instance.delete<MeDeleteRequestType,
      AxiosResponse<MeDeleteResponseType>>(`auth/me`, data)
  },
  meUpdate(data: MeUpdateRequestType) {
    return instance.put<MeUpdateRequestType,
      AxiosResponse<MeUpdateResponseType>>(`auth/me`, data)
  },
  forgotPassword(passRecoverMail: string) {
    return instance.post<ForgotRequestType,
      AxiosResponse<ForgotResponseType>>(`auth/forgot`, {
      email: passRecoverMail,
      from: "Cards <best@yandex.by>",
      message: Mail(),
    })
  },
  setNewPassword(newPassword: string, token: string) {
    return instance.post<SetNewPasswordRequestType,
      AxiosResponse<SetNewPasswordResponseType>>
    (`auth/set-new-password`, {
      password: newPassword,
      resetPasswordToken: token,
    })
  },

  getPack() {
    return instance.get<AxiosResponse<getPackResponseType>>(`cards/pack`)
  },
  setPack(data: setPackRequestType) {
    return instance.post<setPackRequestType,
      AxiosResponse<setPackResponseType>>(`cards/pack`, data)
  },
  updatePack(data: updatePackRequestType) {
    return instance.put<updatePackRequestType,
      AxiosResponse<updatePackResponseType>>(`cards/pack`, data)
  },
  deletePack(data: deletePackRequestType) {
    return instance.delete<deletePackRequestType,
      AxiosResponse<deletePackResponseType>>(`cards/pack`, data)
  },


  getCard() {
    return instance.get<AxiosResponse<getCardResponseType>>(`cards/card`)
  },
  setCard(data: setCardRequestType) {
    return instance.post<setCardRequestType,
      AxiosResponse<setCardResponseType>>(`cards/card`, data)
  },
  updateCard(data: updateCardRequestType) {
    return instance.put<updateCardRequestType,
      AxiosResponse<updateCardResponseType>>(`cards/card`, data)
  },
  deleteCard(data: deleteCardRequestType) {
    return instance.delete<deleteCardRequestType,
      AxiosResponse<deleteCardResponseType>>(`cards/card`, data)
  }
}
// export type getPackRequestType = {
//     packName?: string
//     min?: string
//     max?: string
//     sortPacks?: string
//     page?: string
//     pageCount?: string
//     user_id?: string
// }
export type getPackResponseType = {
  cardPacks: Array<PackType>
  page: number
  pageCount: number
  cardPacksTotalCount: number
  minCardsCount: number
  maxCardsCount: number
  token: string
  tokenDeathTime: number
}
export type setPackRequestType = {
  cardsPack: PackType
}
export type setPackResponseType = {
  newCardsPack: {}
}
export type updatePackRequestType = {
  cardsPack: PackType
}
export type updatePackResponseType = {
  updatedCardsPack: {}
}
export type deletePackRequestType = {
  // id: string
}
export type deletePackResponseType = {
  deletedCardsPack: {}
}

type PackType = {
  _id: string
  user_id: string
  user_name: string
  private: boolean
  name: string
  path: string
  grade: number
  shots: number
  cardsCount: number
  type: string
  rating: number
  created: Date
  updated: Date
  more_id: string
  __v: number
}

// export type getCardRequestType = {
//   ?cardAnswer=english // не обязательно
//   &cardQuestion=english // не обязательно
//   &cardsPack_id=5eb6a2f72f849402d46c6ac7
//   &min=1 // не обязательно
//   &max=4 // не обязательно
//   &sortCards=0grade // не обязательно
// &page=1 // не обязательно
// &pageCount=7 // не обязательно
// }

export type getCardResponseType = {
}
export type setCardRequestType = {
}
export type setCardResponseType = {
}
export type updateCardRequestType = {
}
export type updateCardResponseType = {
}
export type deleteCardRequestType = {
}
export type deleteCardResponseType = {
}


export type LoginRequestType = {
  email: string
  password: string
  rememberMe: boolean
}
export type MeUpdateResponseType = {
  updatedUser: LoginResponseType
}
export type LoginResponseType = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number;
  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean;
  rememberMe: boolean;
  error?: string;
}
export type MeUpdateRequestType = {
  name?: string
  avatar?: string
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
  updatedUser: LoginResponseType
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
