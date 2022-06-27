import express from "express";
import * as categoryControllers from "../controllers/category.controllers";
import { body, param } from "express-validator";
import validateResponse from "../middlewares/validationResults";

const router = express.Router();

/**
 * A category type
 * @typedef {object} Category
 * @property {string} name.required - The name
 * @property {string} slug - The slug
 * @property {string} banner_image.required - The banner_image
 */

/**
 * GET /api/categories
 * @summary Returns all categories
 * @tags category
 * @return {array<Category>} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.get("", categoryControllers.getAll);

/**
 * POST /api/categories
 * @summary Create and Returns a category
 * @tags category
 * @param {Category} request.body.required - category body
 * @return {Category} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.post(
    "",
    body("name").exists().isString().isLength({ min: 3 }),
    body("banner_image").isString().exists(),
    validateResponse,
    categoryControllers.createCategory
);

/**
 * GET /api/categories/:name
 * @summary Returns a category by name
 * @tags category
 * @param {string} name.param.required - name param
 * @return {array<Category>} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.get(
    "/:name",
    param("name").exists().isString(),
    validateResponse,
    categoryControllers.getByName
);

export default router;
