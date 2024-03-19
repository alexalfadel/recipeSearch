import { ingredientsData } from "../../Data/ingedients";
import { useState } from "react";
import { useEffect } from "react";
import { updateIngredients } from "../../store/ingredients";
import { useDispatch } from "react-redux";

function SearchPage() {
  //   let allIngredients = [...ingredientsData]
  const dispatch = useDispatch();
  const [allIngredients, setAllIngredients] = useState([...ingredientsData]);
  const [ingredientsShown, setIngredientsShown] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [searchIngredients, setSearchIngredients] = useState([]);

  useEffect(() => {}, [ingredientsShown, allIngredients, searchIngredients]);

  const addIngredient = (ingredient) => {
    const updatedIngredients = [...selectedIngredients, ingredient];

    setSelectedIngredients(updatedIngredients);

    const updatedAllIngredients = allIngredients.filter(
      (currentIngredient) => ingredient !== currentIngredient
    );
    setAllIngredients(updatedAllIngredients);
    updateSearchIngredients(ingredient, true);
    setSearchTerm("");
  };

  const removeIngredient = (ingredient) => {
    console.log(ingredient, '---ingredient in cabbage')
    const updatedIngredients = selectedIngredients.filter(
      (currentIngredient) => currentIngredient !== ingredient
    );
    console.log(updatedIngredients, '---updatedIngredients in removeIngredient')
    setSelectedIngredients(updatedIngredients);
    console.log(selectedIngredients, '----selectedIngredients')
    // ingredientsData = [...ingredientsData, ingredient];
  };

  const updateSearchIngredients = (selectedIngredient, action) => {
    if (action) {
      setIngredientsShown([]);
    } else {
      // const updatedSelectedIngredients = selectedIngredients.filter((ingredient) => ingredient !== selectedIngredient)
      // setSelectedIngredients(updatedSelectedIngredients)
      // const updatedIngredients = [...allIngredients, selectedIngredient]
    }
    // const filteredIngredients = allIngredients.filter((ingredient) =>
    //   ingredient.startsWith(selectedIngredient)
    // );
    // setIngredientsShown([]);

    // for (let i = 0; i < ingredientsShown.length; i++) {
    //   const ingredient = ingredientsShown[i];
    //   const ingredientElement = (
    //     <li>
    //       <p onClick={(e) => addIngredient(ingredient)}>{ingredient}</p>
    //     </li>
    //   );
    //   searchIngredientsList.push(ingredientElement);
    // }
  };

  const searchIngredientsList = [];

  for (let i = 0; i < ingredientsShown.length; i++) {
    const ingredient = ingredientsShown[i];
    const ingredientElement = (
      <li>
        <p onClick={(e) => addIngredient(ingredient)}>{ingredient}</p>
      </li>
    );
    searchIngredientsList.push(ingredientElement);
  }

  const selectedIngredientsElements = [];


  for (let i = 0; i < selectedIngredients.length; i++) {
    let ingredient = selectedIngredients[i];
    let ingredientElement = <li onClick={(() => removeIngredient(ingredient))}>{ingredient}</li>;
    selectedIngredientsElements.push(ingredientElement);
  }

  const findRecipes = () => {
    dispatch(updateIngredients(selectedIngredients));
  };

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
              setSearchTerm("");
            } else {
              setSearchTerm(e.target.value);
              const filteredIngredients = allIngredients.filter((ingredient) =>
                ingredient.startsWith(e.target.value.toLowerCase())
              );
              setIngredientsShown(filteredIngredients);
            }
          }}
        ></input>
        <div>{searchIngredientsList}</div>
        <div>{selectedIngredientsElements}</div>
        <div>
          <button>Find Recipes!</button>
        </div>
      </form>
    </div>
  );
}

export default SearchPage;
