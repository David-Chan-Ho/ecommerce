import express from "express";
import * as categoryControllers from "../controllers/category.controllers";

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
router.get("/", categoryControllers.getAll);

/**
 * GET /api/categories/:name
 * @summary Returns a category by name
 * @tags category
 * @param {string} name.query.required - name param
 * @return {array<Category>} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.get("/:name", categoryControllers.getByName);

export default router;
