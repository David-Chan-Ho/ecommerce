import React from "react";
import { useGetCategoriesQuery } from "./catalog.services";
import { List, ListItem } from "../../components/List/List";
import { Link } from "react-router-dom";

function FilterMenu() {
    const { data, error, isLoading } = useGetCategoriesQuery();

    if (error) return <>Categories could not be loaded</>;

    if (isLoading) return <>Loading...</>;

    return (
        <List>
            <b>Categories</b>
            {data?.map((c) => (
                <Link key={c.name} to={`/${c.slug}`}>
                    <ListItem>{c.name}</ListItem>
                </Link>
            ))}
        </List>
    );
}

export default FilterMenu;
