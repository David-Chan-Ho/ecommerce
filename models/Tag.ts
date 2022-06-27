import {getModelForClass, prop} from '@typegoose/typegoose'

export class Tag {
    @prop({required: true})
    name!: string
}

export default getModelForClass(Tag)