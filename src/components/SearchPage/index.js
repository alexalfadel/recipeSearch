import { ingredientsData } from "../../Data/ingedients";
import { useState, useEffect } from "react";
import { updateIngredients } from "../../store/ingredients";
import { useDispatch } from "react-redux";
import RecipesPage from "../RecipesPage";
import "./searchPage.css";
import { getRecipes } from "../../store/recipes";

function SearchPage() {
  const dispatch = useDispatch();
  const [allIngredients, setAllIngredients] = useState(
    [...ingredientsData].sort()
  );
  const [ingredientsShown, setIngredientsShown] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [searchIngredients, setSearchIngredients] = useState([]);
  const [searchOrRecipe, setSearchOrRecipe] = useState("search");


  const addIngredient = (ingredient) => {
    const updatedIngredients = [...selectedIngredients, ingredient];

    setSelectedIngredients(updatedIngredients);

    const updatedAllIngredients = allIngredients.filter(
      (currentIngredient) => ingredient !== currentIngredient
    );
    setAllIngredients(updatedAllIngredients.sort());
    updateSearchIngredients(ingredient, true);
    setSearchTerm("");
  };

  const removeIngredient = (ingredient) => {
    const updatedSelectedIngredients = selectedIngredients.filter(
      (currentIngredient) => currentIngredient !== ingredient
    );
    setSelectedIngredients(updatedSelectedIngredients);
    const updatedAllIngredients = [...allIngredients, ingredient].sort();
    setAllIngredients(updatedAllIngredients);
  };

  const updateSearchIngredients = (selectedIngredient, action) => {
    if (action) {
      setIngredientsShown([]);
    } else {
    }
  };

  const searchIngredientsList = [];

  for (let i = 0; i < ingredientsShown.length; i++) {
    const ingredient = ingredientsShown[i];
    const ingredientElement = (
      <li className="search-ingredient" onClick={(e) => addIngredient(ingredient)}>
        {ingredient}
      </li>
    );
    searchIngredientsList.push(ingredientElement);
  }

  const selectedIngredientsElements = [];

  for (let i = 0; i < selectedIngredients.length; i++) {
    let ingredient = selectedIngredients[i];
    let ingredientElement = (
      <li className='selected-ingredient' onClick={() => removeIngredient(ingredient)}>{ingredient}</li>
    );
    selectedIngredientsElements.push(ingredientElement);
  }

  const findRecipes = (e) => {
    e.preventDefault();
    dispatch(updateIngredients(selectedIngredients));
    setSearchOrRecipe("recipe");
  };

  const reset = () => {
    setAllIngredients([...ingredientsData].sort());
    setIngredientsShown([]);
    setSearchTerm("");
    setSelectedIngredients([]);
    setSearchIngredients([]);
    setSearchOrRecipe("search");
    dispatch(getRecipes())
  };

  return (
    <div id="full-container">
      {searchOrRecipe === "search" && (
        <div className="search-module-container">
          <h1 id="search-header">What's in your fridge?</h1>
          <form id='search-form'>
            <div id='search-box'>
              <input
                id="search-bar"
                maxLength={35}
                value={searchTerm}
                placeholder="Search for your ingredients"
                onChange={(e) => {
                  if (e.target.value.length === 0) {
                    setIngredientsShown([]);
                    setSearchTerm("");
                  } else {
                    setSearchTerm(e.target.value);
                    const filteredIngredients = allIngredients.filter(
                      (ingredient) =>
                        ingredient.startsWith(e.target.value.toLowerCase())
                    );
                    setIngredientsShown(filteredIngredients);
                  }
                }}
              ></input>
              <div id="search-ingredient-list">{searchIngredientsList}</div>
            </div>
            {selectedIngredients.length > 0 && <div id='selected-ingredients-box'>{selectedIngredientsElements}</div>}
            <div>
              <button
                id={`find-recipes-button-${selectedIngredients.length ? 'undisabled' : 'disabled'}`}
                disabled={selectedIngredients.length ? false : true}
                onClick={(e) => findRecipes(e)}
              >
                Find Recipes!
              </button>
            </div>
          </form>
        </div>
      )}
      {searchOrRecipe === "recipe" && <RecipesPage />}
      {searchOrRecipe === "recipe" && 
        <button id='search-again-button' onClick={() => reset()}>Search Again</button>
      }
    </div>
  );
}

export default SearchPage;
