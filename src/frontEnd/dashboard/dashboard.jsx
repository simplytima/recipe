import React, { useState } from "react";
import Recipes from "./components/recipes";
import axios from "axios";

function Dashboard(){

    const[recipe,setRecipe]=useState([])

    const getRecipe=async()=>{
        const resp = await axios.get('https://dummyjson.com/recipes')
        setRecipe(resp.data.recipes) 
        console.log(resp)
    }

    return(
        <div className="dashboardContainer">
            <Recipes recipe={recipe} getRecipe={getRecipe}/>
            
        </div>
    )
}

export default Dashboard;