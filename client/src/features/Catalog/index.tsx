import React from "react";
import { useGetCategoriesQuery, useGetProductsQuery } from "../../services/catalog.services";

function Catalog() {
    const {
        data: products,
        error: productError,
        isLoading: isProductLoading,
    } = useGetProductsQuery();
    const {
        data: categories,
        error: categoryError,
        isLoading: isCategoryLoading,
    } = useGetCategoriesQuery();

    return (
        <div>
            {categoryError ? (
                <>Oh no, there was an error</>
            ) : isCategoryLoading ? (
                <>Loading...</>
            ) : categories ? (
                <>
                    {categories.map((c) => (
                        <li>{c.name}</li>
                    ))}
                </>
            ) : null}

            {productError ? (
                <>Oh no, there was an error</>
            ) : isProductLoading ? (
                <>Loading...</>
            ) : products ? (
                <>
                    {products.map((p) => (
                        <li>{p.name}</li>
                    ))}
                </>
            ) : null}
            <br />
        </div>
    );
}

export default Catalog;
