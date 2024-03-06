const ADD_RECIPES = 'recipes/get'

const addRecipes = (recipes) => {
    return {
        type: ADD_RECIPES,
        payload: recipes
    }
}

export const getRecipes = (ingredients) => async (dispatch) => {
    
}