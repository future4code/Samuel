import { Paper } from "../../entities/Paper";
import { Frame } from "../../entities/Frame";
import { Order } from "../../entities/Order";

export class SimulateOrderUseCase {
    
    execute(input: SimulateOrderInput): SimulateOrderOutput {
        const paper = new Paper(input.print.size, input.print.paperType);
        const frame = new Frame(input.frame.type, input.frame.borderSize);

        const order = new Order(paper, frame);

        return {
            printPrice: order.calculatePaperPrice(),
            framePrice: order.calculateFramePrice(),
            totalPrice: order.calculateTotalPrice()
        }
    }    
}

export interface SimulateOrderInput {
    print: {
        size: string,
        paperType: string
    }
    frame: {
        type: string,
        borderSize: string,
    }
}

export interface SimulateOrderOutput {
    printPrice: number,
    framePrice: number,
    totalPrice: number
}