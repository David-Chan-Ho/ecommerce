import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatalogPage from "./features/Catalog/CatalogPage";
import ProductPage from "./features/Catalog/ProductPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CatalogPage />} />
                <Route path="/products/:slug" element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
