const initialState: InitialStateType = {
}

export const cardReducer = (state = initialState, action: CardActionsType) => {
  switch (action.type) {
    case "CARD/GET_CARD":
      return {...state}
    case "CARD/SET_CARD":
      return {...state}
    case "CARD/UPDATE_CARD":
      return {...state}
    case "CARD/DELETE_CARD":
      return {...state}
    default:
      return state;
  }
}

const getCard = () =>
  ({type: 'CARD/GET_CARD'} as const)
const setCard = () =>
  ({type: 'CARD/SET_CARD'} as const)
const updateCard = () =>
  ({type: 'CARD/UPDATE_CARD'} as const)
const deleteCard = () =>
  ({type: 'CARD/DELETE_CARD'} as const)

type InitialStateType = {

}
type CardActionsType = ReturnType<typeof getCard> | ReturnType<typeof setCard>
  | ReturnType<typeof updateCard> | ReturnType<typeof deleteCard>