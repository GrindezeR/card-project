import {api, getPackResponseType} from "../dal/api/api";
import {Dispatch} from "redux";

const initialState: InitialStatePackPageType = {
  cardPacks: [],
  cardPacksTotalCount: 1,
  maxCardsCount: 1,
  minCardsCount: 1,
  page: 1,
  pageCount: 1,
  // token: '',
  // tokenDeathTime: 0,
}
export const packReducer = (state = initialState, action: PackActionsType): InitialStatePackPageType => {
  switch (action.type) {
    case "PACK/GET_PACK":
      return {...state = action.data}
    case "PACK/SET_PACK":
      return {...state}
    case "PACK/UPDATE_PACK":
      return {...state}
    case "PACK/DELETE_PACK":
      return {...state}
    default:
      return state;
  }
}

const getPack = (data: getPackResponseType) =>
  ({type: 'PACK/GET_PACK', data} as const)
const setPack = () =>
  ({type: 'PACK/SET_PACK'} as const)
const updatePack = () =>
  ({type: 'PACK/UPDATE_PACK'} as const)
const deletePack = () =>
  ({type: 'PACK/DELETE_PACK'} as const)

//thunks
export const getPackApi = (page: number, pageCount: number) => async (dispatch: Dispatch, getState: any) => {
  // const pageSize = getState().packPage().page
  try {
    const response = await api.getPack(page, pageCount)
    dispatch(getPack(response.data))
    console.log(response.data)
  } catch (e) {

  }
}

export type InitialStatePackPageType = {
  cardPacks: Array<PackType>
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
  // token: string
  // tokenDeathTime: number
}

export type PackType = {
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

type PackActionsType = ReturnType<typeof getPack> | ReturnType<typeof setPack>
  | ReturnType<typeof updatePack> | ReturnType<typeof deletePack>