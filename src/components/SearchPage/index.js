import { ingredientsData } from "../../Data/ingedients";
import { useState } from "react";
import { useEffect } from "react";

function SearchPage() {
//   let allIngredients = [...ingredientsData]
  const [allIngredients, setAllIngredients] = useState([...ingredientsData])
  const [ingredientsShown, setIngredientsShown] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  useEffect(() => {}, [ingredientsShown]);

  const addIngredient = (ingredient) => {
    // console.log(ingredient, '---ingredient in add ingredient')
    console.log(selectedIngredients, '----selectedIngredients before trying to add it')
    const updatedIngredients = [...selectedIngredients, ingredient];
    console.log(updatedIngredients, '---updatedIngredients')
    setSelectedIngredients(updatedIngredients);
    console.log(selectedIngredients, '---selectedIngredients in add ingredient')
    const updatedAllIngredients = allIngredients.filter(
      (currentIngredient) => ingredient !== currentIngredient
    );
    setAllIngredients(updatedAllIngredients)

  };

  const removeIngredient = (ingredient) => {
    const updatedIngredients = selectedIngredients.filter(
      (currentIngredient) => currentIngredient !== ingredient
    );
    setSelectedIngredients(updatedIngredients);
    ingredientsData = [...ingredientsData, ingredient];
  };

  const searchIngredients = [];

  for (let i = 0; i < ingredientsShown.length; i++) {
    const ingredient = ingredientsShown[i];
    const ingredientElement = (
      <li>
        <p onClick={(e) => addIngredient(ingredient)}>{ingredient}</p>
      </li>
    );
    searchIngredients.push(ingredientElement);
  }

  console.log(selectedIngredients, "----selectedIngredients");

  const selectedIngredientsElements = selectedIngredients.forEach((ingredient) => {
    return (
      <li>{ingredient}</li>
    )
  })

  const findRecipes = () => {
    
  }

  return (
    <div>
      <h1>What's in your fridge?</h1>
      <form>
        <input
          value={searchTerm}
          placeholder="Search for your ingredients"
          onChange={(e) => {
            if (e.target.value.length === 0) {
              setIngredientsShown([]);
              setSearchTerm('')
            } else {
              setSearchTerm(e.target.value);
              const filteredIngredients = ingredientsData.filter((ingredient) =>
                ingredient.startsWith(e.target.value.toLowerCase())
              );
              setIngredientsShown(filteredIngredients);
            }
          }}
        ></input>
        <div>{selectedIngredients}</div>
        <div>
          <button>Find Recipes!</button>
        </div>
      </form>
    </div>
  );
}

export default SearchPage;
