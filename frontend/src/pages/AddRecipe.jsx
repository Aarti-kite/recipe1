import React, { useState } from "react";
import "./AddRecipe.css";

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    time: "",
    ingredients: "",
    instructions: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Recipe Added:", recipe);
  };

  return (
    <div className="add-recipe-container">
      <h2>Add Your Recipe</h2>
      <form className="recipe-form">
        <input type="text" name="name" placeholder="Recipe Name" onChange={handleChange} />
        <input type="text" name="time" placeholder="Preparation Time" onChange={handleChange} />
        <textarea name="ingredients" placeholder="Ingredients (separate by commas)" onChange={handleChange}></textarea>
        <textarea name="instructions" placeholder="Instructions" onChange={handleChange}></textarea>
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} />
        <button type="button" onClick={handleSubmit}>Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe