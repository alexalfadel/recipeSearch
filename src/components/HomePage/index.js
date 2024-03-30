import { getRecipes } from "../../store/recipes"
import { useDispatch } from "react-redux"
import RecipesPage from "../RecipesPage/index.js"
import SearchPage from "../SearchPage/index.js"

function HomePage() {
    const dispatch = useDispatch()

    return (
        <div>
            <SearchPage />
        </div>
    )
}

export default HomePage