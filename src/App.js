import React, { useState} from "react";
import Recipe from './Components/Recipe/Recipe.js';
import './App';
import './App.css';



const App = () => {

  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState('')


 


  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=d39ab340&app_key=a2f2545cd44d9f38bf1301d032e2905f`
    );
    const data = await response.json();
    console.log(data);
    setRecipe(data.hits);
  } 





  return (
    <div className="searchbutton">
      <input 
        placeholder="Type your recipe"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button className="searchbutton"
        onClick={() => getRecipe(search) }>
        Search
      </button>
      <div className="mainComponent">
        {recipes.map(recipe => (
          <Recipe
            tittle={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            calories={recipe.recipe.calories}
          />
      
        ))}
      </div>
    </div>
  );
}

export default App;