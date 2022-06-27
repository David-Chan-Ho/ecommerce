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
    const slug = req.params.slug;
    const response = await products.getBySlug(slug);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(error);
  }
}
