import { getRecipes } from "../../store/recipes"
import { useDispatch } from "react-redux"
import RecipesPage from "../RecipesPage/index.js"
// import { getIngredients } from '../../store/ingredients'
import SearchPage from "../SearchPage/index.js"

function HomePage() {
    const dispatch = useDispatch()

    console.log('homepage')

    return (
        <div>
            {/* <h1>Recipe HomePage</h1> */}
            <SearchPage />
            {/* <RecipesPage /> */}
        </div>
    )
}

export default HomePage