import './RecipesPage.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getRecipes } from '../../store/recipes'
import { useEffect } from 'react'

function RecipesPage () {
    const dispatch = useDispatch()
    const ingredients = useSelector((state) => state.ingredients)
    const recipes = useSelector((state) => state.recipes)

    

    useEffect(() => {
        const ingredientsParams = createSearchParams(ingredients)
        console.log('getting recipes')
        dispatch(getRecipes(ingredientsParams))
    }, [dispatch, ingredients])

    const createSearchParams = (ingredients) => {
        let paramsString = ingredients.join('&')
        return new URLSearchParams({
            q: paramsString
        })
    }

    if (!recipes.length) {
        console.log('---no recipes :(----')
        return <h1>Loading...</h1>
    }
    
    // const recipeBoxes = []

    // for (let recipe of recipes) {
    //     const recipeElement = <a href={recipe.url} target='_blank'><img src={recipe.image} alt={recipe.name}></img><p>{recipe.name}</p></a>
    //     recipeBoxes.push(recipeElement)
    // }
    const recipeBoxes = recipes.map((recipe) => {
        return (
            <a href={recipe.url} target='_blank'>
                <img src={recipe.image} alt={recipe.name}></img>
                <p>{recipe.name}</p>
            </a>
        )
    });

    // console.log(ingredients, '---ingredients on recipes page')
    console.log(recipes, '---recipes on recipes page')
    console.log(recipeBoxes, '---recipeBoxes')

    return (
        <div>
            <h1>Recipes Page</h1>
            {recipeBoxes}
        </div>
    )
}

export default RecipesPage