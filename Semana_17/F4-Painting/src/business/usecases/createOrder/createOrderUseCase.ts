import { Paper } from "../../entities/Paper";
import { Frame } from "../../entities/Frame";
import { Order } from "../../entities/Order";
import { User } from "../../entities/User";
import { OrderGateway } from "../../gateways/orderGateway";

export interface idGenerator {
    generate(): string;
}

export class CreateOrderUseCase {

    private orderGateway: OrderGateway;
    private idGenerator: idGenerator;

    constructor(orderGateway: OrderGateway, idGenerator: idGenerator){
        this.orderGateway = orderGateway;
        this.idGenerator = idGenerator;
    }

    async execute(input: CreateOrderInput){

        const paper = new Paper(input.print.size, input.print.paperType);
        const frame = new Frame(input.frame.type, input.frame.borderSize);
        const user = new User(input.user.name, input.user.email)

        const order = new Order(paper, frame, user, this.idGenerator.generate());

        await this.orderGateway.saveOrder(order);

        return {
            printPrice: order.calculatePaperPrice(),
            framePrice: order.calculateFramePrice(),
            totalPrice: order.calculateTotalPrice(),
            orderId: order.getId()
        }
    }
}

export interface CreateOrderInput {
    print: {
        size: string,
        paperType: string
    }
    frame: {
        type: string,
        borderSize: string
    }
    user: {
        name: string,
        email: string
    }    
}