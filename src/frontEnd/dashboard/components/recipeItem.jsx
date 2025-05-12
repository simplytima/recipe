import React from "react";
import { star } from "../../icon";
import { NavLink } from "react-router-dom";

function RecipeItem({recipeItem}){


    const four_stars = Array(4).fill(star);
    const five_stars = Array(5).fill(star);



    return(
        <NavLink to={`/recipe/${recipeItem.id}`}>
            <div className="recipeItem" name='recipeItem'>
                <div className="img_cuisine">
                    <img src={recipeItem.image}  />
                </div>
                <div className="title">
                    <p>{recipeItem.cuisine}</p>
                    <p>{recipeItem.name}</p>
                </div>
                <div className="rating">
                    <ul>
                        <li>
                        {
                            recipeItem.rating > 4 && recipeItem.rating < 4.5
                                ? four_stars.map((s, index) => <span key={index}>{s}</span>)
                                : recipeItem.rating > 4.5 || recipeItem.rating == 4.5 || recipeItem.rating == 5 
                                ? five_stars.map((s, index) => <span key={index}>{s}</span>)
                                : null
                        }

                        </li>

                        <li>{recipeItem.rating}</li>
                    </ul>
                </div>

            </div>
            </NavLink>
        

    )
}

export default RecipeItem;