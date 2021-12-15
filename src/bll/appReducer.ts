const initialState: InitialStateType = {
  loading: false,
  error: null,
  // isInitialized: false
}

export const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
  switch (action.type) {
    case "app/SET_LOADING_STATUS":
      return {...state, loading: action.value}
    case "app/SET-ERROR":
      return {...state, error: action.error}
    default:
      return state;
  }
}

export const setLoadingStatusAC = (value: boolean) => ({type: 'app/SET_LOADING_STATUS', value} as const)
export const setAppErrorAC = (error: string | null) => ({type: 'app/SET-ERROR', error} as const)

type setLoadingStatusAction = ReturnType<typeof setLoadingStatusAC>
type setAppErrorAction = ReturnType<typeof setAppErrorAC>

type InitialStateType = {
  loading: boolean
  error: string | null
  // isInitialized: boolean
}
type AppActionsType = setLoadingStatusAction | setAppErrorAction