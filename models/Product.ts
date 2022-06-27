import {DocumentType, getModelForClass, prop, Ref} from '@typegoose/typegoose'
import {Tag} from './Tag'

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

    @prop({ref: () => Tag})
    tags?: Ref<Tag>[]
}   

export default getModelForClass(Product)