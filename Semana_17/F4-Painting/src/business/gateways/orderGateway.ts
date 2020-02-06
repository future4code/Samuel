import { Order } from "../entities/Order";

export interface OrderGateway {
    saveOrder(order: Order): Promise<void>;
    getAllOrders(): Promise<Order[]>;
}