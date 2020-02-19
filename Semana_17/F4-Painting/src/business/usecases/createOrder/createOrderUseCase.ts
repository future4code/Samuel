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

    async execute(input: CreateOrderInput): Promise<CreateOrderOutput>{

        const paper = new Paper(input.print.size, input.print.paperType);
        const frame = new Frame(input.frame.type, input.frame.borderSize);
        

        const order = new Order(paper, frame, input.user.userId, this.idGenerator.generate());

        await this.orderGateway.saveOrder(order);

        return {
            printPrice: order.calculatePaperPrice(),
            framePrice: order.calculateFramePrice(),
            totalPrice: order.calculateTotalPrice(),
            orderId: order.getId() as string
        }
    }
}

export interface CreateOrderInput {
    print: {
        size: string,
        paperType: string
    };
    frame: {
        type: string,
        borderSize: string
    };
    user: {
        userId: string
    };
}

export interface CreateOrderOutput {
    printPrice: number;
    framePrice: number;
    totalPrice: number;
    orderId: string;
}