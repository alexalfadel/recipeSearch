const ADD_INGREDIENTS = 'ingredients/add'

const addIngredients = (ingredients) => {
    return {
        type: ADD_INGREDIENTS,
        payload: ingredients
    }
}

export const updateIngredients = (ingredients) => async (dispatch) => {
    dispatch(addIngredients(ingredients))
}


let initialState = []

export const ingredientReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_INGREDIENTS:
             newState = [...action.payload]
             return newState
        default:
            return state
    }

}