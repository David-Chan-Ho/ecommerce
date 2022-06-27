import express from 'express'
import * as productControllers from '../controllers/product.controllers'

const router = express.Router()

router.get("products", productControllers.getAll)

router.get("products/:slug", productControllers.getBySlug)