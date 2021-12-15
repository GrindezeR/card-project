const initialState: InitialStateType = {
    loading: false,
    error: null,
}

export const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case "APP/SET_LOADING_STATUS":
            return {...state, loading: action.value}
        case "APP/SET-ERROR":
            return {...state, error: action.error}
        default:
            return state;
    }
}


export const setAppLoading = (value: boolean) => ({type: 'APP/SET_LOADING_STATUS', value} as const)
export const setAppError = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)


type AppActionsType = ReturnType<typeof setAppLoading> | ReturnType<typeof setAppError>
// export type AppLoading = Re

type InitialStateType = {
    loading: boolean,
    error: null | string,
}