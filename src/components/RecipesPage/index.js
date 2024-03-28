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
    
    console.log(ingredients, '---ingredients on recipes page')
    console.log(recipes, '---recipes on recipes page')
    return (
        <div>
            <h1>Recipes Page</h1>
        </div>
    )
}

export default RecipesPage