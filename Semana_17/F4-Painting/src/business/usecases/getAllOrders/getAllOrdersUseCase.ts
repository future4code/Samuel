import { OrderGateway } from "../../gateways/orderGateway"

export class GetAllOrdersUseCase {

    private orderGateway: OrderGateway;

    constructor(orderGateway: OrderGateway){
        this.orderGateway = orderGateway;
    }
    
    async execute(){

        return await this.orderGateway.getAllOrders();

    }
}

export interface GetAllOrdersUseCaseInput {

}