const initialState: InitialStateType = {
  loadingStatus: 'unloading',
  error: null,
  // isInitialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "app/SET_LOADING_STATUS":
      return {...state, loadingStatus: action.value}
    case "app/SET-ERROR":
      return {...state, error: action.error}
    default:
      return state;
  }
}

export const setLoadingStatusAC = (value: RequestStatusType) => ({type: 'app/SET_LOADING_STATUS', value} as const)
export const setAppErrorAC = (error: string | null) => ({type: 'app/SET-ERROR', error} as const)

type setLoadingStatusAction = ReturnType<typeof setLoadingStatusAC>
type setAppErrorAction = ReturnType<typeof setAppErrorAC>
export type RequestStatusType = 'loading' | 'unloading'
type InitialStateType = {
  loadingStatus: RequestStatusType
  error: string | null
  // isInitialized: boolean
}
type ActionsType = setLoadingStatusAction | setAppErrorAction