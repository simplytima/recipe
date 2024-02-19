import React from "react";

function RecipeDetails({recipeItem}){
    return(
        <div className="recipeDetails">
            <div className="img">
                <img src={recipeItem.image}  />
            </div>
        </div>
    )
}

export default RecipeDetails;