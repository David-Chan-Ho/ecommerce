import { ReturnModelType, DocumentType } from "@typegoose/typegoose";
import { BeAnObject } from "@typegoose/typegoose/lib/types";
import models from "../models";
import { Product } from "../models/Product";

class ProductServices {
    private products: ReturnModelType<typeof models.Product, BeAnObject>;

    constructor() {
        this.products = models.Product;
    }

    async getAll() {
        try {
            return await this.products.find({});
        } catch (error) {
            throw new Error("Products could not be found!");
        }
    }

    async getBySlug(slug: string) {
        try {
            return await this.products.findOne({ slug });
        } catch (error) {
            throw new Error("Product could not be found!");
        }
    }

    async create(product: Product) {
        try {
            return await this.products.create(product);
        } catch (error) {
            throw new Error("Product could not be found!");
        }
    }
}

export default ProductServices;
