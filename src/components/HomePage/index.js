import { getRecipes } from "../../store/recipes"
import { useDispatch } from "react-redux"
import { getIngredients } from '../../store/ingredients'
import SearchPage from "../SearchPage"

function HomePage() {
    const dispatch = useDispatch()

    const searchParams = new URLSearchParams({
        q: 'chicken&peas&carrots'
    })
    console.log(searchParams)
    // console.log(process.env.REACT_APP_API_KEY, '----api key')

    const fetchTest = () => {
        console.log('----fetchTestClicked')
        // dispatch(getRecipes(searchParams))
        dispatch(getIngredients())
    }

    console.log(process.env.REACT_APP_APP_ID)
    return (
        <div>
            <h1>Recipe HomePage</h1>
            <button onClick={fetchTest}>Test Fetch</button>
            {/* <button onClick={fetchTest}> Test Ingredients</button> */}
            <SearchPage />
        </div>
    )
}

export default HomePage