const initialState: InitialStateType = {
  loading: false,
  error: null,
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "APP/SET_LOADING_STATUS":
      return {...state, loading: action.value}
    case "APP/SET-ERROR":
      return {...state, error: action.error}
    default:
      return state;
  }
}

export const setLoading = (value: boolean) => ({type: 'APP/SET_LOADING_STATUS', value} as const)
export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)

export type setLoadingAction = ReturnType<typeof setLoading>
type setAppErrorAction = ReturnType<typeof setAppErrorAC>
// export type RequestStatusType = b
type InitialStateType = {
  loading: boolean
  error: string | null
  // isInitialized: boolean
}
type ActionsType = setLoadingAction | setAppErrorAction