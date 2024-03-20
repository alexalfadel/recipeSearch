import './RecipesPage.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getRecipes } from '../../store/recipes'
import { useEffect } from 'react'

function RecipesPage () {
    const dispatch = useDispatch()
    const ingredients = useSelector((state) => state.ingredients)
    const recipes = useSelector((state) => state.recipes)

    const createSearchParams = (ingredients) => {
        let paramsString = ingredients.join('&')
        return new URLSearchParams({
            q: paramsString
        })

    }

    useEffect(() => {
        const ingredientsParams = createSearchParams(ingredients)
        dispatch(getRecipes(ingredientsParams))
    }, [dispatch])
    
    return (
        <div>
            <h1>Recipes Page</h1>
        </div>
    )
}

export default RecipesPage