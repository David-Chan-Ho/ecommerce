import React from "react";
import { useGetCategoriesQuery } from "../../services/catalog.services";

function FilterMenu() {
    const { data, error, isLoading } = useGetCategoriesQuery();

    return (
        <div>
            {error ? (
                <>Categories could not be loaded</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    {data.map((c) => (
                        <li>{c.name}</li>
                    ))}
                </>
            ) : null}
        </div>
    );
}

export default FilterMenu;
