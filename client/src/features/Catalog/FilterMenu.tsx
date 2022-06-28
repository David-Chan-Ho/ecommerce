import React from "react";
import { useGetCategoriesQuery } from "../../services/catalog.services";

function FilterMenu() {
    const { data, error, isLoading } = useGetCategoriesQuery();

    return (
        <div>
            {error ? (
                <>Oh no, there was an error</>
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
