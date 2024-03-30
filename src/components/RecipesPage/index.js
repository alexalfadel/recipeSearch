import './RecipesPage.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getRecipes } from '../../store/recipes'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function RecipesPage () {
    const dispatch = useDispatch()
    const ingredients = useSelector((state) => state.ingredients)
    const recipes = useSelector((state) => state.recipes)
    const [loading, setLoading] = useState(true)

    

    useEffect(() => {
        const ingredientsParams = createSearchParams(ingredients)
        console.log('getting recipes')
        dispatch(getRecipes(ingredientsParams)).then(() => setLoading(false))
        // setLoading(false)
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
        console.log('---no recipes :(----')
        return (
            <div id='no-recipes-page'>
                <h1 id='no-recipes-title'>No Recipes!</h1>
            </div>
        )
    }
    
    // const recipeBoxes = []

    // for (let recipe of recipes) {
    //     const recipeElement = <a href={recipe.url} target='_blank'><img src={recipe.image} alt={recipe.name}></img><p>{recipe.name}</p></a>
    //     recipeBoxes.push(recipeElement)
    // }
    const recipeBoxes = recipes.map((recipe) => {
        return (
            <a className='recipe-box' href={recipe.url} target='_blank'>
                <img src={recipe.image} alt={recipe.name}></img>
                <p className='recipe-name'>{recipe.name}</p>
            </a>
        )
    });

    // console.log(ingredients, '---ingredients on recipes page')
    console.log(recipes, '---recipes on recipes page')
    console.log(recipeBoxes, '---recipeBoxes')

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