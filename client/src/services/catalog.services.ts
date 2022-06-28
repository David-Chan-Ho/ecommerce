import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICategory } from "../types/category.type";
import { IProduct } from "../types/product.type";

export const catalogApi = createApi({
    reducerPath: "catalogApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => "products",
        }),
        getCategories: builder.query<ICategory[], void>({
            query: () => "categories",
        }),
    }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = catalogApi;
