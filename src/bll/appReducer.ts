const initialState: InitialStateType = {
<<<<<<< HEAD
  loading: false,
=======
<<<<<<< HEAD
  loadingStatus: false,
=======
  loading: false,
>>>>>>> 2af60098d8f0ccae20aa062de808d382f74549b1
>>>>>>> main
  error: null,
}

export const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
  switch (action.type) {
<<<<<<< HEAD
    case "app/SET_LOADING_STATUS":
      return {...state, loading: action.value}
    case "app/SET-ERROR":
=======
    case "APP/SET_LOADING_STATUS":
      return {...state, loading: action.value}
    case "APP/SET-ERROR":
>>>>>>> main
      return {...state, error: action.error}
    default:
      return state;
  }
}

<<<<<<< HEAD
export const setLoadingStatusAC = (value: boolean) => ({type: 'app/SET_LOADING_STATUS', value} as const)
export const setAppErrorAC = (error: string | null) => ({type: 'app/SET-ERROR', error} as const)
=======
export const setLoading = (value: boolean) => ({type: 'APP/SET_LOADING_STATUS', value} as const)
export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
>>>>>>> main

<<<<<<< HEAD
export type setLoadingStatusAction = ReturnType<typeof setLoadingStatusAC>
type setAppErrorAction = ReturnType<typeof setAppErrorAC>
<<<<<<< HEAD

type InitialStateType = {
  loading: boolean
  error: string | null
  // isInitialized: boolean
}
type AppActionsType = setLoadingStatusAction | setAppErrorAction
=======
export type RequestStatusType = boolean
type InitialStateType = {
  loadingStatus: boolean,
=======
export type setLoadingAction = ReturnType<typeof setLoading>
type setAppErrorAction = ReturnType<typeof setAppErrorAC>
// export type RequestStatusType = b
type InitialStateType = {
  loading: boolean
>>>>>>> 2af60098d8f0ccae20aa062de808d382f74549b1
  error: string | null
  // isInitialized: boolean
}
type ActionsType = setLoadingAction | setAppErrorAction
>>>>>>> main
