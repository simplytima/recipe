import React, { useEffect } from "react";
import RecipeItem from "./recipeItem";


function Recipes({recipe,getRecipe}){

    useEffect(()=>{
        getRecipe()
    })
    return(
        <div className="recipes">
            {
                recipe.map((recipeItem)=>{
                    return(
                        <RecipeItem key={recipeItem.id} getRecipe={getRecipe} recipeItem={recipeItem}/>
                    )
                })
            }
        </div>
    )
}

export default Recipes;