import express from "express";
import * as productControllers from "../controllers/product.controllers";

const router = express.Router();

/**
 * A product type
 * @typedef {object} Product
 * @property {string} name.required - The name
 * @property {string} sku.required - The sku
 * @property {string} slug - The slug
 * @property {number} quantity.required - The quantity - double
 * @property {number} price.required - The price - double
 * @property {number} image.required - The image - double
 * @property {string} category_name.required - The category
 */

/**
 * GET /api/products
 * @summary Returns all products
 * @tags product
 * @return {array<Product>} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.get("/", productControllers.getAll);

/**
 * GET /api/products/:slug
 * @summary Returns a product by slug
 * @tags product
 * @param {string} slug.query.required - slug param
 * @return {array<Product>} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.get("/:slug", productControllers.getBySlug);

export default router;
