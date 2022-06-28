import React from "react";
import FilterMenu from "./FilterMenu";
import Products from "./Products";

function Catalog() {
    return (
        <div>
            <FilterMenu />
            <Products />
        </div>
    );
}

export default Catalog;
