import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function RecipeDetails(){

    const { id } = useParams();
    const [recipeItem, setRecipeItem] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
            setRecipeItem(response.data);
        };
        fetchRecipe();
    }, [id]);

    if (!recipeItem) return <p>Loading...</p>;




    return(
        <div className="recipeDetails">
            <div className="img">
                <img src={recipeItem.image}  />
            </div>
            <div className="div">
                <h2>{recipeItem.name}</h2>
                <div className="des">
                    <p><span>Cuisine: </span><i>{recipeItem.cuisine}</i></p>
                    <p><span>Rating:</span> <i>{recipeItem.rating}</i></p>
                    
                </div>
              
            </div>

        </div>
    )
}

export default RecipeDetails;



    


