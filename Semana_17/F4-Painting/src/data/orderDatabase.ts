import { Order } from '../business/entities/Order';
import { OrderGateway } from '../business/gateways/orderGateway';
import moment from 'moment';
import { BaseDatabase } from './baseDatabase';

interface OrderModel {
    id: string,
    user_id: string,    
    print_size: string,
    print_type: string,
    frame_type: string,
    border_size: string,
    order_date: string
}

export class OrderDatabase extends BaseDatabase implements OrderGateway {

    async saveOrder(order: Order): Promise<void> {

        if(!order.getId()){
            throw new Error("ID do pedido não disponível.");
        }
        if(!order.getUserId()){
            throw new Error("Id do usuário inválido.");
        }
        const databaseModel: OrderModel = {
            id: order.getId() as string,
            user_id: order.getUserId() as string,
            print_size: order.getPaper().getPaperSize(),
            print_type: order.getPaper().getPaperType(),
            frame_type: order.getFrame().getFrameType(),
            border_size: order.getFrame().getBorderSize(),
            order_date: (moment.now()/1000).toFixed()
        }

        await this.connection.raw(
            `INSERT INTO 
                      orders (id, user_id, print_size, print_type, frame_type, border_size, order_date) 
                  VALUES(
                      "${databaseModel.id}",
                      "${databaseModel.user_id}",
                      "${databaseModel.print_size}",
                      "${databaseModel.print_type}",
                      "${databaseModel.frame_type}",
                      "${databaseModel.border_size}",
                      "${databaseModel.order_date}"
                  )`
        );
    }

    async getAllOrders(): Promise<Order[]> {
        const orders: Order[] = [];
        const result = await this.connection.raw(
            `SELECT * FROM f4paintings.orders`
        );
        for (let order of result[0]){
            orders.push(order)
        }
        return orders;
    }
}