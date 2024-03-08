const ADD_INGREDIENTS = 'ingredients/add'

const addIngredients = (ingredients) => {
    return {
        type: ADD_INGREDIENTS,
        payload: ingredients
    }
}

export const getIngredients = () => async (dispatch) => {
    const response = await fetch(`https://api.spoonacular.com/food/ingredients/search?query=all&apiKey=${process.env.REACT_APP_API_KEY}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        const ingredients = await response.json()
        console.log(ingredients)
    } else {
        const errors = await response.json()
        console.log(errors)
    }
}