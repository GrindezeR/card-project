const initialState = {}
export const loginReducer = (state = initialState, action: LoginActionsType) => {
    switch (action.type) {
        default:
            return state;
    }
}

export type LoginActionsType = { type: string }