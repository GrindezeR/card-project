import axios, {AxiosResponse} from "axios";
import {Mail} from "../../common/mail/Mail";
import {PackType} from "../../bll/packReducer";

const instance = axios.create({
    // baseURL: 'http://localhost:7542/2.0/',
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

export const api = {
    login(data: LoginRequestType) {
        return instance.post<LoginRequestType, AxiosResponse<UserResponseType, LoginRequestType>, LoginRequestType>
        (`auth/login`, data)
    },
    register(data: RegisterRequestType) {
        return instance.post<RegisterRequestType, AxiosResponse<RegisterResponseType, RegisterRequestType>, RegisterRequestType>
        (`auth/register`, data)
    },
    mePost() {
        return instance.post<{}, AxiosResponse<UserResponseType, {}>>(`auth/me`)
    },
    mePut(data: MePutRequestType) {
        return instance.put<MePutRequestType, AxiosResponse<MePutResponseType, MePutRequestType>, MePutRequestType>(`auth/me`, data)
    },
    meDelete() {
        return instance.delete<{}, AxiosResponse<InfoResponseType, {}>>(`auth/me`)
    },
    forgotPassword(passRecoverMail: string) {
        return instance.post<ForgotRequestType, AxiosResponse<InfoResponseType, ForgotRequestType>, ForgotRequestType>
        (`auth/forgot`, {
            email: passRecoverMail,
            from: "Cards <best@yandex.by>",
            message: Mail(),
        })
    },
    setNewPassword(newPassword: string, token: string) {
        return instance.post<SetNewPasswordRequestType, AxiosResponse<InfoResponseType, SetNewPasswordRequestType>, SetNewPasswordRequestType>
        (`auth/set-new-password`, {password: newPassword, resetPasswordToken: token})
    },

    //Packs
    getPacks(data?: GetPacksRequestType) {
        return instance.get<GetPacksRequestType, AxiosResponse<GetPacksResponseType, GetPacksRequestType>, GetPacksRequestType>
        (`cards/pack`, {params: data})
    },
    addPack(name: string) {
        return instance.post<{}, AxiosResponse<{}, AddPackRequestType>, AddPackRequestType>
        (`cards/pack`, {cardsPack: {name}})
    },
    deletePack(packId: string) {
        return instance.delete<{ packId: string }>(`cards/pack`, {params: {id: packId}})
    },
    updatePack(packId: string, name: string) {
        return instance.put<UpdatePackType>(`cards/pack`, {cardsPack: {_id: packId, name}})
    },

    //Cards
    getCards(data: GetCardsRequestType) {
        return instance.get<GetCardsRequestType, AxiosResponse<GetCardsResponseType, GetCardsRequestType>, GetCardsRequestType>
        (`cards/card`, {params: data});
    },
    addCard(data: AddCardRequestType) {
        return instance.post<{ cardsPack_id: string }, AxiosResponse<{ cardsPack_id: string }, AddCardRequestType>, AddCardRequestType>
        (`cards/card`, {...data});
    },
    deleteCard(data: { id: string }) {
        return instance.delete<{ id: string }>(`cards/card`, {params: data})
    },
    updateCard(data: UpdateCardRequestType) {
        return instance.put<UpdateCardRequestType>(`cards/card`, {...data})
    },
    gradeCard(data: GradeCardRequestType) {
        return instance.put<GradeCardRequestType>(`/cards/grade`, {...data});
    }
}

export type LoginRequestType = {
    email: string
    password: string
    rememberMe: boolean
}
export type MeUpdateResponseType = {
    updatedUser: UserResponseType,
    error?: string
}
export type UserResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar: string;
    publicCardPacksCount: number;
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean;
    rememberMe: boolean;
    error: string;
}
export type RegisterRequestType = {
    email: string
    password: string
}
export type RegisterResponseType = {
    addedUser: UserResponseType
    error?: string;
}
export type MePutRequestType = {
    name?: string
    avatar?: string
}
export type MePutResponseType = {
    updatedUser: UserResponseType
    error?: string
}
export type ForgotRequestType = {
    email: string
    from: string
    message: string
}
export type SetNewPasswordRequestType = {
    password: string
    resetPasswordToken: string
}
export type InfoResponseType = {
    info: string
    error: string
}

//Packs
export type GetPacksRequestType = {
    packName?: string
    min?: number
    max?: number
    sortPacks?: '0updated' | '1updated'
    page?: number
    pageCount?: number
    user_id?: string
}
export type GetPacksResponseType = {
    cardPacks: PackType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
}
export type AddPackRequestType = {
    cardsPack: {
        name: string
        grade?: number
        shots?: number
        rating?: number
        deckCover?: string
        private?: boolean
        type?: string
    }
}
export type UpdatePackType = {
    cardsPack: {
        id: string
        name: string
    }
}

//Cards
export type GetCardsRequestType = {
    cardsPack_id: string
    cardAnswer?: string
    cardQuestion?: string
    min?: number
    max?: number
    sortCards?: '0grade' | '1grade'
    page?: number
    pageCount?: number
}
export type GetCardsResponseType = {
    cards: CardType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}
export type CardType = {
    cardsPack_id: string
    answer: string
    question: string
    grade: number
    shots: number
    rating: number
    type: string
    user_id: string
    created: Date | null
    updated: Date | null
    _id: string
}
export type AddCardRequestType = {
    card: {
        cardsPack_id: string
        answer: string
        question: string
        grade?: number
        shots?: number
        rating?: number
        answerImg?: string
        questionImg?: string
        questionVideo?: string
        answerVideo?: string
        type?: string
    }
}
export type UpdateCardRequestType = {
    card: {
        _id: string
        question?: string
        answer?: string
        comments?: string
    }
}
export type GradeCardRequestType = {
    grade: number,
    card_id: string,
}