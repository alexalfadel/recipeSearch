const ADD_INGREDIENTS = 'ingredients/add'

const addIngredients = (ingredients) => {
    return {
        type: ADD_INGREDIENTS,
        payload: ingredients
    }
}

export const updateIngredients = (ingredients) => async (dispatch) => {
    console.log('---in ingredients reducer---')
    console.log(ingredients)
    dispatch(addIngredients(ingredients))
}

// export const getIngredients = () => async (dispatch) => {
//     const response = await fetch(`https://api.spoonacular.com/food/ingredients/search?query=all&apiKey=${process.env.REACT_APP_API_KEY}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })

//     if (response.ok) {
//         const ingredients = await response.json()
//         console.log(ingredients)
//     } else {
//         const errors = await response.json()
//         console.log(errors)
//     }
// }

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