import ProductServices from "../services/product.services";
import { Request, Response } from "express";

const products = new ProductServices();

export async function getAll(req: Request, res: Response) {
  try {
    const response = await products.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(error);
  }
}

export async function getBySlug(req: Request, res: Response) {
  try {
    const { slug } = req.params;
    const response = await products.getBySlug(slug);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(error);
  }
}

export async function createProduct(req: Request, res: Response) {
  try {
    const response = await products.create({
      name: req.body.name,
      sku: req.body.sku,
      quantity: req.body.quantity,
      price: req.body.price,
      image: req.body.image,
      category_name: req.body.category_name,
    });
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(error);
  }
}
