import {getModelForClass, prop, Ref} from '@typegoose/typegoose'
import {Order} from './Order'

class Customer {
    @prop({required: true})
    name!: string

    @prop({required: true})
    email!: string

    @prop({required: true})
    hashed_password!: string

    @prop({ref: () => Order})
    order_history?: Ref<Order>[]
}   

export default getModelForClass(Customer)