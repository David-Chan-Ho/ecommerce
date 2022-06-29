import productRoutes from "./product.routes";
import categoryRoutes from "./category.routes";
import express from "express";

const router = express.Router();

router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);

export default router;
