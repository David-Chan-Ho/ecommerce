import express from "express";
import { body, param } from "express-validator";
import * as productControllers from "../controllers/product.controllers";
import validateResponse from "../middlewares/validationResults";

const router = express.Router();

/**
 * A product type
 * @typedef {object} Product
 * @property {string} name.required - The name
 * @property {string} sku.required - The sku
 * @property {string} slug - The slug
 * @property {number} quantity.required - The quantity
 * @property {number} price.required - The price
 * @property {string} image.required - The image
 * @property {string} category_name.required - The category
 */

/**
 * GET /api/products
 * @summary Returns all products
 * @tags product
 * @return {array<Product>} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.get("", productControllers.getAll);

/**
 * POST /api/products
 * @summary Create and Returns a product
 * @tags product
 * @param {Product} request.body.required - product body
 * @return {Product} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.post(
    "",
    body("name").exists().isString().isLength({ min: 3 }),
    body("sku").isString().exists(),
    body("quantity").isInt({ min: 0 }).exists(),
    body("price").isFloat({ min: 0 }).exists(),
    body("image").isString().exists(),
    body("category_name").isString().exists(),
    validateResponse,
    productControllers.createProduct
);

/**
 * GET /api/products/:slug
 * @summary Returns a product by slug
 * @tags product
 * @param {string} slug.param.required - slug param
 * @return {array<Product>} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.get(
    "/:slug",
    param("slug").exists().isString(),
    validateResponse,
    productControllers.getBySlug
);

export default router;
