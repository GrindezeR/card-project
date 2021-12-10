const initialState = {}
export const registerReducer = (state = initialState, action: RegisterActionsType) => {
    switch (action.type) {
        default:
            return state;
    }
}

export type RegisterActionsType = { type: string }