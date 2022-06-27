import { ReturnModelType } from "@typegoose/typegoose"
import { BeAnObject } from "@typegoose/typegoose/lib/types"
import models from "../models";

class ProductServices {
    private products: ReturnModelType<typeof models.Product, BeAnObject>;

    constructor() {
        this.products = models.Product
    }

    async getAll() {
        try {
            return await this.products.find({})
        } catch (error) {
            throw new Error("Products could not be found!")
        }
    }

    async getBySlug(slug: string) {
        try {
            return await this.products.findOne({slug})
        } catch (error) {
            throw new Error("Product could not be found!")
        }
    }
}

export default ProductServices