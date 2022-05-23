import React from "react";
import './Recipe.css';




const Recipe = ({tittle, image, ingredients, calories}) => {


  return (
 
    <div className="card">
      <img 
        src={image} 
        className="imageRecipe" 
        alt="..."
        
      />
      <div className="card-body">
        <h3 className="tittle">{tittle}</h3>
        <ul >
          {ingredients.map(ingredients => {
            return <li className="ingridientsText">{ingredients.text}</li>
          })}
        </ul>  
        <p>{calories.toFixed() + ' Kcal'}</p>
      </div>
  </div>
  );
};

export default Recipe;

