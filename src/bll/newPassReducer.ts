const initialState = {}
export const newPassReducer = (state = initialState, action: NewPassActionsType) => {
    switch (action.type) {
        default:
            return state;
    }
}

export type NewPassActionsType = { type: string }