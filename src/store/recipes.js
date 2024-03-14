const ADD_RECIPES = 'recipes/get'
const SET_ERROR = 'recipes/error'

const addRecipes = (recipes) => {
    return {
        type: ADD_RECIPES,
        payload: recipes
    }
}

const setError = (error) => {
    return {
        type: SET_ERROR,
        payload: {
            error: {error}
        }
    }
}

function cleanRecipes(recipeResponse) {
    return recipeResponse.hits.map(hit => {
        const recipe = hit.recipe;
        return {
            image: recipe.image,
            url: recipe.url,
            ingredients: recipe.ingredients.map(ingredient => ingredient.food)
        };
    });
}


export const getRecipes = (ingredients) => async (dispatch) => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&${ingredients}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&field=image&field=source&field=url&field=ingredientLines&field=ingredients`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',  
        }
    })

    if (response.ok) {
        const recipeResponse = await response.json()
        // console.log(recipes)
        const recipes = cleanRecipes(recipeResponse);
        console.log(recipes, '-----recipes');
        dispatch(addRecipes(recipes))
        // return recipes
    } else {
        const errors = await response.json()
        console.log(errors)
        // dispatch(setError)
    }
}

const initialState = {}

export const recipeReduce = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_RECIPES:
            newState = [...action.payload]
            return newState
        default:
            return state
    }
}