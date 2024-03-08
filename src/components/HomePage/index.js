import { getRecipes } from "../../store/recipes"
import { useDispatch } from "react-redux"

function HomePage() {
    const dispatch = useDispatch()

    const searchParams = new URLSearchParams({
        q: 'chicken&peas&carrots'
    })
    console.log(searchParams)

    const fetchTest = () => {
        console.log('----fetchTestClicked')
        dispatch(getRecipes(searchParams))
    }
    console.log(process.env.REACT_APP_APP_ID)
    return (
        <div>
            <h1>Recipe HomePage</h1>
            <button onClick={fetchTest}>Test Fetch</button>
        </div>
    )
}

export default HomePage