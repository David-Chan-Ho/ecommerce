import {DocumentType, getModelForClass, prop, Ref} from '@typegoose/typegoose'
import {Category} from './Category'

export class Product {
    @prop({required: true})
    name!: string

    @prop({required: true})
    sku!: string

    @prop({default: function (this: DocumentType<Product>) {
        this.slug = `${this.name}-${this.sku}`
    }})
    slug?: string

    @prop({required: true})
    quantity!: number

    @prop({required: true})
    price!: number

    @prop({required: true})
    image!: string

    @prop({ref: () => Category})
    category?: Ref<Category>
}   

export default getModelForClass(Product)