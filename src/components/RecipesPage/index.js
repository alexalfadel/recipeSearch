import './RecipesPage.css'
import { useSelector, useDispatch } from 'react-redux'
import { getRecipes } from '../../store/recipes'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function RecipesPage () {
    const dispatch = useDispatch()
    const ingredients = useSelector((state) => state.ingredients)
    const recipes = useSelector((state) => state.recipes)
    const [loading, setLoading] = useState(true)

    

    useEffect(() => {
        const ingredientsParams = createSearchParams(ingredients)
        dispatch(getRecipes(ingredientsParams)).then(() => setLoading(false))
    }, [dispatch])

    const createSearchParams = (ingredients) => {
        let paramsString = ingredients.join('&')
        return new URLSearchParams({
            q: paramsString
        })
    }

    if (loading && !recipes.length) {
        return (
            <div id='loading-page'>
                <h1 id='loading-title'>We're looking... hang tight!</h1>
            </div>
        )
    }

    if (!recipes.length && !loading) {
        return (
            <div id='no-recipes-page'>
                <h1 id='no-recipes-title'>No Recipes!</h1>
            </div>
        )
    }
    
   
    const recipeBoxes = recipes.map((recipe) => {
        return (
            <a className='recipe-box' href={recipe.url} target='_blank'>
                <img src={recipe.image} alt={recipe.name}></img>
                <p className='recipe-name'>{recipe.name}</p>
            </a>
        )
    });

  

    return (
        <div id='recipes-page'>
            <h1>Try these!</h1>
            <div id='recipes-container'>
                {recipeBoxes}
            </div>
        </div>
    )
}

export default RecipesPage