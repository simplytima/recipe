import React from "react";
import Logo from "./components/logo";
import Search from "./components/search";
import LogIn from "./components/login";

function NavBar(){
    return(
        <div className="navBar">
            <Logo/>
            <Search/>
            <LogIn/>
        </div>
    )
}

export default NavBar;