import React from "react";
import { useGetProductsQuery } from "../../services/catalog.services";

function Products() {
    const { data, error, isLoading } = useGetProductsQuery();

    return (
        <div>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    {data.map((p) => (
                        <li>{p.name}</li>
                    ))}
                </>
            ) : null}
        </div>
    );
}

export default Products;
