import { ingredientsData } from "../../Data/ingedients";
import { useState } from "react";
import { useEffect } from "react";

function SearchPage() {
  const [ingredientsShown, setIngredientsShown] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIngredients, setSelectedIngredients] = [];

  useEffect(() => {}, [ingredientsShown]);

  const addIngredient = (ingredient) => {
    const updatedIngredients = [...selectedIngredients, ingredient];
    setSelectedIngredients(updatedIngredients);
    ingredientsData = ingredientsData.filter(
      (currentIngredient) => ingredient !== currentIngredient
    );
  };

  const removeIngredient = (ingredient) => {
    const updatedIngredients = selectedIngredients.filter(
      (currentIngredient) => currentIngredient !== ingredient
    );
    setSelectedIngredients(updatedIngredients);
    ingredientsData = [...ingredientsData, ingredient];
  };

  const ingredients = [];

  for (let i = 0; i < ingredientsShown.length; i++) {
    const ingredient = ingredientsShown[i];
    const ingredientElement = (
      <li>
        <p onClick={(e) => addIngredient(ingredient)}>{ingredient}</p>
      </li>
    );
    ingredients.push(ingredient);
  }

  console.log(selectedIngredients, "----selectedIngredients");

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
              console.log("---onchange----");
              console.log(e.target.value);
              setSearchTerm(e.target.value);
              console.log(searchTerm, "----searchTerm");
              const filteredIngredients = ingredientsData.filter((ingredient) =>
                ingredient.startsWith(searchTerm.toLowerCase())
              );
              setIngredientsShown(filteredIngredients);
              console.log(filteredIngredients, "----filteredIngredients");
            }
          }}
        ></input>
        <div>{ingredients}</div>
      </form>
    </div>
  );
}

export default SearchPage;
