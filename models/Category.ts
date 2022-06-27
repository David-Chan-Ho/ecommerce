import {getModelForClass, prop, Ref, DocumentType} from '@typegoose/typegoose'
import {Product} from './Product'

export class Category {
    @prop({required: true})
    name!: string

    @prop({required: true})
    banner_image!: string

    @prop({default: function (this: DocumentType<Category>) {
        this.slug = this.name
    }})
    slug?: string

    @prop({ref: () => Product})
    items!: Ref<Product>[]
}   

export default getModelForClass(Category)