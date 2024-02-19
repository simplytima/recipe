import React from "react";

function Search(){
    return(
        <div className="search">
            <input type="text" placeholder="Find recipe or ingredient" />
            <button>
                <ion-icon name="search-outline"></ion-icon>
            </button>
        </div>
    )
}

export default Search;