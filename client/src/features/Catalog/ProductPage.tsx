import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductBySlugQuery } from "./catalog.services";

function ProductPage() {
    const params = useParams();

    const { data, error, isLoading } = useGetProductBySlugQuery(
        params.slug as string
    );

    if (error) return <>Product could not be loaded</>;

    if (isLoading) return <>Loading...</>;

    return (
        <>
            {data?.name}
            {data?.price}
        </>
    );
}

export default ProductPage;
