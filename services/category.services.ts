import { ReturnModelType } from "@typegoose/typegoose";
import { BeAnObject } from "@typegoose/typegoose/lib/types";
import models from "../models";
import { Category } from "../models/Category";

class CategoryServices {
    private categories: ReturnModelType<typeof models.Category, BeAnObject>;

    constructor() {
        this.categories = models.Category;
    }

    async getAll() {
        try {
            return await this.categories.find({});
        } catch (error) {
            throw new Error("Categories could not be found!");
        }
    }

    async getByName(name: string) {
        try {
            return await this.categories.findOne({ name });
        } catch (error) {
            throw new Error("Category could not be found!");
        }
    }

    async create(category: Category) {
        try {
            return await this.categories.create(category);
        } catch (error) {
            throw new Error("Category could not be found!");
        }
    }
}

export default CategoryServices;
