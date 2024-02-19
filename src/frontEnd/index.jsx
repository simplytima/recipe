import React from "react"
import NavBar from "./navBar/navBar";
import { Outlet } from "react-router-dom";

function Index(){
    return(
        <div className="indexContainer">
            <NavBar/>
            <Outlet/>
        </div>
    )
}

export default Index;