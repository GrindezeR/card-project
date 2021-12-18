const initialState: InitialStateType = {
}
export const packReducer = (state = initialState, action: PackActionsType) => {
  switch (action.type) {
    case "PACK/GET_PACK":
      return {...state}
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

const getPack = () =>
  ({type: 'PACK/GET_PACK'} as const)
const setPack = () =>
  ({type: 'PACK/SET_PACK'} as const)
const updatePack = () =>
  ({type: 'PACK/UPDATE_PACK'} as const)
const deletePack = () =>
  ({type: 'PACK/DELETE_PACK'} as const)

type InitialStateType = {

}
type PackActionsType = ReturnType<typeof getPack> | ReturnType<typeof setPack>
| ReturnType<typeof updatePack> | ReturnType<typeof deletePack>