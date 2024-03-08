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

export const getRecipes = (ingredients) => async (dispatch) => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&${ingredients}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&field=image&field=source&field=url&field=ingredientLines&field=ingredients`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',  
        }
    })

    if (response.ok) {
        const recipes = await response.json()
        console.log(recipes)
        // return recipes
    } else {
        const errors = await response.json()
        console.log(errors)
        // dispatch(setError)
    }
}

