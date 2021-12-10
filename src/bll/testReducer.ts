const initialState = {}
export const testReducer = (state = initialState, action: TestActionsType) => {
    switch (action.type) {
        default:
            return state;
    }
}

export type TestActionsType = { type: string }