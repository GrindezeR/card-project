const initialState = {}
export const profileReducer = (state = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        default:
            return state;
    }
}

export type ProfileActionsType = { type: string }